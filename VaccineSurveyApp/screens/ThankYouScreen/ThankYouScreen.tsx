import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../constants/constants";

const ThankYouScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/thankYou.png")}
        style={{ width: 250, height: 250 }}
      />
      <TouchableOpacity
        testID="back-to-home-btn"
        onPress={() => navigation.navigate("Welcome")}
        style={styles.backButton}
      >
        <Text 
          testID="home-btn"
          accessibilityLabel="home-btn"
          style={styles.buttonLabel}>Back to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThankYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backButton: {
    marginTop: 120,
    padding: 10,
    backgroundColor: `${colors.red}`,
    borderRadius: 12,
  },
  buttonLabel: {
    fontSize: 15,
    color: `${colors.white}`,
  },
});
