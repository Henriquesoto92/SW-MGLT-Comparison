"use client";

import { pathLinks } from "@/mock/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-5 sm:order-2 order-3">
      {pathLinks.map((item, index) => {
        const isActive = pathname.endsWith(item.href);
        return (
          <li key={`${index}-${item.name}`}>
            <Link
              rel="stylesheet"
              href={item.href}
              className={`transition ease-in-out duration-300 hover:brightness-110 text-black h-40  ${
                isActive ? "font-bold " : ""
              }`}
              style={{
                WebkitTextStroke: isActive ? "0.5px #FFE763" : "0.3px #FFE763",
              }}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
