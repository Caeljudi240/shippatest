import { Text, View } from "react-native";
import type { Plant } from "../lib/plants";

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <View style={{ padding: 16 }}>
      <Text>{plant.name}</Text>
      <Text>Prochain arrosage : {plant.nextWatering}</Text>
    </View>
  );
}
