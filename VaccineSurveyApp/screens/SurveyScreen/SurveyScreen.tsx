import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import DatePicker from "react-native-datepicker";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import { cities } from "../../constants/iller";
import React, { useState } from "react";
import { colors } from "../../constants/constants";

const SurveyScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [effectChecked, setEffectChecked] = useState("");
  const [city, setCity] = useState("");
  const [checked, setChecked] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [gender, setGender] = useState("");
  const regName1 = /^[a-zA-Z]{2,15}\s([a-zA-Z]{2,15}\s)?[a-zA-Z]{2,15}$/;
  const regName2 = /^[a-zA-Z]{2,15}\s([a-zA-Z]{2,15}\s)?[a-zA-Z]{2,15}$/;

  const handleSubmit = () => {
    setName("");
    setDate("");
    setCity("");
    setEffectChecked("");
    setChecked("");
    setVaccine("");
    setGender("");
    navigation.navigate("Thank You");
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <KeyboardAvoidingView style={styles.container}>
        <Image
          source={require("../../assets/surveyHeader.png")}
          style={{ width: "100%", height: 236 }}
        />

        <Text style={styles.description}>
          Vaccine Pollster is requesting input from employees regarding their
          COVID-19 vaccination status and how Vaccine Pollster may help to
          facilitate vaccinations for employees. This anonymous and voluntary
          survey will help senior management make decisions regarding reopening
          the office; however, the results of this survey will not be the only
          information used in the decision-making process. At this time, Vaccine
          Pollster has no intention of mandating the COVID-19 vaccine.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            Name and Surname: <Text style={{ color: colors.red }}>*</Text>
          </Text>
          <TextInput
            testID="name-field"
            accessibilityLabel="name-field"
            placeholder="Name and Surname"
            value={name}
            onChangeText={(text) => setName(text)}
            style={
              !(regName1.test(name) || regName2.test(name)) && name ? styles.warningInput : styles.input
            }
          />
          <Text
          testID="name-warning"
          accessibilityLabel="name-warning"
            style={
              !(regName1.test(name) || regName2.test(name)) && name
                ? { color: `${colors.red}` }
                : { display: "none" }
            }
          >
            Please enter a valid name and surname!
          </Text>
          <Text style={styles.inputLabel}>
            Birth Date <Text style={{ color: colors.red }}>*</Text>
          </Text>
          <DatePicker
            testID="birth-field"
            style={{ width: 200 }}
            date={date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-05-1930"
            maxDate="01-06-2004"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: styles.dateIcon,
              dateInput: styles.dateInput,
            }}
            onDateChange={(date) => setDate(date)}
          />
          <Text style={styles.inputLabel}>
            City <Text style={{ color: colors.red }}>*</Text>
          </Text>
          <Picker
            testID="city-field"
            accessibilityLabel="city-field"
            selectedValue={city}
            onValueChange={(itemValue, itemIndex) =>
              itemValue !== "0" && setCity(itemValue)
            }
          >
            <Picker.Item label="Please select an option..." value="0" />
            {cities.map((one) => {
              return <Picker.Item label={one} value={one} key={one} />;
            })}
          </Picker>
          <Text style={styles.inputLabel}>
            Gender <Text style={{ color: colors.red }}>*</Text>
          </Text>
          <Picker
            testID="gender-field"
            accessibilityLabel="gender-field"
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) =>
              itemValue !== "0" && setGender(itemValue)
            }
          >
            <Picker.Item label="Please select an option..." value="0" />
            <Picker.Item label="Woman" value="Woman" />
            <Picker.Item label="Man" value="Man" />
            <Picker.Item label="Transgender" value="Transgender" />
            <Picker.Item
              label="Non-binary/non-conforming"
              value="Non-binary/non-conforming"
            />
            <Picker.Item
              label="Prefer not to respond"
              value="Prefer not to respond"
            />
          </Picker>
          <Text style={styles.inputLabel}>
            Which vaccine did you applied?{" "}
            <Text style={{ color: colors.red }}>*</Text>
          </Text>
          <Picker
            testID="vaccine-field"
            accessibilityLabel="vaccine-field"
            selectedValue={vaccine}
            onValueChange={(itemValue, itemIndex) =>
              itemValue !== "0" && setVaccine(itemValue)
            }
          >
            <Picker.Item label="Please select an option..." value="0" />
            <Picker.Item label="Biontech" value="Biontech" />
            <Picker.Item label="Moderna" value="Moderna" />
            <Picker.Item label="Astrazeneca" value="Astrazeneca" />
            <Picker.Item label="Sinovac" value="Sinovac" />
            <Picker.Item label="Sputnik V" value="Sputnik V" />
          </Picker>
          <Text style={styles.inputLabel}>
            Did you have any side effect after vaccination?{" "}
            <Text style={{ color: colors.red }}>*</Text>
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <RadioButton
                testID="sideEffect-rbtn-y"
                value="Yes"
                status={effectChecked === "Yes" ? "checked" : "unchecked"}
                onPress={() => setEffectChecked("Yes")}
                uncheckedColor={`${colors.gray}`}
                color={`${colors.black}`}
              />
              <RadioButton
                testID="sideEffect-rbtn-n"
                value="No"
                status={effectChecked === "No" ? "checked" : "unchecked"}
                onPress={() => setEffectChecked("No")}
                uncheckedColor={`${colors.gray}`}
                color={`${colors.black}`}
              />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={{ marginVertical: 8 }}>Yes</Text>
              <Text style={{ marginVertical: 8 }}>No</Text>
            </View>
          </View>
          <Text style={styles.inputLabel}>
            Did you have any PCR positive case or Covid-19 symptoms after 3rd
            vaccination? <Text style={{ color: colors.red }}>*</Text>
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <RadioButton
                testID="radio-btn-yes"
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
                uncheckedColor={`${colors.gray}`}
                color={`${colors.black}`}
              />
              <RadioButton
                testID="radio-btn-no"
                value="No"
                status={checked === "No" ? "checked" : "unchecked"}
                onPress={() => setChecked("No")}
                uncheckedColor={`${colors.gray}`}
                color={`${colors.black}`}
              />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={{ marginVertical: 8 }}>Yes</Text>
              <Text style={{ marginVertical: 8 }}>No</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            testID="submit-btn"
            accessibilityLabel="submit-btn"
            onPress={handleSubmit}
            style={{
              backgroundColor: `${colors.orange}`,
              width: "100%",
              padding: 15,
              borderRadius: 10,
              alignItems: "center",
              marginBottom: 5,
              display:
                !name ||
                !(regName1.test(name) || regName2.test(name)) ||
                !date ||
                !city ||
                !gender ||
                !checked ||
                !effectChecked ||
                !vaccine
                  ? "none"
                  : "flex",
            }}
            disabled={
              !name ||
              !(regName1.test(name) || regName2.test(name)) ||
              !date ||
              !city ||
              !gender ||
              !checked ||
              !effectChecked ||
              !vaccine
            }
          >
            <Text
              style={{
                color: `${colors.white}`,
              }}
            >
              Submit Form
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
  scrollContainer: {
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: "80%",
  },
  dateIcon: {
    position: "absolute",
    left: 0,
    top: 4,
    marginLeft: 0,
  },
  dateInput: {
    marginLeft: 36,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: `${colors.borderColor}`,
    marginTop: 10,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: `${colors.borderColor}`,
    marginTop: 10,
  },
  warningInput: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: `${colors.borderColor}`,
    marginTop: 10,
    borderBottomColor: `${colors.red}`,
    bottom: 2,
  },
  inputLabel: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: "#374151",
  },
  buttonContainer: {
    margin: 30,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    padding: 20,
    color: `${colors.disabledText}`,
    fontStyle: "italic",
  },
  radioButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
