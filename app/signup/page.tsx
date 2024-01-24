"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import twitter from "@/app/twitter.png";
import youtube from "@/app/youtube.png";
import github from "@/app/github.png";

const SignUp = () => {
  return (
    <div className="flex items-center justify-around h-screen w-full">
      <div className="w-1/3 mt-12">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -15 }}
          transition={{
            type: "tween",
            duration: 2,
            stiffness: 260,
            damping: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mb-8"
        >
          <Image src={youtube} alt="youtube" className="w-3/6 -rotate-12" />
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -15 }}
          transition={{
            type: "tween",
            duration: 2.5,
            delay: 1,
            stiffness: 260,
            damping: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mb-8"
        >
          <Image
            src={twitter}
            alt="twitter"
            className="ml-32 w-3/6 rotate-12"
          />
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -15 }}
          transition={{
            type: "tween",
            duration: 3,
            delay: 1,
            stiffness: 260,
            damping: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mb-8"
        >
          <Image src={github} alt="github" className="w-3/6 -rotate-12" />
        </motion.div>
      </div>
      <form
        action="POST"
        className="bg-white px-12 py-16 rounded-md w-1/3 w-1/3 flex flex-col items-end"
      >
        <div className="w-full flex items-center justify-around mb-4">
          <div className="mr-2">
            <label htmlFor="">Email</label>
            <Input type="email" placeholder="email" className="w-56" />
          </div>
          <div>
            <label>Password</label>
            <Input type="password" placeholder="password" className="w-56" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-14 bg-[#88D498] rounded-md font-bold text-white transition ease-in-out delay-150 hover:text-[#F3E9D2] hover:bg-[#1A936F]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
