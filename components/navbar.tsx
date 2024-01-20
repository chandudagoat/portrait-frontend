import Image from "next/image";
import logo from "@/app/portrait.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-around pt-12 mb-4">
      <motion.div whileHover={{ y: -10 }}>
        <a href="/">
          <Image src={logo} alt="logo" width={150} />
        </a>
      </motion.div>
      <div>
        <a
          href="/support"
          className="transition ease-in-out delay-150 bg-[#88D498] font-bold px-10 py-5 rounded text-white hover:text-[#F3E9D2] hover:bg-[#1A936F]"
        >
          Support Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
