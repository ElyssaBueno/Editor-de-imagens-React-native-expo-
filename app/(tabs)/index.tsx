import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("../../assets/images/images.jpg");

export default function Index() {
const [selectedImage, setSelectedImage] = useState<string | undefined>(
  undefined
);
const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
const [isModalVisible, setModalVisible] = useState<boolean>(false);
  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else{
      alert("Você não selecionou nenhuma imagem :(");
    }
  }
  const onReset = () => {
    setShowAppOptions(false)
  };

  const onAddSticker = () => {
    setModalVisible(true);
  };

  const onModalClose= () => {
    setModalVisible(false);
  };
  const onSaveImageAsync = async () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource= {selectedImage || PlaceholderImage} />
      </View>
    {showAppOptions?(
      <View style = {styles.optionsContainer}>
        <View style = {styles.optionsRow}>
          <IconButton icon="refresh" label = "Reset" onPress={onReset}/>
          <CircleButton onPress={onAddSticker}/>
          <IconButton icon="save-alt" label = "Save" onPress={onSaveImageAsync}/>
        </View>
      </View>

    ):(<View style = {styles.footerContainer}>
        <Button
         onPress={pickImageAsync}
         label = "Escolha uma foto" 
         theme="primary"/>
        <Button label = "Use essa foto"
        onPress={()=>setShowAppOptions(true)}/>
      </View>
    )}

    <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
      { }
    </EmojiPicker>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e"  
  },
  imageContainer:{
    flex: 1,
  },
  footerContainer:{
    flex: 1/3,
    alignItems: "center",
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 50,
  },
  optionsRow:{
    alignItems: 'center',
    flexDirection: 'row',
  },
});