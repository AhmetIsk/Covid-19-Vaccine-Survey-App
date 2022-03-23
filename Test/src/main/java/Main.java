public class Main{
    public static void main(String[] args){

        String deviceName = "Pixel 5 API 30";
        String deviceID= "emulator-5554";
        String platformName = "Android";
        String platformVersion = "11";
        String appPackage = "com.mert.VaccineSurveyApp";
        String appActivity = "host.exp.exponent.MainActivity";

        Appium.getInstance().initAppium(deviceName,deviceID,platformName,platformVersion,appPackage,appActivity);

        TestSuite1 testSuite1 = new TestSuite1();
        testSuite1.testSuite1();

        Appium.getDriver().terminateApp(appPackage);
        Appium.getDriver().activateApp(appPackage);

        TestSuite2 testSuite2 = new TestSuite2();
        testSuite2.testSuite2();

        Appium.getDriver().terminateApp(appPackage);
        Appium.getDriver().activateApp(appPackage);

        TestSuite3 testSuite3 = new TestSuite3();
        testSuite3.testSuite3();

        Appium.getDriver().terminateApp(appPackage);
        Appium.getDriver().activateApp(appPackage);

        TestSuite4 testSuite4 = new TestSuite4();
        testSuite4.testSuite4();

        Appium.getDriver().terminateApp(appPackage);
        Appium.getDriver().activateApp(appPackage);

        TestSuite5 testSuite5 = new TestSuite5();
        testSuite5.testSuite5();

    }
}
