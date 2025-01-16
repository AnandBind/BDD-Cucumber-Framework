package TestRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/Features/Fintech/Module.feature"}, 

                tags = "@new1", 
                 glue = { "StepDefination", "BaseClass" }, 
                 monochrome = true, 
                 plugin = {
                        "pretty",
                        "html:target/cucumber-reports",
                        "json:target/cucumber.json",
                        "rerun:target/rerun.txt" // Generates a text file with failed scenarios
                })
public class TestRunner {

}
