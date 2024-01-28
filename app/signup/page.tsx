"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import twitter from "@/app/twitter.png";
import youtube from "@/app/youtube.png";
import github from "@/app/github.png";

const SignUp = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-around">
      <div className="mt-12 flex w-2/3">
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
          className="w-1/3"
        >
          <Image src={youtube} alt="youtube" className="w-5/6 -rotate-12" />
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
          className="w-1/3"
        >
          <Image src={twitter} alt="twitter" className="w-5/6" />
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -15 }}
          transition={{
            type: "tween",
            duration: 3,
            delay: 2,
            stiffness: 260,
            damping: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-1/3"
        >
          <Image src={github} alt="github" className="w-5/6 rotate-12" />
        </motion.div>
      </div>
      <form
        action="POST"
        className="flex w-1/3 flex-col items-end rounded-md bg-white px-12 py-16"
      >
        <div className="mb-4 flex w-full items-center justify-around">
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
          className="h-14 w-full rounded-md bg-[#88D498] font-bold text-white transition delay-150 ease-in-out hover:bg-[#1A936F] hover:text-[#F3E9D2]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
