import { baseUrl } from "@/api";

const endPoint = "starships";

export async function getStarships() {
  try {
    const response = await fetch(`${baseUrl}/${endPoint}`).then((response) =>
      response.json()
    );

    return response;
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}
