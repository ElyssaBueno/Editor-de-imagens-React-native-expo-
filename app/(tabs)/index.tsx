
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View } from "react-native";


const PlaceholderImage = require("../../assets/images/images.jpg");


export default function Index() {
  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled){
      console.log(result);
    } else{
      alert("Você não selecionou nenhuma imagem :(");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource= {PlaceholderImage} />
      </View>
      <View style = {styles.footerContainer}>
        <Button
         onPress={pickImageAsync}
         label = "Escolha uma foto" 
         theme="primary"/>
        <Button label = "Use essa foto"/>
      </View>
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
  }
});