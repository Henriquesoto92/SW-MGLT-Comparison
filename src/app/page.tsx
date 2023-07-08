"use client";

import { getStartships } from "@/services/hooks/useStarships";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Comparison between StarWars spaceships
      <button
        onClick={() => {
          console.log(getStartships());
        }}
      >
        clique aqui
      </button>
    </main>
  );
}
