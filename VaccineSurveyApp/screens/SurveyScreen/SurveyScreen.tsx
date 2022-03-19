import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SurveyScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Survey Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Thank You");
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SurveyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
