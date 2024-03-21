import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* todays task */}
      <View style={styles.tw}>
        <Text style={styles.st}>Todays task is important</Text>

        <View style={styles.item}></View>
        <Task text={"Task 1"} />
        <Task text={"Task 2"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#99BFF1",
  },
  tw: {
    paddingTop: 80,
    // paddingLeft: 80,
    paddingHorizontal: 20,
  },
  st: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
