import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = (text) => {
    setGoalText(text);
  };
  const addGoalHandler = () => {
    props.addGoalHandler(goalText);
    setGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.endgoalInputHandler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    padding: 16,
    backgroundColor: "#311b6b",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    color:"#fff"
  },
  btnContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
