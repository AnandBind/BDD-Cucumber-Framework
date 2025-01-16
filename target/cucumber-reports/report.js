$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/SokinB2B/Beneficiaries.feature");
formatter.feature({
  "name": "Check Beneficiaries Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50590}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50590/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: fa1b8c0de87313ac4466ab0392fec7f9\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Different Modules Of Leftside Pannel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User is on Dashboard Page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userOnDashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Should See Different Left Pannel Modules:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.verifyLeftPannelOptions(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50618}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50618/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a2402168756ca325bfb47083dcac8f9a\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Beneficiaries Module of Leftside Pannel Is Clickable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User is on Dashboard Page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userOnDashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify Beneficiaries Module Is Clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.verifyBeneficiaryIsClickAble()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50643}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50643/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 926b412922e5fc4c74811204be745cc4\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify the UI Elements of Beneficiaries Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User click on Beneficiaries",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userClickOnBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Should See Following Elements:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.verifyUserShouldSeeFollowingElementsofBeneficiryPage(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50670}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50670/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e9105a15bac40c22280d8b8fac528974\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Add Beneficiary button is clickable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User is on Dashboard Page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userOnDashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on Beneficiaries",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userClickOnBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify User Is Able to Click On Add button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.verifyAddBeneficiaryButtonIsClickable()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50694}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50694/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 234a9e22576b4944b9ae99e1aba1c390\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify the Different Options Is Display of Add Beneficiaries",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User click on Beneficiaries",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userClickOnBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click On Add Beneficiaries button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnAddBeneficiariesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Should See Following Options:",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.verifyFollowingOptionsOfAddBeneficiary(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50717}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50717/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: acb75fe6d487335fb3fd51f56dd620dc\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Required Field To Add Sokin Beneficiary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User click on Beneficiaries",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userClickOnBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click On Add Beneficiaries button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnAddBeneficiariesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sokin Beneficiary",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnSokinBeneficiary()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click On Save button For Add Beneficiary",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnBeneficiarySaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Should View Following Error Message:",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.beneficiaryisRequered(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50742}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50742/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e015085b50e5ef3d8519a526833a3635\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Invalid Corporate Id to create Sokin Beneficiary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User click on Beneficiaries",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userClickOnBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click On Add Beneficiaries button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnAddBeneficiariesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sokin Beneficiary",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnSokinBeneficiary()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enter InValid CorporateBeneficiaryID As \"122321\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.enterInvalidCorporateID(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Currency Dropdown and Select Currency \"Currency.key\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnDropdownAndSelectCurrencry(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click On Save button For Add Beneficiary",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnBeneficiarySaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Should See Invalid Message \"Invalid corporate code.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.verifyInvalidMessage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50766}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50766/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 37b3bb0ec436dfed362efd4bc72a073b\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Error Message of Add Beneficiary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User click on Beneficiaries",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userClickOnBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click On Add Beneficiaries button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnAddBeneficiariesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sokin Beneficiary",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnSokinBeneficiary()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Eneter the Char and Special Char as \"@test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.enterTheChar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "View Error Message \"Please enter a valid Beneficiary\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.verifyEnterValidBeneficiary(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50791}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50791/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d850efc639072b2ef996ae5a5c06b218\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify User Successfuly Add Sokin Beneficiary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User click on Beneficiaries",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userClickOnBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Navigate on Beneficiaries Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userNavigateOnBenefieciaryPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click On Add Beneficiaries button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnAddBeneficiariesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sokin Beneficiary",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnSokinBeneficiary()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enter CorporateBeneficiaryID \"Beneficiary_Corporate_ID\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.enterCorporateBeneficiaryID(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Currency Dropdown and Select Currency \"Currency.key\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnDropdownAndSelectCurrencry(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click On Save button For Add Beneficiary",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnBeneficiarySaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sokin Beneficiary Created Successfully \"Beneficiary created successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.verifyCreatedSuccessfullyMessageAndClickOnOkButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Check login Functionality with valid Credential",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userLaunchTheSiteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid user Email and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.userEnterTheValidCreadentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[text()\u003d\u0027Dashboard\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50814}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50814/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f1b1c4520c4b7725611629f27b3bed90\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat BaseClass.BaseClass.waitForExpectedElement(BaseClass.java:58)\r\n\tat PageObjects.SokinB2B.LoginPage.isDisplayDashBorad(LoginPage.java:36)\r\n\tat StepDefination.SokinB2B.LoginPageSteps.navigateOnDashboard(LoginPageSteps.java:55)\r\n\tat ✽.User navigate on dashboard(file:///E:/BDD-Cucumber-Framework/src/test/java/Features/SokinB2B/Beneficiaries.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Sokin Transfer Successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new1"
    },
    {
      "name": "@regrassion"
    }
  ]
});
formatter.step({
  "name": "User click on Beneficiaries",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.userClickOnBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on Beneficiary dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickonBeneficieryDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Sokin Beneficiary and click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.selectSokinBeneficiary()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Transfer Icon Of Created Sokin Beneficiarie",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.findBeneficiarieAndClickOnTransfer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click On Source Dropdown and Select Currencry as Australian Dollar",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnSouceAndSelectCurrency()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Send Amount and click On Next button \"SendAmount.key\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.enterSendAmount(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click On Submit button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.clickOnSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Should View The Successful Message \"Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.SokinB2B.BeneficiariesSteps.verifyTransferSuccessfulMessage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});