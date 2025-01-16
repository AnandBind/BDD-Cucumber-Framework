package StepDefination.Fintech;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.Assertions;
import java.util.List;
import java.util.Map;

import org.apache.xmlbeans.StringEnumAbstractBase.Table;
import org.junit.Assert;
import BaseClass.BaseClass;
import PageObjects.Fintech.ModulePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.bytebuddy.asm.Advice.Enter;
import scala.Char;

public class ModuleSteps extends BaseClass {

	ModulePage beneficiaries = new ModulePage();

	
	@Then("Verify Beneficiaries Module Is Clickable")
	public void verifyBeneficiaryIsClickAble() {
		assertTrue(beneficiaries.beneficiaryIsClickable());
	}

	@When("User click on Beneficiaries")
	public void userClickOnBeneficiaries() throws InterruptedException {
		Thread.sleep(2000);
		beneficiaries.clickOnBeneficiaries();

	}

	
	@Then("View Error Message {string}")
	public void verifyEnterValidBeneficiary(String message) {
		assertTrue(driver.getPageSource().contains(message));
	}

	@Then("User Should See Following Options:")
	public void verifyFollowingOptionsOfAddBeneficiary(List<String> list) {
		for (String options : list) {
			switch (options) {
				case "Sokin Beneficiary":
					assertTrue(beneficiaries.sokinBeneficiaryIsDisplay());
					break;
				case "External Beneficiary":
					assertTrue(beneficiaries.externalBeneficiarieIsDisplay());
					break;
				default:
					throw new IllegalArgumentException("Element Not found: " + options);
			}
		}

	}


}
