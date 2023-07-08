"use client";

import { getStarships } from "@/services/hooks/useStarships";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-gray-400">
      Comparison between StarWars Starships
      <button
        onClick={() => {
          console.log(getStarships());
        }}
      >
        clique aqui
      </button>
    </main>
  );
}
