import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemtext}>{props.text}</Text>
      </View>
      <View style={styles.circlar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 0,
    marginTop: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.8,
  },
  circlar: {
    width: 12,
    height: 12,
    bordercolour: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default Task;
