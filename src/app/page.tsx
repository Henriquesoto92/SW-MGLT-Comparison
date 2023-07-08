import Comparator from "@/components/Comparator";

export default function Home() {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center p-20 sm:pt-[120px] pt-[200px] text-gray-400">
      <h1>
        How many stops would it take if a Star Wars spaceship needs to travel
        the distance below the input below
      </h1>

      <Comparator />
    </main>
  );
}
