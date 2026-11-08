import * as Location from "expo-location";

/** Position utilisée pour adapter l'arrosage à la météo locale. */
export async function startWeatherTracking() {
  await Location.requestBackgroundPermissionsAsync();
  await Location.startLocationUpdatesAsync("weather", { accuracy: Location.Accuracy.High });
}
