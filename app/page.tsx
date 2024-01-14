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

    gsap.to(".box", {
      y: -30,
      duration: 2,
      ease: "sine.inOut",
    });
    gsap.effects.fade(".box");
  });
  return (
    <div className="bg-[#F3E9D2]">
      <Navbar />

      <div className="opacity-0 box w-16 h-16 bg-red-900 rounded-md"></div>
    </div>
  );
}
