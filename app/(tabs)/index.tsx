import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("../../assets/images/images.jpg");

export default function Index() {
  return (
    <View style = {styles.container}>
      <View style = {styles.imageContainer}>
        <ImageViewer imgSource = {PlaceholderImage}/>
      </View>
      <Text style = {styles.text}>LPIII</Text>
      
    </View>
  );
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      backgroundColor: "#103553ff", 
    },
    text:{
      color: "#fdededff",
    },
    link:{
      fontSize: 20,
      textDecorationLine: "underline",
      color: "#fe9030ff"
    },
    imageContainer:{
      flex: 1,
    } 
  })

