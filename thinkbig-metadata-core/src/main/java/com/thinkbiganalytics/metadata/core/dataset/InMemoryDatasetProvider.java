/**
 * 
 */
package com.thinkbiganalytics.metadata.core.dataset;

import java.io.Serializable;
import java.nio.file.Path;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.joda.time.DateTime;

import com.google.common.base.Predicate;
import com.google.common.collect.Iterators;
import com.google.common.collect.Lists;
import com.thinkbiganalytics.metadata.api.dataset.Dataset;
import com.thinkbiganalytics.metadata.api.dataset.Dataset.ID;
import com.thinkbiganalytics.metadata.api.dataset.DatasetCriteria;
import com.thinkbiganalytics.metadata.api.dataset.DatasetProvider;
import com.thinkbiganalytics.metadata.api.dataset.filesys.DirectoryDataset;
import com.thinkbiganalytics.metadata.api.dataset.hive.HiveTableDataset;
import com.thinkbiganalytics.metadata.core.AbstractMetadataCriteria;
import com.thinkbiganalytics.metadata.core.dataset.files.BaseDirectoryDataset;
import com.thinkbiganalytics.metadata.core.dataset.hive.BaseHiveTableDataset;

/**
 *
 * @author Sean Felten
 */
public class InMemoryDatasetProvider implements DatasetProvider {
    
    private Map<Dataset.ID, Dataset> datasets = new ConcurrentHashMap<>();

    public DatasetCriteria datasetCriteria() {
        return new DatasetCriteriaImpl();
    }
    
    @Override
    public ID resolve(Serializable id) {
        if (id instanceof BaseDataset.DatasetId) {
            return (BaseDataset.DatasetId) id;
        } else {
            return new BaseDataset.DatasetId(id);
        }
    }

    @Override
    public Dataset ensureDataset(String name, String descr) {
        synchronized (this.datasets) {
            BaseDataset ds = getExistingDataset(name);
            
            if (ds == null) {
                ds = new BaseDataset(name, descr);
                this.datasets.put(ds.getId(), ds);
            }
            
            return ds;
        }
    }

    public DirectoryDataset ensureDirectoryDataset(String name, String descr, Path dir) {
        synchronized (this.datasets) {
            Dataset ds = getExistingDataset(name);
            
            if (ds != null) {
                if (ds.getClass().isAssignableFrom(BaseDirectoryDataset.class)) {
                    return (BaseDirectoryDataset) ds;
                } else {
                    throw new DatasetException("A non-directory dataset already exists with the given name:" + name);
                }
            }
            
            BaseDirectoryDataset dds = new BaseDirectoryDataset(name, descr, dir);
            this.datasets.put(dds.getId(), dds);
            return dds;
        }
    }

    @Override
    public HiveTableDataset ensureHiveTableDataset(String name, String descr, String database, String table) {
        synchronized (this.datasets) {
            Dataset ds = getExistingDataset(name);
            
            if (ds != null) {
                if (ds.getClass().isAssignableFrom(BaseHiveTableDataset.class)) {
                    return (BaseHiveTableDataset) ds;
                } else {
                    throw new DatasetException("A non-hive dataset already exists with the given name:" + name);
                }
            }
            
            BaseHiveTableDataset hds = new BaseHiveTableDataset(name, descr, database, table);
            this.datasets.put(hds.getId(), hds);
            return hds;
        }
    }
    
    
    @Override
    public DirectoryDataset asDirectoryDataset(ID dsId, Path dir) {
        synchronized (this.datasets) {
            BaseDataset ds = (BaseDataset) this.datasets.get(dsId);
            
            if (ds != null) {
                BaseDirectoryDataset dds = new BaseDirectoryDataset(ds, dir);
                this.datasets.put(dds.getId(), dds);
                return dds;
            } else {
                throw new DatasetException("A no dataset exists with the given ID: " + dsId);
            }
        }
    }

    @Override
    public HiveTableDataset asHiveTableDataset(ID dsId, String database, String table) {
        synchronized (this.datasets) {
            BaseDataset ds = (BaseDataset) this.datasets.get(dsId);
            
            if (ds != null) {
                BaseHiveTableDataset hds = new BaseHiveTableDataset(ds, database, table);
                this.datasets.put(hds.getId(), hds);
                return hds;
            } else {
                throw new DatasetException("A no dataset exists with the given ID: " + dsId);
            }
        }
    }

    @Override
    public Dataset getDataset(ID id) {
        return this.datasets.get(id);
    }

    @Override
    public Set<Dataset> getDatasets() {
        return new HashSet<Dataset>(this.datasets.values());
    }

    @Override
    public List<Dataset> getDatasets(DatasetCriteria criteria) {
        // TODO replace cast with copy method
        DatasetCriteriaImpl critImpl = (DatasetCriteriaImpl) criteria;
        Iterator<Dataset> filtered = Iterators.filter(this.datasets.values().iterator(), critImpl);
        Iterator<Dataset> limited = Iterators.limit(filtered, critImpl.getLimit());
        List<Dataset> list = Lists.newArrayList(limited);
        
        Collections.sort(list, critImpl);
        return list;
    }

    
    private BaseDataset getExistingDataset(String name) {
        synchronized (this.datasets) {
            for (Dataset ds : this.datasets.values()) {
                if (ds.getName().equals(name)) {
                    return (BaseDataset) ds;
                }
            }
            return null;
        }
    }


    private static class DatasetCriteriaImpl extends AbstractMetadataCriteria<DatasetCriteria> 
        implements DatasetCriteria, Predicate<Dataset>, Comparator<Dataset> {
        
        private String name;
        private DateTime createdOn;
        private DateTime createdAfter;
        private DateTime createdBefore;
        private Class<? extends Dataset> type;

        @Override
        public boolean apply(Dataset input) {
            if (this.type != null && ! this.type.isAssignableFrom(input.getClass())) return false;
            if (this.name != null && ! name.equals(input.getName())) return false;
            if (this.createdOn != null && ! this.createdOn.equals(input.getCreationTime())) return false;
            if (this.createdAfter != null && ! this.createdAfter.isBefore(input.getCreationTime())) return false;
            if (this.createdBefore != null && ! this.createdBefore.isBefore(input.getCreationTime())) return false;
            return true;
        }
        
        @Override
        public int compare(Dataset o1, Dataset o2) {
            return o2.getCreationTime().compareTo(o1.getCreationTime());
        }

        @Override
        public DatasetCriteria name(String name) {
            this.name = name;
            return this;
        }

        @Override
        public DatasetCriteria createdOn(DateTime time) {
            this.createdOn = time;
            return this;
        }

        @Override
        public DatasetCriteria createdAfter(DateTime time) {
            this.createdAfter = time;
            return this;
        }

        @Override
        public DatasetCriteria createdBefore(DateTime time) {
            this.createdBefore = time;
            return this;
        }

        @Override
        public DatasetCriteria type(Class<? extends Dataset> type) {
            this.type = type;
            return this;
        }
        
    }
}
