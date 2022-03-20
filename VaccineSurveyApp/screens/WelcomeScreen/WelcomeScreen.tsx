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
        This survey is conducted by CS 458 project-2 team and may take 2-3
        minutes. The survey aims to investigate the impacts of vaccination
        against COVID-19 virus. The collected data will be used to evaluate
        COVID-19 influence rate among people.
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
    paddingHorizontal: 20,
    paddingVertical: 40,
    color: `${colors.disabledText}`,
    fontStyle: "italic",
  },
});
