/**
 * 
 */
package com.thinkbiganalytics.metadata.upgrade;

/*-
 * #%L
 * kylo-operational-metadata-upgrade-service
 * %%
 * Copyright (C) 2017 ThinkBig Analytics
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.thinkbiganalytics.KyloVersion;
import com.thinkbiganalytics.KyloVersionUtil;
import com.thinkbiganalytics.server.upgrade.KyloUpgradeDatabaseVersionChecker;

/**
 * Performs all upgrade steps within a metadata transaction.
 */
public class KyloUpgrader {
    
    private static final Logger log = LoggerFactory.getLogger(KyloUpgrader.class);
    
    
    public void upgrade() {
        boolean upgradeComplete = false;
        do {
            ConfigurableApplicationContext cxt = SpringApplication.run(UpgradeKyloConfig.class);
            UpgradeKyloService upgradeService = cxt.getBean(UpgradeKyloService.class);
            upgradeComplete = upgradeService.upgrade();
            cxt.close();
        } while (! upgradeComplete);
    }
    
    public boolean isUpgradeRequired() {
        KyloVersion buildVersion = KyloVersionUtil.getBuildVersion();
        KyloVersion currentVersion = getCurrentVersion();
        
        return currentVersion == null ? true : buildVersion.compareTo(currentVersion) != 0;
    }

    /**
     * Return the database version for Kylo.
     *
     * @return the version of Kylo stored in the database
     */
    public KyloVersion getCurrentVersion() {
        String profiles = System.getProperty("spring.profiles.active", "");
        if (!profiles.contains("native")) {
            profiles = StringUtils.isEmpty(profiles) ? "native" : profiles + ",native";
            System.setProperty("spring.profiles.active", profiles);
        }
        //Spring is needed to load the Spring Cloud context so we can decrypt the passwords for the database connection
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("kylo-upgrade-check-application-context.xml");
        ctx.refresh();
        KyloUpgradeDatabaseVersionChecker upgradeDatabaseVersionChecker = (KyloUpgradeDatabaseVersionChecker) ctx.getBean("kyloUpgradeDatabaseVersionChecker");
        KyloVersion kyloVersion = upgradeDatabaseVersionChecker.getDatabaseVersion();
        ctx.close();
        return kyloVersion;
    }

}