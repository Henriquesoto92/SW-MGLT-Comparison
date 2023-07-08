"use client";

import { Starship } from "@/interface/useStarships";
import { baseUrl } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const endPoint = "starships";

async function getAllStarships(url: string): Promise<Starship[]> {
  const results: Starship[] = [];

  try {
    let nextPageUrl: string | null = url;

    while (nextPageUrl) {
      const response = await fetch(nextPageUrl, { cache: "default" });
      const data = (await response.json()) as {
        next: string | null;
        results: Starship[];
      };

      results.push(...data.results);
      nextPageUrl = data.next;
    }

    return results;
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    throw error;
  }
}

export function useStarships() {
  return useQuery(["starships"], () =>
    getAllStarships(`${baseUrl}/${endPoint}`)
  );
}
