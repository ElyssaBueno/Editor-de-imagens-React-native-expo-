import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Sobre</Text>
    </View>
  );
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent:"center",
      alignItems: "center",
      backgroundColor: "#103553ff", 
    },
    text:{
      color: "#fdededff",
    }
  })

