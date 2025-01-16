package TestRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = {"@target/rerun.txt"},  // Points to the text file with failed scenarios
    glue = {"StepDefination", "BaseClass"},
    monochrome = true,
    plugin = {
        "pretty",
        "html:target/cucumber-reports/rerun",
        "json:target/cucumber-reports/rerun/cucumber.json"
    }
)
public class RerunnerTest {
}