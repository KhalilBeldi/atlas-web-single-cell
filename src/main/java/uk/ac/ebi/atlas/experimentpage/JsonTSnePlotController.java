package uk.ac.ebi.atlas.experimentpage;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uk.ac.ebi.atlas.controllers.JsonExceptionHandlingController;
import uk.ac.ebi.atlas.experimentpage.tsneplot.TSnePlotJsonSerializer;

@RestController
public class
JsonTSnePlotController extends JsonExceptionHandlingController {
    private final TSnePlotJsonSerializer tSnePlotJsonSerializer;

    public JsonTSnePlotController(TSnePlotJsonSerializer tSnePlotJsonSerializer) {
        this.tSnePlotJsonSerializer = tSnePlotJsonSerializer;
    }

    @GetMapping(value = "/json/experiments/{experimentAccession}/tsneplot/{perplexity}/clusters/k/{k}",
                    produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String tSnePlotWithClusters(@PathVariable String experimentAccession,
                                       @PathVariable int perplexity,
                                       @PathVariable int k,
                                       @RequestParam(defaultValue = "") String accessKey) {
        return tSnePlotJsonSerializer.tSnePlotWithClusters(experimentAccession, perplexity, k, accessKey);
    }

    @GetMapping(value = "/json/experiments/{experimentAccession}/tsneplot/{perplexity}/expression",
                    produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String tSnePlotWithExpression(@PathVariable String experimentAccession,
                                         @PathVariable int perplexity,
                                         @RequestParam(defaultValue = "") String accessKey) {
        return tSnePlotJsonSerializer.tSnePlotWithExpression(experimentAccession, perplexity, accessKey);
    }

    @GetMapping(value = "/json/experiments/{experimentAccession}/tsneplot/{perplexity}/metadata/{metadata}",
                    produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String tSnePlotWithMetadata(@PathVariable String experimentAccession,
                                       @PathVariable int perplexity,
                                       @PathVariable String metadata,
                                       @RequestParam(defaultValue = "") String accessKey) {
        return tSnePlotJsonSerializer.tSnePlotWithMetadata(experimentAccession, perplexity, metadata, accessKey);
    }

    @GetMapping(value = "/json/experiments/{experimentAccession}/tsneplot/{perplexity}/expression/{geneId}",
                    produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String tSnePlotWithExpression(@PathVariable String experimentAccession,
                                         @PathVariable int perplexity,
                                         @PathVariable String geneId,
                                         @RequestParam(defaultValue = "") String accessKey) {
        return tSnePlotJsonSerializer.tSnePlotWithExpression(experimentAccession, perplexity, geneId, accessKey);
    }

}
