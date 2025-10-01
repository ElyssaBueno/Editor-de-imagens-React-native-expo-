import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options = {{title: "Oops! Página não encontrada!"}}/>
    <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
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
    },
    button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  })

