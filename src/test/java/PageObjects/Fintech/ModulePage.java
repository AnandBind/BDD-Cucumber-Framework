package PageObjects.Fintech;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import BaseClass.BaseClass;


public class ModulePage extends BaseClass {

	public static By WalletTable = By.xpath("//*[text()='Ircts Wallet']");
	public static By AddWallet = By.xpath("//*[text()=' Add Wallet ']");
	public static By Beneficiary = By.xpath("//div[@class='cdk-overlay-pane']//button[1]");
	public static By Ex_Wallet = By.xpath("//div[@class='theh hehe']//button[2]");
	public static By SaveButton = By.xpath("//*[text()=' Save ']");

	public boolean IsClickable() {
		return waitForExpectedElement(WalletTable,10).isEnabled();
	}
	public void clickOnWallet() {
		waitForExpectedElement(WalletTable, 10).click();
	}
	
	public boolean addButtonIsClickAble() {
		return waitForExpectedElement(AdButton,10).isEnabled();
	}
	
	public void clickOnAddBeneficiary() {
		waitForExpectedElement(AddButton, 10).click();
	}

	public boolean TableIsDisplay() {
		return waitForExpectedElement(In-Wallet-Beneficiary, 20).isDisplayed();

	}

	public boolean exIsDisplay() {
		return waitForExpectedElement(Ex-WalletBeneficiary, 10).isDisplayed();
	}

	public void clickOnSave() {
		waitForExpectedElement(SaveButton, 10).click();
	}

	public void clickSaveButton() {
		waitForExpectedElement(SaveButton, 20).click();
	}

	
}
