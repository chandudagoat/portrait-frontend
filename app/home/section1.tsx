"use client";
import { Input } from "@/components/ui/input";
import { FaAngleDown } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

export default function Section1() {
  useGSAP(() => {
    gsap.to(".text", { y: -200, duration: 1.5, ease: "bounce" });
    gsap.to(".claim", { y: -180, duration: 2, ease: "bounce" });

    gsap.to(".why-us", { y: -120, duration: 3, ease: "bounce" });

    var down_tween = gsap.to(".down", {
      y: 10,
      duration: 1.5,
      ease: "sine.inOut",
    });
    down_tween.yoyo(true).repeat(1000);
  });

  return (
    <div className="w-full h-1/2 flex items-center justify-center">
      <div className="w-1/3 flex flex-col ml-16">
        <div className="text mb-8">
          <h1 className="text-7xl text-[#114B57] mb-4">
            Link In{" "}
            <span className="underline decoration-dotted transition ease-in-out delay-150 hover:decoration-dashed">
              Bio
            </span>
            ,
          </h1>
          <div className="flex">
            <h1 className="text-7xl mr-4 text-[#114B57]">Made</h1>
            <span className="text-7xl font-bold text-[#1A936F] transition ease-in-out delay-150 hover:-translate-y-2">
              Right.
            </span>
          </div>
        </div>
        <form action="POST" className="claim">
          <div className="flex items-center mb-8">
            <label className="text-xl font-semibold mr-2 text-[#114B57]">
              portrait.me
            </label>
            <Input
              className="w-96 border-[#88D498] border-4 placeholder:font-semibold text-md"
              placeholder="/hclanka"
            />
          </div>
          <button
            type="submit"
            className="w-48 h-12 bg-[#88D498] rounded-md font-bold text-white transition ease-in-out delay-150 hover:text-[#F3E9D2] hover:bg-[#1A936F]"
          >
            Claim!
          </button>
        </form>
        <a href="/" className="why-us flex">
          <span className="font-bold text-md text-[#114B57]">Why Us?</span>
          <FaAngleDown className="down text-[#114B57]" />
        </a>
      </div>
      <div className="inline-grid gap-4 grid-cols-3 p-24">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          whileHover={{ y: -10 }}
          className="w-48 h-96 bg-[#88D498] rounded-md"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileHover={{ y: -10 }}
          className="w-48 h-48 bg-[#1A936F] rounded-md"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          whileHover={{ y: -10 }}
          className="w-48 h-96 bg-[#88D498] rounded-md"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.4,
          }}
          whileHover={{ y: -10 }}
          className="w-48 h-48 bg-[#1A936F] rounded-md"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: -190 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
          whileHover={{ y: -200 }}
          className="w-48 h-96 bg-[#88D498] rounded-md"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.6,
          }}
          whileHover={{ y: -10 }}
          className="w-48 h-48 bg-[#1A936F] rounded-md"
        ></motion.div>
      </div>
    </div>
  );
}
