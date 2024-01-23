"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import twitter from "@/app/twitter.png";
import youtube from "@/app/youtube.png";
import github from "@/app/github.png";

const SignUp = () => {
  return (
    <div className="flex items-center flex-col h-screen w-full">
      <form action="POST" className="w-full bg-red-600 flex flex-col items-end">
        <div className="w-1/2 flex items-center mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="">Email</label>
            <Input type="email" placeholder="email" className="w-full" />
          </div>
          <div className="w-1/2">
            <label>Password</label>
            <Input type="password" placeholder="password" className="w-full" />
          </div>
        </div>
        <button
          type="submit"
          className="w-1/2 h-14 bg-[#88D498] rounded-md font-bold text-white transition ease-in-out delay-150 hover:text-[#F3E9D2] hover:bg-[#1A936F]"
        >
          Sign Up
        </button>
      </form>

      <div>
        <motion.div>
          <Image src={youtube} alt="youtube" width={200} />
        </motion.div>

        <motion.div>
          <Image src={twitter} alt="twitter" width={200} />
        </motion.div>

        <motion.div>
          <Image src={github} alt="github" width={200} />
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
