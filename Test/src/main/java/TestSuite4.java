import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.time.Duration;

public class TestSuite4 {
    @Test
    public void testSuite4(){
        System.out.println("    Test Case 4: Started");
        Appium.sleep(6000);
        WebElement attendPoll = Appium.getDriver().findElementByAccessibilityId("take-survey");
        attendPoll.click();
        Appium.sleep(1000);

        WebElement nameField = Appium.getDriver().findElementByAccessibilityId("name-field");
        nameField.sendKeys("Bora Kazanci");
        WebElement datePicker = Appium.getDriver().findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup");
        datePicker.click();
        Appium.sleep(1000);

        WebElement validDate = Appium.getDriver().findElementByAccessibilityId("01 June 2004");
        validDate.click();
        WebElement okButton = Appium.getDriver().findElementById("android:id/button1");
        okButton.click();
        Appium.sleep(1000);

        WebElement cityBox = Appium.getDriver().findElementByAccessibilityId("city-field");
        cityBox.click();
        Appium.sleep(500);
        WebElement cityBoxElement = Appium
                .getDriver().findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget." +
                        "FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/" +
                        "android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[4]");
        cityBoxElement.click();
        Appium.sleep(500);

        TouchAction touchAction = new TouchAction(Appium.getDriver());
        touchAction.press(PointOption.point(10, 2000))
                .waitAction(WaitOptions.waitOptions(Duration.ofMillis(3000)))
                .moveTo(PointOption.point(10, 200))
                .release();

        touchAction.perform();

        WebElement genderBox = Appium.getDriver().findElementByAccessibilityId("gender-field");
        genderBox.click();
        Appium.sleep(500);
        WebElement genderBoxElement = Appium
                .getDriver().findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget." +
                        "FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/" +
                        "android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]");
        genderBoxElement.click();
        Appium.sleep(1000);

        WebElement vacBox = Appium.getDriver().findElementByAccessibilityId("vaccine-field");
        vacBox.click();
        Appium.sleep(500);
        WebElement vacBoxElement = Appium
                .getDriver().findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget." +
                        "FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/" +
                        "android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]");
        vacBoxElement.click();
        Appium.sleep(1000);

        WebElement radBtn1 = Appium
                .getDriver().findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget." +
                        "FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/" +
                        "android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/" +
                        "android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/" +
                        "android.widget.RadioButton[1]");
        WebElement radBtn2 = Appium
                .getDriver().findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget." +
                        "FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/" +
                        "android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/" +
                        "android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/" +
                        "android.widget.RadioButton[3]");

        boolean btnFlagBefore, btnFlagAfter;
        WebElement submitButton;
        try{
            submitButton = Appium.getDriver().findElementByAccessibilityId("submit-btn");
            btnFlagBefore = false;
        }catch (Exception e){
            btnFlagBefore = true;
        }

        radBtn1.click();
        radBtn2.click();
        Appium.sleep(1000);

        try{
            submitButton = Appium.getDriver().findElementByAccessibilityId("name-field");
            btnFlagAfter = true;
        }catch (Exception e){
            btnFlagAfter = false;
        }
        try{
            Assert.assertEquals(btnFlagBefore, btnFlagAfter);
            System.out.println("        Test is passed");
        }catch (AssertionError a){
            System.out.println("    ***** Test is failed");
        }
        System.out.println("    Test Case 4: Finished");
        System.out.println("---------------------");

    }
}
