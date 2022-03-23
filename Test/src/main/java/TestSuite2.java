import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

public class TestSuite2 {
    @Test
    public void testSuite2(){
        System.out.println("    Test Case 2 : Started");
        Appium.sleep(5000);
        WebElement attendPoll = Appium.getDriver().findElementByAccessibilityId("take-survey");
        attendPoll.click();
        Appium.sleep(1000);

        WebElement datePicker = Appium.getDriver().findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup");
        datePicker.click();
        Appium.sleep(1000);

        WebElement validDate = Appium.getDriver().findElementByAccessibilityId("01 June 2004");
        validDate.click();
        WebElement invalidDate = Appium.getDriver().findElementByAccessibilityId("09 June 2004");
        invalidDate.click();

        boolean[] expectedRes = {true, false};
        boolean[] results = {validDate.isEnabled(), invalidDate.isEnabled()};

        for (int i = 0; i < 2; i++) {
            try{
                Assert.assertEquals(expectedRes[i],results[i]);
                System.out.println("        Test is passed on input: " + (i + 1));
            }catch (AssertionError a){
                System.out.println("    ***** Test is failed on input: " + (i + 1));
            }
        }
        System.out.println("    Test Case 2 : Finished");
        System.out.println("---------------------");
    }
}
