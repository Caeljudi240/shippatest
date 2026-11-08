import { FlatList, Text, View } from "react-native";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";
import { PlantCard } from "../../src/components/PlantCard";
import { usePlants } from "../../src/lib/plants";

export default function MyPlants() {
  const plants = usePlants();
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={plants}
        keyExtractor={(plant) => plant.id}
        renderItem={({ item }) => <PlantCard plant={item} />}
        ListEmptyComponent={<Text>Ajoutez votre première plante depuis l'onglet Identifier.</Text>}
      />
      <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    </View>
  );
}
