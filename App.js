import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  ImageBackground,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function TODOLIST() {
  const [Todo, setTodo] = useState([
    { text: "Create an app", key: "1", verified: false },
    { text: "Buy clothes", key: "2", verified: false },
    { text: "Read a novel", key: "3", verified: false },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    console.log(text.length);
    let found = false;
    for (let i = 0; i < Todo.length; i++) {
      if (Todo[i].text === text) {
        found = true;
        break;
      }
    }

    if (text.length > 0) {
      setTodo((prevTodo) => {
        return [
          { text: text, key: Math.random().toString(), verified: false },
          ...prevTodo,
        ];
      });
    } else {
      ToastAndroid.show(
        "You havent written anything yet !",
        ToastAndroid.SHORT
      );
    }
  };

  const Linee = (key) => {
    let tmp = Todo;
    tmp = tmp.map((item) => {
      return item.key === key ? { ...item, verified: !item.verified } : item;
    });
    setTodo(tmp);
  };
  console.log(Todo);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dissmissed Keyboard");
      }}
    >
      <ImageBackground
        source={require("./assets/Imageee.jpg")}
        style={{
          resizeMode: "cover",
          flex: 1,
        }}
      >
        <Header />

        <View style={styles.container}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={Todo}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  pressHandler={pressHandler}
                  Linee={Linee}
                />
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    borderColor: "#778899",
    margin: 20,
    borderBottomWidth: 5,
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
