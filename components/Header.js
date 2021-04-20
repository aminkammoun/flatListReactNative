import React from "react";
import { Header } from "react-native-elements";

export default function HeaderMain() {
  return (
    <Header
      backgroundColor="red"
      leftComponent={{ icon: "menu", color: "#fff", size: 30 }}
      centerComponent={{
        text: "FlatList",
        style: { fontSize: 23, color: "#fff" },
      }}
      rightComponent={{ icon: "home", color: "#fff", size: 30 }}
    />
  );
}
