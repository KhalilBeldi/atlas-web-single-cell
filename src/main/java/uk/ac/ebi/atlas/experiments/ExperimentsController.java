package uk.ac.ebi.atlas.experiments;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import uk.ac.ebi.atlas.controllers.HtmlExceptionHandlingController;

@Controller
public class ExperimentsController extends HtmlExceptionHandlingController {

    @RequestMapping(value = "/experiments", method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
    public String
    getExperimentsListParameters( @RequestParam(value = "species", required = false) String species,
                                  Model model) {
        model.addAttribute("species", species);
        return "experiments";
    }
}
