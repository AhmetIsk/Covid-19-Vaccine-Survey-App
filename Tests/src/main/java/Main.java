public class Main {
    public static void main(String[] args){
        String deviceName = "Pixel 5 API 30";
        String deviceID= "emulator-5554";
        String platformName = "Android";
        String platformVersion = "11";
        String appPackage = "/Covid-19-Vaccine-Survey-App/Tests/src/main/resources/VaccineSurveyApp-ae0d459e31294b4eae6a2977bf9a9991-signed.apk";

        Appium.getInstance().initAppium(deviceName,deviceID,platformName,platformVersion,appPackage);
    }
}
