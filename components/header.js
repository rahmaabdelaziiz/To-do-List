import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> ★ TO DO LIST ★ </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: "#778899",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#EEE",
  },
});
