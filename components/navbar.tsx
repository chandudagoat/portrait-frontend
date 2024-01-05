import Image from "next/image";
import logo from "@/app/portrait.png";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-around py-8">
      <div>
        <Image src={logo} alt="logo" width={150} />
      </div>
      <div>
        <a href="/support" className="mr-4">
          Support Us
        </a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
