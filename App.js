import React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";
import Main from "./components/main";
import HeaderMain from "./components/Header";
export default function App() {
  return (
    <>
      <HeaderMain />
      <Main />
    </>
  );
}
