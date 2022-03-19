import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import SurveyScreen from "./screens/SurveyScreen/SurveyScreen";
import ThankYouScreen from "./screens/ThankYouScreen/ThankYouScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Survey Page"
          component={SurveyScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Thank You"
          component={ThankYouScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
