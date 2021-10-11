import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ListViewComponent,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler, Linee }) {
  return (
    <View>
      <View style={styles.delete}>
        <View style={styles.item}>
          <Text
            style={
              (styles.item,
              item.verified === true && { textDecorationLine: "line-through" })
            }
          >
            {" "}
            {item.text}{" "}
          </Text>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <AntDesign
              style={styles.delete}
              name="delete"
              size={30}
              color="#778899"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linee(item.key)}>
            <MaterialIcons name="verified" size={30} color="#778899" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 15,

    marginTop: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#778899",
    borderStyle: "dashed",
    flex: 1,
  },
  delete: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    flexDirection: "row",
    position: "absolute",
    paddingTop: 15,

    right: 5,
  },
  itemText: {
    width: "80%",
  },
});
