/** Envoie la photo au service de reconnaissance et renvoie le nom de la plante. */
export async function identifyPlant(uri: string): Promise<string> {
  const body = new FormData();
  body.append("photo", { uri, name: "plant.jpg", type: "image/jpeg" } as unknown as Blob);
  const response = await fetch("https://api.pousse.app/identify", { method: "POST", body });
  const json = (await response.json()) as { name: string };
  return json.name;
}
