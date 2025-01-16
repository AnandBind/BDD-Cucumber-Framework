package BaseClass;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.Duration;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Properties;
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

// for Upload photo by robot class
import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

public class BaseClass {

    public static WebDriver driver;
    public static WebDriverWait wait;
    public static Properties prop;

    // Cunstructor to inisialise the properties File
    public BaseClass() {
        try {
            prop = new Properties();
            FileInputStream ip = new FileInputStream(
                    "E:\\Sokin\\Properties\\config.properties");
            prop.load(ip);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public WebDriver getWebDriver() {
        return driver;
    }

    public static WebElement waitForExpectedElement(final By by, int wait_element) {
        wait = new WebDriverWait(driver, Duration.ofSeconds(wait_element));
        return wait.until(ExpectedConditions.visibilityOfElementLocated(by));
    }

    public WebElement waitForElementEnabled(final By by, int waitElement) {
        WebDriverWait wait = new WebDriverWait(getWebDriver(), Duration.ofSeconds(waitElement));
        return wait.until(ExpectedConditions.elementToBeClickable(by));
    }

    public void launchBrowser() {
        driver.get(prop.getProperty("url"));
    }

    public void launchAdmin(String url) {
        driver.get(url);
    }

    public void hoverOnElement(final By by) {
        Actions action = new Actions(getWebDriver());
        action.moveToElement(getWebDriver().findElement(by)).build().perform();
    }

    public void rightClick(final By by) {
        Actions actions = new Actions(getWebDriver());
        actions.contextClick(getWebDriver().findElement(by)).build().perform();
    }

    public WebElement waitForElementVisible(final WebElement element, int wait_visible) {
        WebDriverWait wait = new WebDriverWait(getWebDriver(), Duration.ofSeconds(wait_visible));
        return wait.until(ExpectedConditions.visibilityOf(element));
    }

    public void fluentWaitMethod(final By by, int timeoutime) {
        Wait<WebDriver> fluetWaitMethod = new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(timeoutime))
                .pollingEvery(Duration.ofSeconds(timeoutime))
                .ignoring(NoSuchElementException.class);
    }

    public static void takeScreenSort() throws IOException {
        TakesScreenshot ts = (TakesScreenshot) driver; // Convert web driver object to TakeScreenshot
        File source = ts.getScreenshotAs(OutputType.FILE); // getScreenshotAs method to create image file
        FileUtils.copyFile(source, new File(".//screenshorts//" + System.currentTimeMillis() + ".png"));
    }

    public void scrollToElement(final By by) {
        wait.until(ExpectedConditions.presenceOfElementLocated(by));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView(true);", by);
    }

    public void clickElementByJSExecutor(final By by) {
        wait.until(ExpectedConditions.presenceOfElementLocated(by)); // first use explicit wait condition
        JavascriptExecutor jse = (JavascriptExecutor) getWebDriver();
        jse.executeScript("arguments[0].scrollIntoView()", waitForExpectedElement(by, 10));
        jse.executeScript("arguments[0].click()", waitForExpectedElement(by, 10));
    }

    public boolean isElementPresent(final By by) {
        try {
            WebElement element = driver.findElement(by);
            return element.isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    // Select Option from List
    public void selectOption(List<WebElement> list, String object) {
        for (WebElement options : list) {
            String ActualOption = options.getText();
            if (ActualOption.contains(object)) {
                options.click();
                break;
            }
        }
    }

    // Select Equels Option from List
    public void selectEqualOption(List<WebElement> list, String text) {
        for (WebElement options : list) {
            String ActualOption = options.getText();
            if (ActualOption.equals(text)) {
                options.click();
                break;
            }
        }
    }

    // Options is clickable
    public void isOptionsClickAble(List<WebElement> list, String object) {
        for (WebElement options : list) {
            String ActualOption = options.getText();
            if (ActualOption.contains(object)) {
                options.isEnabled();
            }
        }
    }

    // To clear Text field
    public void doClearField(WebElement ele) {
        while (!ele.getAttribute("value").isEmpty()) {
            ele.sendKeys(Keys.BACK_SPACE);
        }
    }

    // This method is used in Sokin
    public static float verifyValueTableAndClickAndGetValue(List<WebElement> rows, int columnNumber,
            String expectedValue, int floatValueColumn) {
        float retrievedFloatValue = 0.0f;
        for (int i = 0; i < rows.size(); i++) {
            WebElement row = rows.get(i);
            String actualName = row.getText();
            if (actualName.contains(expectedValue)) {

                // Get the float value from the specified column
                WebElement floatCell = row.findElements(By.tagName("td")).get(floatValueColumn - 1);
                String floatText = floatCell.getText();
                String sanitizedText = floatText.replaceAll("[^\\d.]", "");
                retrievedFloatValue = Float.parseFloat(sanitizedText);

                // Click the cell in the specified column
                WebElement cell = row.findElements(By.tagName("td")).get(columnNumber - 1);
                cell.click();
                break;
            }
        }
        return retrievedFloatValue;
    }

    // Good One-Scan the Table and click on Respected Column cell
    public static boolean verifyValueTableAndClickOnCell(List<WebElement> rows, int columnNumber,
            String expectedValue) {
        for (int i = 0; i < rows.size(); i++) {
            WebElement row = rows.get(i);
            String actualName = row.getText();
            if (actualName.contains(expectedValue)) {
                waitForExpectedElement(By.xpath("//div[@class='page-wrapper']"), 20);
                WebElement cell = row.findElements(By.tagName("td")).get(columnNumber - 1);
                cell.click();
                return true;
            }
        }
        return false;
    }

    // this is created 3/9/2024
    public static String scanTableAndGetTheTextFromColumn(List<WebElement> list, int columnNumber, String text) {

        for (WebElement row : list) {
            String actualName = row.getText();
            if (actualName.contains(text)) {
                WebElement cell = row.findElements(By.tagName("td")).get(columnNumber - 1);
                String cellText = cell.getText(); // Capture the text of the cell
                return cellText; // Return the text after clicking
            }
        }
        return null; // Return null if the value is not found
    }

    // Scan the data from WebTable and click on Respective icon with paginations
    public void scanTableAndClickOnRespectiveIcon(List<WebElement> rows, String Text, int columnNo, int iconPosition) {
        rows.stream()
                .filter(row -> row.getText().contains(Text))
                .map(row -> row.findElements(By.tagName("td")).get(columnNo - 1))
                .map(cell -> cell.findElements(By.tagName("img")))
                .filter(imgList -> imgList.size() > iconPosition - 1)
                .findFirst().map(imgList -> {
                    imgList.get(iconPosition - 1).click();
                    return false;
                }).orElse(false);
    }

    // Scan the data from WebTable and click on Respective icon use in Corporate
    // list > Document tab
    public void scanTableAndClickOnRespectiveIconSpan(List<WebElement> ColumnList, String name, By path,
            int iconPosition) {
        for (WebElement r : ColumnList) {
            String txr = r.getText();
            if (txr.contains(name)) {
                System.out.println(r.getText());
                List<WebElement> buttons = r.findElements(path);
                if (buttons.size() >= iconPosition) {
                    buttons.get(iconPosition - 1).click();
                    break;
                }
            }
        }
    }

    // Search Data -> enter the text in Search field and related data should be
    // display
    public static List<WebElement> AccpectedNameSearchedDataSize(List<WebElement> elementList, String Name) {
        List<WebElement> NameList = elementList.stream().filter(s -> s.getText().contains(Name))
                .collect(Collectors.toList());
        return NameList;
    }

    // added at 24/09/2024 to get the data from table cell
    public static String getTextFromTheTableCellByStream(List<WebElement> elelist, String name, int columnNo) {
        return elelist.stream().filter(s -> s.getText().contains(name)).findFirst()
                .map(s -> s.findElement(By.xpath("following-sibling::td[" + columnNo + "]"))).map(WebElement::getText)
                .orElse(null);
    }

    // File Downloaded
    public static boolean isFileDownloaded(String downloadPath, String fileName) {
        File dir = new File(downloadPath);
        File[] dir_contents = dir.listFiles();

        if (dir_contents != null) {
            for (File dir_content : dir_contents) {
                if (dir_content.getName().equals(fileName))
                    return true;
            }
        }
        return false;
    }

    // the file path give in property file and photo and file stored in photo folder
    public static void uploadFile(String filePath, By fileInputLocator) {
        // Copy the file path to clipboard
        StringSelection ss = new StringSelection(filePath);
        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);

        // Find the file input element and click it
        WebElement fileInputElement = driver.findElement(fileInputLocator);
        fileInputElement.click();

        // Delay for upload dialog to appear
        try {
            Thread.sleep(6000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Use Robot to paste the file path and press ENTER
        try {
            Robot robot = new Robot();
            robot.keyPress(KeyEvent.VK_CONTROL);
            robot.keyPress(KeyEvent.VK_V);
            robot.keyRelease(KeyEvent.VK_V);
            robot.keyRelease(KeyEvent.VK_CONTROL);
            robot.keyPress(KeyEvent.VK_ENTER);
            robot.keyRelease(KeyEvent.VK_ENTER);
        } catch (AWTException e) {
            e.printStackTrace();
        }
    }

    

}
