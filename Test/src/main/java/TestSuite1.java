import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;
import java.time.Duration;

public class TestSuite1 {
    @Test
    public void testSuite1(){
        System.out.println("Test Suite 1: Started");
        Appium.sleep(200);
        WebElement attendPoll = Appium.getDriver().findElementByAccessibilityId("take-survey");
        attendPoll.click();
        Appium.sleep(1000);

        WebElement nameField = Appium.getDriver().findElementByAccessibilityId("name-field");
        boolean flag;
        String[] names = {"bora kazanci","borak","bora fatih kazanci","bora kazanci35", "bora kazanci%%%%&&&&"};
        boolean[] values = {false,true,false,true,true};

        System.out.println("    Test Case 1 : Started");
        for (int i = 0; i < names.length; i++){
            nameField.sendKeys(names[i]);
            Appium.sleep(200);
            try{
                WebElement nameFieldError = Appium.getDriver().findElementByAccessibilityId("name-warning");
                flag = true;
            }catch(Exception e){
                flag = false;
            }

            try{
                Assert.assertEquals(flag,values[i]);
                System.out.println("        Test is passed on input: " + names[i]);
            }catch (AssertionError a){
                System.out.println("    ***** Test is failed on input: " + names[i]);
            }
            nameField.clear();
        }
        System.out.println("    Test Case 1 : Finished");
        Appium.sleep(1000);
        System.out.println("---------------------");
    }
}
