import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Mes plantes" }} />
      <Tabs.Screen name="scan" options={{ title: "Identifier" }} />
      <Tabs.Screen name="premium" options={{ title: "Pousse+" }} />
    </Tabs>
  );
}
