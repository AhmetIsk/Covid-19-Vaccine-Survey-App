import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Covid 19 Vaccine Survey</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Survey Page");
        }}
      >
        <Text>Take the Survey Now!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
