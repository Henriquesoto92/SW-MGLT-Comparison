import Image from "next/image";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav
      className="h-[150px] sm:h-[80px] fixed left-0 top-0 flex flex-col gap-2 sm:flex-row w-full px-8 py-2 justify-between items-center bg-zinc-400 uppercase"
      style={{
        WebkitTextStroke: "0.5px #FFE763",
      }}
    >
      <div className="sm:w-[220px] order-1">
        <Image src="/assets/logo/logo.png" alt="logo" height={56} width={80} />
      </div>

      <Navlinks />

      <div className="w-[250px] font-bold text-xl text-center sm:order-3 order-2">
        Comparison between StarWars Starships
      </div>
    </nav>
  );
};

export default Navbar;
0;
