import Image from "next/image";
import logo from "@/app/portrait.png";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-around py-8">
      <a href="/">
        <Image
          src={logo}
          alt="logo"
          width={150}
          className="drop-shadow-lg hover:drop-shadow-xl"
        />
      </a>
      <div>
        <a
          href="/support"
          className="mr-4 text-[#88D498] font-bold drop-shadow-lg hover:drop-shadow-xl"
        >
          Support Us
        </a>
        <a
          href="/signup"
          className="px-10 py-5 rounded text-[#F3E9D2] bg-[#1A936F] font-bold drop-shadow-lg hover:drop-shadow-xl"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
