import { Text, View, StyleSheet } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';

export default function Index() {

  NavigationBar.setBackgroundColorAsync("#25292e");

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text:{
    color: "#fff"
  }
});
