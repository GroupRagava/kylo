/**
 * 
 */
package com.thinkbiganalytics.metadata.core.op;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import javax.inject.Inject;

import org.joda.time.DateTime;
import org.springframework.util.StringUtils;

import com.google.common.base.Predicate;
import com.google.common.collect.ComparisonChain;
import com.google.common.collect.Iterators;
import com.google.common.collect.Lists;
import com.google.common.collect.Ordering;
import com.thinkbiganalytics.metadata.api.dataset.Dataset;
import com.thinkbiganalytics.metadata.api.dataset.DatasetProvider;
import com.thinkbiganalytics.metadata.api.dataset.filesys.DirectoryDataset;
import com.thinkbiganalytics.metadata.api.dataset.filesys.FileList;
import com.thinkbiganalytics.metadata.api.dataset.hive.HiveTableDataset;
import com.thinkbiganalytics.metadata.api.dataset.hive.HiveTableUpdate;
import com.thinkbiganalytics.metadata.api.event.DataChangeEventListener;
import com.thinkbiganalytics.metadata.api.feed.Feed;
import com.thinkbiganalytics.metadata.api.feed.Feed.ID;
import com.thinkbiganalytics.metadata.api.feed.FeedDestination;
import com.thinkbiganalytics.metadata.api.feed.FeedProvider;
import com.thinkbiganalytics.metadata.api.op.ChangeSet;
import com.thinkbiganalytics.metadata.api.op.ChangeSet.ChangeType;
import com.thinkbiganalytics.metadata.api.op.ChangeSetCriteria;
import com.thinkbiganalytics.metadata.api.op.ChangedContent;
import com.thinkbiganalytics.metadata.api.op.DataOperation;
import com.thinkbiganalytics.metadata.api.op.DataOperation.State;
import com.thinkbiganalytics.metadata.api.op.DataOperationCriteria;
import com.thinkbiganalytics.metadata.api.op.DataOperationsProvider;
import com.thinkbiganalytics.metadata.core.AbstractMetadataCriteria;
import com.thinkbiganalytics.metadata.core.dataset.files.BaseFileList;
import com.thinkbiganalytics.metadata.core.dataset.hive.BaseHiveTableUpdate;
import com.thinkbiganalytics.metadata.event.ChangeEventDispatcher;

/**
 *
 * @author Sean Felten
 */
public class InMemoryDataOperationsProvider implements DataOperationsProvider {
    
    private static final OpCriteria All_OPS = new OpCriteria() {
        public boolean apply(BaseDataOperation input) {
            return true;
        }
    };
    
    private static final ChangeCriteria ALL_CHANGES = new ChangeCriteria() {
        public boolean apply(com.thinkbiganalytics.metadata.api.op.ChangeSet<?,?> input) {
            return true;
        }
    };
    
    @Inject
    private DatasetProvider datasetProvider;
    @Inject
    private FeedProvider feedProvider;
    @Inject
    private ChangeEventDispatcher dispatcher;
    
    private Map<DataOperation.ID, DataOperation> operations = new ConcurrentHashMap<>();
    private Map<Dataset.ID, List<ChangeSet<? extends Dataset, ? extends ChangedContent>>> changeSets = new ConcurrentHashMap<>();
    
    public InMemoryDataOperationsProvider() {
        super();
    }
    
    public InMemoryDataOperationsProvider(DatasetProvider datasetProvider, FeedProvider feedProvider,
            ChangeEventDispatcher dispatcher) {
        super();
        this.datasetProvider = datasetProvider;
        this.feedProvider = feedProvider;
        this.dispatcher = dispatcher;
    }

    @Inject
    public void setDatasetProvider(DatasetProvider datasetProvider) {
        this.datasetProvider = datasetProvider;
    }

    @Inject
    public void setFeedProvider(FeedProvider feedProvider) {
        this.feedProvider = feedProvider;
    }

    @Inject
    public void setDispatcher(ChangeEventDispatcher dispatcher) {
        this.dispatcher = dispatcher;
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#asOperationId(java.lang.String)
     */
    @Override
    public DataOperation.ID asOperationId(String opIdStr) {
        return new BaseDataOperation.OpId(opIdStr);
    }
    
    
    @Override
    public DataOperation beginOperation(FeedDestination dest, DateTime start) {
        return beginOperation(dest.getFeed().getId(), dest.getDataset().getId(), new DateTime());
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#beginOperation(com.thinkbiganalytics.metadata.api.feed.Feed.ID, Dataset.ID)
     */
    public DataOperation beginOperation(Feed.ID feedId, Dataset.ID dsId, DateTime start) {
        Dataset ds = this.datasetProvider.getDataset(dsId);
        Feed feed = this.feedProvider.getFeed(feedId);
        
        if (feed == null) {
            throw new DataOperationException("No feed with the given ID exists: " + feedId);
        }
        
        if (ds == null) {
            throw new DataOperationException("No dataset with the given ID exists: " + feedId);
        }
        
        FeedDestination feedDest = this.feedProvider.ensureFeedDestination(feed.getId(), ds.getId());
        BaseDataOperation op = new BaseDataOperation(ds, feedDest, start);
        this.operations.put(op.getId(), op);
        return op;
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#updateOperation(com.thinkbiganalytics.metadata.api.op.DataOperation.ID, java.lang.String, com.thinkbiganalytics.metadata.api.op.DataOperation.State)
     */
    public DataOperation updateOperation(DataOperation.ID id, String status, State state) {
        BaseDataOperation op = (BaseDataOperation) this.operations.get(id);
        
        if (op == null) {
            throw new DataOperationException("No operation with the given ID exists: " + id);
        }
        
        String msg = StringUtils.isEmpty(status) ? "Operation in " + state.name().toLowerCase() + " state" : status;
        op = new BaseDataOperation(op, state, msg);
        
        this.operations.put(id, op);
        // TODO What do we do if the state was changed to COMPLETE and there is no change set?
        
        return op;
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#updateOperation(com.thinkbiganalytics.metadata.api.op.DataOperation.ID, java.lang.String, java.lang.Exception)
     */
    public DataOperation updateOperation(DataOperation.ID id, String status, Exception ex) {
        StringWriter out = new StringWriter();
        PrintWriter prt = new PrintWriter(out);
        prt.println(status);
        prt.println("==============");
        ex.printStackTrace(prt);
        prt.flush();
        
        return updateOperation(id, out.toString(), State.FAILURE);
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#updateOperation(com.thinkbiganalytics.metadata.api.op.DataOperation.ID, java.lang.String, com.thinkbiganalytics.metadata.api.op.ChangeSet)
     */
    @SuppressWarnings("unchecked")
    public <D extends Dataset, C extends ChangedContent> DataOperation updateOperation(DataOperation.ID id, String status, ChangeSet<D, C> changes) {
        BaseDataOperation op = (BaseDataOperation) this.operations.get(id);
        
        if (op == null) {
            throw new DataOperationException("No operation with the given ID exists: " + id);
        }
        
        String msg = StringUtils.isEmpty(status) ? "Operation completed successfully" : status;
        op = new BaseDataOperation(op, msg, (ChangeSet<Dataset, ChangedContent>) changes);
        
        this.operations.put(id, op);
        this.dispatcher.nofifyChange(changes);
        
        return op;
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#createChangeSet(com.thinkbiganalytics.metadata.api.dataset.filesys.DirectoryDataset, java.util.List)
     */
    public ChangeSet<DirectoryDataset, FileList> createChangeSet(DirectoryDataset ds, List<Path> paths) {
        BaseFileList content = new BaseFileList(paths);
        return new BaseChangeSet<DirectoryDataset, FileList>(ds, content);
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#createChangeSet(com.thinkbiganalytics.metadata.api.dataset.hive.HiveTableDataset, int)
     */
    public ChangeSet<HiveTableDataset, HiveTableUpdate> createChangeSet(HiveTableDataset ds, int count) {
        BaseHiveTableUpdate content = new BaseHiveTableUpdate(count);
        return new BaseChangeSet<HiveTableDataset, HiveTableUpdate>(ds, content);
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#dataOperationCriteria()
     */
    public DataOperationCriteria dataOperationCriteria() {
        return new OpCriteria();
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#getDataOperation(com.thinkbiganalytics.metadata.api.op.DataOperation.ID)
     */
    public DataOperation getDataOperation(DataOperation.ID id) {
        return this.operations.get(id);
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#getDataOperations()
     */
    public List<DataOperation> getDataOperations() {
        return getDataOperations(All_OPS);
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#getDataOperations(com.thinkbiganalytics.metadata.api.op.DataOperationCriteria)
     */
    public List<DataOperation> getDataOperations(DataOperationCriteria criteria) {
        OpCriteria critImpl = (OpCriteria) criteria;
        Iterator<DataOperation> filtered = Iterators.filter(this.operations.values().iterator(), critImpl);
        Iterator<DataOperation> limited = Iterators.limit(filtered, critImpl.getLimit());
        ArrayList<DataOperation> list = Lists.newArrayList(limited);
        
        Collections.sort(list, critImpl);
        return list;
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#changeSetCriteria()
     */
    public ChangeSetCriteria changeSetCriteria() {
        return new ChangeCriteria();
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#getChangeSets(Dataset.ID)
     */
    @SuppressWarnings("unchecked")
    public List<ChangeSet<? extends Dataset, ? extends ChangedContent>> getChangeSets(Dataset.ID dsId) {
        return getChangeSets(dsId, ALL_CHANGES);
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#getChangeSets(Dataset.ID, com.thinkbiganalytics.metadata.api.op.ChangeSetCriteria)
     */
    @SuppressWarnings("unchecked")
    public List<ChangeSet<? extends Dataset, ? extends ChangedContent>> getChangeSets(Dataset.ID dsId, ChangeSetCriteria criteria) {
        ChangeCriteria critImpl = (ChangeCriteria) criteria;
        Iterator<ChangeSet<? extends Dataset, ? extends ChangedContent>> filtered 
            = Iterators.filter(this.changeSets.get(dsId).iterator(), critImpl);
        Iterator<ChangeSet<? extends Dataset, ? extends ChangedContent>> limited 
            = Iterators.limit(filtered, critImpl.getLimit());
        ArrayList<ChangeSet<? extends Dataset, ? extends ChangedContent>> list = Lists.newArrayList(limited);

        Collections.sort(list, critImpl);
        return list;
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#addListener(com.thinkbiganalytics.metadata.api.dataset.Dataset, com.thinkbiganalytics.metadata.api.event.DataChangeEventListener)
     */
    @Override
    public void addListener(DataChangeEventListener<Dataset, ChangedContent> listener) {
        this.dispatcher.addListener(listener);
    }
    
    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#addListener(com.thinkbiganalytics.metadata.api.dataset.filesys.DirectoryDataset, com.thinkbiganalytics.metadata.api.event.DataChangeEventListener)
     */
    public void addListener(DirectoryDataset ds, DataChangeEventListener<DirectoryDataset, FileList> listener) {
        this.dispatcher.addListener(ds, listener);
    }

    /* (non-Javadoc)
     * @see com.thinkbiganalytics.metadata.api.op.DataOperationsProvider#addListener(com.thinkbiganalytics.metadata.api.dataset.hive.HiveTableDataset, com.thinkbiganalytics.metadata.api.event.DataChangeEventListener)
     */
    public void addListener(HiveTableDataset ds, DataChangeEventListener<HiveTableDataset, HiveTableUpdate> listener) {
        this.dispatcher.addListener(ds, listener);
    }

    
    private static class OpCriteria extends AbstractMetadataCriteria<DataOperationCriteria> 
        implements DataOperationCriteria, Predicate<DataOperation>, Comparator<DataOperation> {

        private Feed.ID feedId;
        private Dataset.ID datasetId;
        private Set<State> states = new HashSet<>();
        private Set<Class<? extends Dataset>> types = new HashSet<>();
        
        @Override
        public boolean apply(DataOperation input) {
            if (this.feedId != null && ! this.feedId.equals(input.getProducer().getFeed().getId())) return false;
            if (this.datasetId != null && ! this.datasetId.equals(input.getChangeSet().getDataset().getId())) return false;
            if (this.states.size() > 0 && ! this.states.contains(input.getState())) return false;
            if (this.types.size() > 0) {
                for (Class<? extends Dataset> type : types) {
                    if (type.isAssignableFrom(input.getClass())) {
                        return true;
                    }
                }
                return false;
            }
            return true;
        }
        
        @Override
        public int compare(DataOperation o1, DataOperation o2) {
            return ComparisonChain.start()
                    .compare(o2.getStopTime(), o1.getStopTime(), Ordering.natural().nullsFirst())
                    .compare(o2.getStartTime(), o1.getStartTime(), Ordering.natural().nullsLast())
                    .result();
        }
        
        @Override
        public DataOperationCriteria state(State... states) {
            for (State state : states) {
                this.states.add(state);
            }
            return this;
        }

        @Override
        public DataOperationCriteria feed(ID srcId) {
            this.feedId = srcId;
            return this;
        }

        @Override
        public DataOperationCriteria dataset(Dataset.ID dsId) {
            this.datasetId = dsId;
            return this;
        }

        @Override
        public DataOperationCriteria dataset(Class<? extends Dataset>... dsTypes) {
            for (Class<? extends Dataset> type : dsTypes) {
                this.types.add(type);
            }
            return this;
        }
    }
    
    private static class ChangeCriteria extends AbstractMetadataCriteria<ChangeSetCriteria> 
        implements ChangeSetCriteria, Predicate<ChangeSet<? extends Dataset, ? extends ChangedContent>>,
                   Comparator<ChangeSet<? extends Dataset, ? extends ChangedContent>> {

        private Set<ChangeType> types = new HashSet<>();
        private DateTime changedOn;
        private DateTime changedAfter;
        private DateTime changedBefore;
        
        @Override
        public boolean apply(ChangeSet<?, ?> input) {
            if (this.changedOn != null && ! this.changedOn.equals(input.getTime())) return false;
            if (this.changedAfter != null && ! this.changedAfter.isBefore(input.getTime())) return false;
            if (this.changedBefore != null && ! this.changedBefore.isBefore(input.getTime())) return false;
            if (this.types.size() > 0 && ! this.types.contains(input.getType())) return false;
            return true;
        }
        
        @Override
        public int compare(ChangeSet<? extends Dataset, ? extends ChangedContent> o1,
                           ChangeSet<? extends Dataset, ? extends ChangedContent> o2) {
            return o2.getTime().compareTo(o1.getTime());
        }

        @Override
        public ChangeSetCriteria type(ChangeType... types) {
            for (ChangeType type : types) {
                this.types.add(type);
            }
            return null;
        }

        @Override
        public ChangeCriteria changedOn(DateTime time) {
            this.changedOn = time;
            return this;
        }

        @Override
        public ChangeCriteria changedAfter(DateTime time) {
            this.changedAfter = time;
            return this;
        }

        @Override
        public ChangeCriteria changedBefore(DateTime time) {
            this.changedBefore = time;
            return this;
        }
    }
}
