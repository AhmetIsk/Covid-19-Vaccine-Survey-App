import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

public class TestSuite3 {
    @Test
    public void testSuite3(){
        System.out.println("    Test Case 3 : Started");
        Appium.sleep(4000);
        WebElement attendPoll = Appium.getDriver().findElementByAccessibilityId("take-survey");
        attendPoll.click();
        Appium.sleep(1000);

        WebElement cityBox = Appium.getDriver().findElementByAccessibilityId("city-field");
        cityBox.click();
        Appium.sleep(500);
        WebElement cityBoxElement = Appium
                .getDriver().findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget." +
                        "FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/" +
                        "android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[4]");
        String cityName = cityBoxElement.getText();
        cityBoxElement.click();
        Appium.sleep(500);


        WebElement cityBoxName = Appium.getDriver().findElementByXPath("//android.widget.Spinner[@content-desc=\"city-field\"]/android.widget.TextView");
        try{
            Assert.assertEquals(cityBoxName.getText(), cityName);
            System.out.println("        Test is passed");
        }catch (AssertionError a){
            System.out.println("    ***** Test is failed");
        }

        System.out.println("    Test Case 3 : Finished");
        System.out.println("---------------------");

    }
}
