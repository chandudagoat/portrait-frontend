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

    var tl = gsap.timeline();

    gsap.to(".box1", {
      y: -30,
      duration: 1,
      ease: "sine.inOut",
    });

    gsap.to(".box2", {
      y: -30,
      duration: 1,
      ease: "sine.inOut",
    });

    gsap.to(".box3", {
      y: -30,
      duration: 1,
      ease: "sine.inOut",
    });

    gsap.to(".box4", {
      y: -90,
      duration: 1,
      ease: "sine.inOut",
    });

    gsap.effects.fade(".box1", { duration: 1 });
    gsap.effects.fade(".box2", { duration: 1.5 });
    gsap.effects.fade(".box3", { duration: 2 });
    gsap.effects.fade(".box4", { duration: 5 });
  });
  return (
    <div className="bg-[#F3E9D2]">
      <Navbar />

      <div className="w-full h-1/2 flex items-center justify-around">
        <div>
          <h1 className="text-7xl text-[#114B57]">Link In Bio</h1>
          <h1 className="text-7xl text-[#114B57]">
            Made <span className="font-bold text-[#1A936F]">Right.</span>
          </h1>
        </div>
        <div className="inline-grid gap-4 grid-cols-2 bg-white p-24">
          <div className="opacity-0 box1 w-48 h-64 bg-[#88D498] rounded-md"></div>
          <div className="opacity-0 box3 w-48 h-48 bg-[#1A936F] rounded-md"></div>
          <div className="opacity-0 box2 w-48 h-48 bg-[#1A936F] rounded-md"></div>
          <div className="opacity-0 box4 w-48 h-64 bg-[#88D498] rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
