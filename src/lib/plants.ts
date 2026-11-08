import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export type Plant = { id: string; name: string; nextWatering: string };

export function usePlants(): Plant[] {
  const [plants, setPlants] = useState<Plant[]>([]);
  useEffect(() => {
    AsyncStorage.getItem("plants").then((raw) => setPlants(raw ? JSON.parse(raw) : []));
  }, []);
  return plants;
}
