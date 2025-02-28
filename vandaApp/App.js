import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.header} />
      <View style={styles.header} />
      <View style={styles.header} />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: 'green',
    height: 150,
    width: 400,
    margin:10,
    borderRadius: 10,
  },
});


/**
 * <Text>I feel so good about this.</Text>
      <Text>Richard Mugo</Text>
      <Text>My name is John Mugo and this is my first mobile application</Text>
 */