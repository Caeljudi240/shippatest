import { Button, Text, View } from "react-native";
import Purchases from "react-native-purchases";

export default function Premium() {
  const subscribe = async () => {
    const offerings = await Purchases.getOfferings();
    const monthly = offerings.current?.monthly;
    if (monthly) await Purchases.purchasePackage(monthly);
  };
  return (
    <View>
      <Text>Pousse+ — 4,99 € / mois</Text>
      <Text>Plantes illimitées, diagnostic des maladies, sans publicité.</Text>
      <Button title="Essayer gratuitement" onPress={subscribe} />
    </View>
  );
}
