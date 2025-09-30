import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
  <Tabs screenOptions={{
    tabBarActiveTintColor: "#2ada45ff",
    headerStyle: {backgroundColor: "#19685bff"}
  }}>
    <Tabs.Screen name = "index" options={{
    headerTitle: "Projeto LPIII",
    tabBarIcon: ({focused, color}) =>(<Ionicons name = {focused ? "home-sharp": "home-outline"}
    color = {color}
    size = {24}/>),
    headerLeft: () => <></>}}/>
    
    <Tabs.Screen name = "about" options={{
    tabBarIcon: ({focused, color}) =>(<Ionicons name = {focused ? 'book-sharp': 'book-outline'}
    color = {color}
    size = {24}/>),
    }}/>
    <Tabs.Screen name = "not-found"options={{}}/>
  </Tabs >
  );
}
