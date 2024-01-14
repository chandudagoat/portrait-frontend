import Image from "next/image";
import logo from "@/app/portrait.png";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-around py-8">
      <a href="/">
        <Image src={logo} alt="logo" width={150} />
      </a>
      <div>
        <a
          href="/support"
          className="mr-4 text-[#114B57] font-bold hover:underline"
        >
          Support Us
        </a>
        <a
          href="/signup"
          className="transition ease-in-out delay-150 bg-[#88D498] font-bold px-10 py-5 rounded text-white hover:text-[#F3E9D2] hover:bg-[#1A936F]"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
