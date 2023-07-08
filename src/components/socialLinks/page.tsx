"use client";

import Image from "next/image";
import { socialLinks } from "@/mock/links";

export default function SocialLinks() {
  return (
    <div className="flex gap-8 w-auto">
      {socialLinks.map((item, index) => {
        return (
          <a href={item.href} key={`${index}-${item.name}`}>
            <Image src={item.src} alt="logo" width={32} height={32} />
          </a>
        );
      })}
    </div>
  );
}
