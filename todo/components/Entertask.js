import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from "react-native";

export default function Entertask() {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    console.log(task);
  };

  return (
    <>
      <KeyboardAvoidingView
        style={styles.w}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.i}
          placeholder={"Enter a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.shashi}>
            <View style={styles.add}>
              <Text style={styles.a}>+</Text>
            </View>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  w: {
    position: "absolute",
    bottom: 60,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  shashi: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60, // Corrected border radius here
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  i: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "pink",
    borderWidth: 1,
    borderRadius: 30,
    width: 250,
    borderColor: "#C0C0C0",
  },
  add: {
    borderRadius: 30,
  },
});
