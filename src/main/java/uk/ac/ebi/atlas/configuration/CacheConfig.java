package uk.ac.ebi.atlas.configuration;

import org.cache2k.extra.spring.SpringCache2kCacheManager;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@EnableCaching
@Configuration
public class CacheConfig {
    @Bean
    public CacheManager cacheManager() {
        return new SpringCache2kCacheManager().addCaches(
                builder -> builder.name("designElementsByGeneId"),
                builder -> builder.name("arrayDesignByAccession"),
                builder -> builder.name("experimentByAccession"),
                builder -> builder.name("experimentsByType"),
                builder -> builder.name("experimentAttributes"),
                builder -> builder.name("bioentityProperties"),
                builder -> builder.name("cellCounts"));
    }
}
