import { CameraView, useCameraPermissions } from "expo-camera";
import { Button, Text, View } from "react-native";
import { identifyPlant } from "../../src/lib/identify";

export default function Scan() {
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission?.granted) {
    return (
      <View>
        <Text>Pousse a besoin de la caméra pour reconnaître vos plantes.</Text>
        <Button title="Autoriser" onPress={requestPermission} />
      </View>
    );
  }
  return <CameraView style={{ flex: 1 }} onPictureSaved={(photo) => identifyPlant(photo.uri)} />;
}
