"use client";
import { getStarships } from "@/services/useStarships";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Comparison between StarWars spaceships
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
