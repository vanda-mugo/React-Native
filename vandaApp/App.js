import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView vertical={true}>
      <View style={styles.header} />
      <View style={styles.header} />
      <View style={styles.header} />
      <View style={styles.header} />
      <View style={styles.header} />
      <View style={styles.header} />
      <View >  
      <ScrollView horizontal={true}>    
      <View style={styles.horizontal} />
      <View style={styles.horizontal} />
      <View style={styles.horizontal} />
      <View style={styles.horizontal} />
      <View style={styles.horizontal} />
      <View style={styles.horizontal} />
      <View style={styles.horizontal} />
      </ScrollView>
      </View>
      <View style={styles.header} />
      <View style={styles.header} />
      <View style={styles.header} />

      <StatusBar style="auto" />
      </ScrollView>
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
    height: 200,
    width: '65%',
    margin:10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    backgroundColor: 'cyan',
    height: 150,
    width:wp('30%'),
    margin:10,
    borderRadius: 10,
  },
});


/**
 * <Text>I feel so good about this.</Text>
      <Text>Richard Mugo</Text>
      <Text>My name is John Mugo and this is my first mobile application</Text>
 */