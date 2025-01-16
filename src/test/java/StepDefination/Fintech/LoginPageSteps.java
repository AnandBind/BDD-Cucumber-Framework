package StepDefination.Fintech;

import static org.junit.Assert.assertEquals;

import BaseClass.BaseClass;
import PageObjects.Fintech.LoginPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginPageSteps extends BaseClass {

	LoginPage loginPage = new LoginPage();

	@Given("User Launch the site URL")
	public void userLaunchTheSiteURL() {
		launchBrowser();
	}

	@When("The user enters valid user Email and Password")
	public void userEnterTheValidCreadentials() {
	    loginPage.enterUserName();
	    loginPage.enterPassword();
	}

	@When("The user enters valid User {string} and Invalid Password {string}")
	public void tentersvalidUserandInvalidPassword(String UserEmail, String UserPassword) {
	   loginPage.enterUser(UserEmail);
	   loginPage.enterPasswordIn(UserPassword);
	}
	

	@When("The user enters Invalid User {string} and Valid Password {string}")
	public void enterInvalidUserandValidPassword(String InValidemail, String Validpassword) {
		loginPage.enterUser(InValidemail);
		loginPage.enterPasswordIn(Validpassword);
	}

	@When("The user enters valid {string} and {string}")
	public void entersBlankData(String BlankEmail, String BlankPassword) {
		loginPage.enterUser(BlankEmail);
		loginPage.enterPasswordIn(BlankPassword); 
	}

	@And("Click on login button")
	public void clickOnLoginButton() {
		loginPage.clickLoginButton();
	}
	
	@Then("User navigate on dashboard")
	
	public void navigateOnDashboard() {
		String ActualValue=loginPage.isDisplayDashBorad();
		assertEquals(ActualValue,prop.getProperty("dashboard"));
	}
	

}
