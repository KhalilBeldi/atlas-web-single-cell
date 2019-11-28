package uk.ac.ebi.atlas.experiments;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static uk.ac.ebi.atlas.utils.GsonProvider.GSON;

@RestController
public class ExperimentsListController {
    private final static String CHARACTERISTIC_NAME = "organism_part";
    private final ExperimentInfoListService experimentInfoListService;

    public ExperimentsListController(ExperimentInfoListService experimentInfoListService) {
        this.experimentInfoListService = experimentInfoListService;
    }

    //Used by experiments table page
    @GetMapping(value = "/json/experiments",
                produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String getExperimentsList(@RequestParam(defaultValue = "") String organismPart) {
        return GSON.toJson(experimentInfoListService.getExperimentsJson(CHARACTERISTIC_NAME, organismPart));
    }
}