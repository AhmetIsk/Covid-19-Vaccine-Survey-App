import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ThankYouScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ThankYouScreen</Text>
    </View>
  );
};

export default ThankYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
