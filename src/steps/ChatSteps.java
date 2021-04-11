package steps;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ChatSteps {
	public static WebDriver driver;

	@Before
	public void setup() {
		System.setProperty("webdriver.gecko.driver", "src/drivers/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}

	@After
	public void tearDown(Scenario scenario) {
		if (scenario.isFailed()) {
			byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotBytes, "image/png");
		}
		if (driver != null) {
			driver.quit();
		}
	}

		@Given("^I am on the home page http://localhost:(\\d+)$")
	public void i_am_on_the_home_page_http_localhost(int arg1) throws Throwable {
		driver.get("http://localhost:8080");
	}

	@Then("^I click on send button$")
	public void i_click_on_send_button() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.id("chatSubmit")).click();
	}

	@When("^I write \"([^\"]*)\"$")
	public void i_write(String message) throws Throwable {
		driver.findElement(By.id("chatInput")).sendKeys(message);
	}

	@Then("^I see my \"([^\"]*)\" in chat$")
	public void i_see_my_in_chat(String message) throws Throwable {
		Thread.sleep(3000);
		String elementPath = "//*[@id=\"root\"]/form/ul/li[5]/div[2]/div[2]/div[1]";
		Assert.assertTrue(driver.findElement(By.xpath(elementPath)).getText()
				.contains(message));
	}
	
	@Then("^I see only (\\d+) character of my \"([^\"]*)\" in chat$")
	public void i_see_only_character_of_my_in_chat(int charLimit, String message) throws Throwable {
		Thread.sleep(3000);
		String expectedMessage = message.substring(0, charLimit);
		String elementPath = "//*[@id=\"root\"]/form/ul/li[5]/div[2]/div[2]/div[1]";
		String actualMessage = driver.findElement(By.xpath(elementPath)).getText();
		Assert.assertEquals(expectedMessage,actualMessage);
	}
	
	@Then("^I see error msg chat$")
	public void i_see_error_msg_chat() throws Throwable {
		// Explicit wait condition for alert
		WebDriverWait w = new WebDriverWait(driver, 5);
		//alertIsPresent() condition applied
	    if(w.until(ExpectedConditions.alertIsPresent())==null)
	    	Assert.assertTrue(false);
	    else
	    	Assert.assertTrue(true);
	}

	@Then("^I move cursor to my message on chat$")
	public void I_move_cursor_to_my_message_on_chat() throws Throwable {
		Thread.sleep(3000);
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//*[@id=\"root\"]/form/ul/li[5]/div[2]/div[2]/div[2]"))).perform();
	}

	@Then("^I verify your \"([^\"]*)\" within the chat box$")
	public void i_verify_your_within_the_chat_box(String expectedSignupDate) throws Throwable {
		Thread.sleep(3000); 
		String msg = driver.findElement(By.xpath("//*[@id=\"root\"]/form/ul/li[6]/div[2]/div[2]/div[2]/p")).
				getAttribute("innerHTML");
		String actualSignupDate = msg.substring(15,msg.length());
		Assert.assertEquals(expectedSignupDate, actualSignupDate);
	}

}
