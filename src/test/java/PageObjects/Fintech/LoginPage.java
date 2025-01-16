package PageObjects.Fintech;

import org.openqa.selenium.By;

import BaseClass.BaseClass;

public class LoginPage extends BaseClass {

	public static By userName = By.xpath("//input[@type='email']");
	public static By passWord = By.xpath("//input[@formcontrolname='password']");
	public static By loginButton = By.xpath("//button[@type='submit']");
	public static By dashBoard =By.xpath("//*[text()='Dashboard']");
	
	
	//Login
	public void enterUserName() {
		waitForExpectedElement(userName, 10).sendKeys(prop.getProperty("username"));
	
	}

	public void enterPassword() {
		waitForExpectedElement(passWord, 10).sendKeys(prop.getProperty("userpassword"));
	}
	
	
	public void clickLoginButton() {
		waitForExpectedElement(loginButton, 10).click();
	}

	//validation
	public String isDisplayDashBorad() {
		return waitForExpectedElement(dashBoard,30).getText();
	}
	
	//Error Message Validation
	
	public void enterUser(String TheEmail)
	{
		waitForExpectedElement(userName,10).sendKeys(TheEmail);
		
	}
	
	public void enterPasswordIn(String ThePassword) {
		waitForExpectedElement(passWord,10).sendKeys(ThePassword);
	}
	

}
