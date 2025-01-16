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

	public static By Beneficiaries = By.xpath("//*[text()='Beneficiaries']");
	public static By AddBeneficiaryButton = By.xpath("//*[text()=' Add Beneficiary ']");
	public static By SokinBeneficiary = By.xpath("//div[@class='cdk-overlay-pane']//button[1]");
	public static By ExternalBeneficiary = By.xpath("//div[@class='cdk-overlay-pane']//button[2]");
	public static By BeneficiarySaveButton = By.xpath("//*[text()=' Save ']");

	public boolean beneficiaryIsClickable() {
		return waitForExpectedElement(Beneficiaries,10).isEnabled();
	}
	public void clickOnBeneficiaries() {
		waitForExpectedElement(Beneficiaries, 10).click();
	}
	
	public boolean addButtonIsClickAble() {
		return waitForExpectedElement(AddBeneficiaryButton,10).isEnabled();
	}
	
	public void clickOnAddBeneficiary() {
		waitForExpectedElement(AddBeneficiaryButton, 10).click();
	}

	public boolean sokinBeneficiaryIsDisplay() {
		return waitForExpectedElement(SokinBeneficiary, 20).isDisplayed();

	}

	public boolean externalBeneficiarieIsDisplay() {
		return waitForExpectedElement(ExternalBeneficiary, 10).isDisplayed();
	}

	public void clickOnSokinBeneficiary() {
		waitForExpectedElement(SokinBeneficiary, 10).click();
	}

	public void clickOnBeneficiarySaveButton() {
		waitForExpectedElement(BeneficiarySaveButton, 20).click();
	}

	
}
