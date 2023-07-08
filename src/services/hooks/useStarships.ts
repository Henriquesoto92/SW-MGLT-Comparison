import { Starship } from "@/interface/useStarships";
import { baseUrl } from "@/services/api";

const endPoint = "starships";

export async function getStartships() {
  const initialUrl = `${baseUrl}/${endPoint}`;
  const results: Starship[] = [];

  await getAllStarships(initialUrl, results);

  console.log(results);
  return results;
}

async function getAllStarships(
  url: string,
  results: Starship[]
): Promise<void> {
  try {
    let nextPageUrl: string | null = url;

    while (nextPageUrl) {
      const response = await fetch(nextPageUrl);
      const data = (await response.json()) as {
        next: string | null;
        results: Starship[];
      };

      results.push(...data.results);
      nextPageUrl = data.next;
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    throw error;
  }
}
