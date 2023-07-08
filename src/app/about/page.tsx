import Image from "next/image";
import { socialLinks } from "@/mock/links";

export default function about() {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center p-25 sm:p-20 text-gray-400">
      <h1>Project made for Henrique Soto</h1>
      <div className="hidden md:flex gap-8 w-full md:w-auto">
        {socialLinks.map((item, index) => {
          return (
            <a href={item.href} key={`${index}-${item.name}`}>
              <Image src={item.src} alt="logo" width={32} height={32} />
            </a>
          );
        })}
      </div>
    </main>
  );
}
