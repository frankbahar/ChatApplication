package runner;
import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/features"},
	glue= {"steps"},
	dryRun=false,
	monochrome=true,
	tags={"@sanity", "~@regression"},
	plugin= {"pretty","html:target/cucumber","com.cucumber.listener.ExtentCucumberFormatter"})
//public class RunCuke extends AbstractTestNGCucumberTests{
public class RunCuke {
	@BeforeClass
	public static void setup() {
		ExtentCucumberFormatter.initiateExtentCucumberFormatter();
		//Loads the extent config xml to customize on the report.
		ExtentCucumberFormatter.loadConfig(new File("src/extent-config.xml"));
		
		//User can add the system information as follows
		ExtentCucumberFormatter.addSystemInfo("Browser Name", "Firefox");
		ExtentCucumberFormatter.addSystemInfo("Browser version", "v31.0");
		ExtentCucumberFormatter.addSystemInfo("Selenium version", "v2.53.0");
	}
}
