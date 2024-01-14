"use client";
import Navbar from "@/components/navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    gsap.registerEffect({
      name: "fade",
      effect: (target: string, config: any) => {
        return gsap.to(target, { duration: config.duration, opacity: 1 });
      },
      defaults: {
        duration: 2,
      },
      extendTimeline: true,
    });

    gsap.to(".box1", {
      y: -30,
      duration: 2,
      ease: "sine.inOut",
    });
    gsap.to(".box2", {
      y: -30,
      duration: 2.5,
      ease: "sine.inOut",
    });
    gsap.to(".box3", {
      y: -30,
      duration: 3,
      ease: "sine.inOut",
    });
    gsap.to(".box4", {
      y: -30,
      duration: 3.5,
      ease: "sine.inOut",
    });

    gsap.effects.fade(".box1", { duration: 1 });
    gsap.effects.fade(".box2", { duration: 1.5 });
    gsap.effects.fade(".box3", { duration: 2 });
    gsap.effects.fade(".box4", { duration: 2.5 });
  });
  return (
    <div className="bg-[#F3E9D2]">
      <Navbar />

      <div className="w-80 grid gap-4 grid-cols-2 grid-rows-2 bg-white p-20">
        <div className="opacity-0 box1 w-16 h-16 bg-red-700 rounded-md"></div>
        <div className="opacity-0 box2 w-16 h-16 bg-green-700 rounded-md"></div>
        <div className="opacity-0 box3 w-16 h-16 bg-blue-700 rounded-md"></div>
        <div className="opacity-0 box4 w-16 h-16 bg-pink-700 rounded-md"></div>
      </div>
    </div>
  );
}
