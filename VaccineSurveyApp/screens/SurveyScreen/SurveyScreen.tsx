import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DatePicker from "react-native-datepicker";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import React, { useState } from "react";
import { colors } from "../../constants/constants";

const SurveyScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("2016-05-15");
  const [checked, setChecked] = useState("yes");
  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleSubmit = () => {
    setUsername("");
    setPassword("");
    setEmail("");
    setFirstName("");
    setLastName("");
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <KeyboardAvoidingView style={styles.container}>
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
          <Text style={styles.inputLabel}>Name and Surname: </Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <Text style={styles.inputLabel}>Birth Date</Text>
          <DatePicker
            style={{ width: 200 }}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1930-05-01"
            maxDate="2004-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
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
            }}
            onDateChange={() => setDate(date)}
          />
          <Text style={styles.inputLabel}>City</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text style={styles.inputLabel}>Gender</Text>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={styles.input}
          />
          <Text style={styles.inputLabel}>Which vaccine did you applied?</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Biontech" value="Biontech" />
            <Picker.Item label="Moderna" value="Moderna" />
            <Picker.Item label="Astrazeneca" value="Astrazeneca" />
            <Picker.Item label="Sinovac" value="Sinovac" />
            <Picker.Item label="Sputnik V" value="Sputnik V" />
          </Picker>
          <Text style={styles.inputLabel}>
            Did you have any side effect after vaccination?
          </Text>
          <View>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
          </View>
          <Text style={styles.inputLabel}>
            Did you have any PCR positive case or Covid-19 symptoms after 3rd
            vaccination?
          </Text>
          <View>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
          </View>
        </View>
        <View style={styles.registrationContainer}>
          <TouchableOpacity
            onPress={handleSubmit}
            // color={
            //   username && password && email && firstName && lastName ? colors.orange : colors.disabled
            // }
            disabled={!(username && password && email && firstName && lastName)}
          >
            <Text
            // color={
            //   username && password && email && firstName && lastName
            //     ? colors.white
            //     : colors.disabledText
            // }
            >
              Registration
            </Text>
          </TouchableOpacity>
        </View>
        <Text>Survey Screen</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Thank You");
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
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
  inputLabel: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: "#374151",
  },
  buttonContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  registrationContainer: {
    margin: 30,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginBottom: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 25,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  header: {
    color: `${colors.orange}`,
    fontWeight: "bold",
    fontSize: 50,
    padding: 20,
    paddingBottom: 5,
  },
  enrollHeader: {
    color: `${colors.headerRed}`,
    fontWeight: "bold",
    fontSize: 30,
    padding: 20,
  },
  subheader: {
    color: `${colors.gray}`,
    fontWeight: "200",
    paddingBottom: 40,
    fontSize: 20,
  },
  title: {
    width: 197,
    height: 39.9,
    fontSize: 36,
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: "center",
    color: `${colors.title}`,
    marginBottom: 20,
  },
  subtitle: {
    width: 220,
    height: 46.5,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "center",
    color: `${colors.subtitle}`,
    marginBottom: 80,
  },
  subcomment: {
    color: `${colors.headerRed}`,
    paddingTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  termsconds: {
    width: 368,
    height: 26.6,
    fontSize: 10,
    letterSpacing: 0,
    textAlign: "center",
    color: `${colors.termscond}`,
  },
  forgotPass: {
    display: "flex",
    alignSelf: "flex-end",
    margin: 15,
    color: `${colors.orange}`,
  },
  square: {
    width: 229,
    height: 135,
    opacity: 0.44,
    backgroundColor: "#fec5aa",
  },
  layout: {
    position: "absolute",
    left: 1,
    top: 0,
    width: 414,
    height: 896,
  },
  oval: {
    width: 185,
    height: 209,
    opacity: 0.3,
    backgroundColor: "#fec5aa",
  },
  description: {
    padding: 20,
    color: `${colors.disabledText}`,
    fontStyle: "italic",
  },
});
