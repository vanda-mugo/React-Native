import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?:'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  // to set up functionality such that theme being passed as a prop can be used to customize the button display
  // we can use the theme prop to set the button color
  if(theme === 'primary') {
    return(
        <View style={[styles.buttonContainer,
            {borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18},] 
        }>
        <Pressable style={[styles.button, {backgroundColor: "#fff"}]} 
            onPress={onPress}>
                <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                <Text style={[styles.buttonLabel, {color: '#25292e'}]}>{label}</Text>
        </Pressable>
        </View>
    )
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }, buttonIcon:{
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
//note by here we have created a button component that we can reuse in our app
//we can use this button component in any other screen that we want to display a button
//we can pass the button label as a prop to the component
//we can also pass other props to the component to customize the button display
//we can also add more styles to the component to customize the button display
//we can also add more functionality to the component to customize the button display