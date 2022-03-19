import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../constants/constants";

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/vaccineLogo.png")}
        style={{ width: 300, height: 236 }}
      />
      <Text style={styles.header}>Covid 19 Vaccine Survey</Text>
      <Text style={styles.description}>
        Vaccine Pollster is requesting input from employees regarding their
        COVID-19 vaccination status and how Vaccine Pollster may help to
        facilitate vaccinations for employees. This anonymous and voluntary
        survey will help senior management make decisions regarding reopening
        the office; however, the results of this survey will not be the only
        information used in the decision-making process. At this time, Vaccine
        Pollster has no intention of mandating the COVID-19 vaccine.
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Survey Page");
        }}
        style={styles.startButton}
      >
        <Text style={styles.buttonLabel}>Take the Survey Now!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.white}`,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    margin: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: `${colors.orange}`,
  },
  startButton: {
    padding: 20,
    backgroundColor: `${colors.orange}`,
    borderRadius: 12,
  },
  buttonLabel: {
    fontSize: 20,
    color: `${colors.white}`,
  },
  description: {
    padding: 20,
    color: `${colors.disabledText}`,
    fontStyle: "italic",
  },
});
