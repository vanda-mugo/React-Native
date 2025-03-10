import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});


//note by here we use a component that we can reuse to display images in our app
//we can use this component in any other screen that we want to display images
//we can pass the image source as a prop to the component
//we can also pass other props to the component to customize the image display
//we can also add more styles to the component to customize the image display
//we can also add more functionality to the component to customize the image display