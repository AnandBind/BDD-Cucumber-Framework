package BaseClass;

import java.io.IOException;
import java.util.logging.Level;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.remote.DesiredCapabilities;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks extends BaseClass {

	@Before
	public void setup() {
		String browserName = prop.getProperty("browser");
		if (browserName.equals("chrome")) {
			ChromeOptions options = getChromeOptions1();
			options.addArguments("--incognito");
			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setCapability(ChromeOptions.CAPABILITY, options);
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		} else if (browserName.equals("firefox")) {
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}

	private static ChromeOptions getChromeOptions1() {
		
		LoggingPreferences logs = new LoggingPreferences();
		logs.enable(LogType.DRIVER, Level.OFF);
		ChromeOptions chromeOptions = new ChromeOptions();

		// ===========================
		//Disable the web security
		chromeOptions.addArguments("--disable-web-security");
		chromeOptions.addArguments("--test-type");
		chromeOptions.addArguments("allow-running-insecure-content");

		// ===========================
		// Disable 'Save Card' prompt and other autofill settings
		chromeOptions.addArguments("--disable-notifications"); // Disable browser notifications
		chromeOptions.addArguments("--disable-save-password-bubble"); // Disable save password prompts

		// ===========================
		// Disable autofill for payment methods and cards
		chromeOptions.addArguments("--disable-autofill");
		chromeOptions.addArguments("--disable-autofill-keyboard-accessory-view");

		// ===========================
		// Disable prompts for saving cards
		chromeOptions.addArguments("--disable-prompt-on-repost");
		chromeOptions.addArguments("--disable-extensions"); // Disable extensions that might show prompts

		return chromeOptions;
	}

	@After
	public void tearDown(Scenario scenario) {
		if (scenario.isFailed()) {
			try {
				takeScreenSort();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			 driver.quit();
		}
	}
}
