import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>LPIII</Text>
      
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
    },
    link:{
      fontSize: 20,
      textDecorationLine: "underline",
      color: "#fe9030ff"
    }
  })

