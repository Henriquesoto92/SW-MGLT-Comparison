import SocialLinks from "@/components/socialLinks/page";

export default function about() {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center justify-center p-25 sm:p-20 text-gray-400">
      <h1>Project made for Henrique Soto</h1>
      <SocialLinks />
    </main>
  );
}
