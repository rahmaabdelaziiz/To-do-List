import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter here..."
        onChangeText={(value) => {
          changeHandler(value);
        }}
        value={text}
      />

      <Button
        onPress={() => {
          Keyboard.dismiss();
          submitHandler(text);
          setText("");
        }}
        title="Create new task"
        color="#778899"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#778899",
  },
});
