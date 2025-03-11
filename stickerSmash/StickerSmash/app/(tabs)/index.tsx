import { Text, View, StyleSheet } from 'react-native';
 //import { Link } from 'expo-router';
 import * as NavigationBar from 'expo-navigation-bar'
 //import { Image } from 'expo-image';
 import ImageViewer from '@/components/ImageViewer';
 import Button from '@/components/Button';
 import * as ImagePicker from 'expo-image-picker';
 import { useState } from 'react';
 import CircleButton from '@/components/CircleButton';
 import IconButton from '@/components/IconButton';
 import EmojiPicker from '@/components/EmojiPicker';
 import { type ImageSource } from 'expo-image';
 import EmojiList from '@/components/EmojiList';
 import EmojiSticker from '@/components/EmojiSticker';

 const placeholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  NavigationBar.setBackgroundColorAsync("#25292e");

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    
    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri) ;
      setShowAppOptions(true);
    }else{
      alert("you did not select an image");
    }
  };

  const onReset = () => { 
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async() => {
    // to implement later
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || placeholderImage} />
        {pickedEmoji && <EmojiSticker imageSize={30} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
      <View>
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      </View>) : 
      (<View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/> 
        <Button label='Use this photo' onPress={() => (setShowAppOptions(true))}/>
      </View>)
      }
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={(emoji) => setPickedEmoji(emoji)} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex:1,
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    //position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});


/**
 * kindly note how you can use the link component to link to different pages of your screen 
 * 
 * 
 *       <Link href="/about" style={styles.button}>
            Go to About screen
         </Link>

     You can use the Link component to create an image that, when pressed, navigates to a different screen or route. 
     To achieve this, you’ll need to wrap an Image component with the Link component.
     Here's a simple example in a React Native application using expo-router:    

import { Link } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/about">
        <Image
          source={{ uri: 'https://example.com/your-image.jpg' }} // Replace with your image URL
          style={styles.image}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e', // Replace with your dark background color code
  },
  image: {
    width: 100,
    height: 100, // Adjust dimensions as needed
  },
});

 */