import React from "react";
//import { Text } from "react-native";
import "../assets/global.css";
//import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

const HomeScreen = () => {
  return <Redirect href="/(auth)/welcome" />;
};

export default HomeScreen;
