import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
  <Tabs>
    <Tabs.Screen name = "index" options={{
    headerTitle: "Projeto LPIII",
    headerLeft: () => <></>}}/>
    
    <Tabs.Screen name = "about"/>
    <Tabs.Screen name = "not-found"options={{}}/>
  </Tabs >
  );
}
