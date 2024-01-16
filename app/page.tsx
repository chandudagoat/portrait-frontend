"use client";
import Navbar from "@/components/navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Input } from "@/components/ui/input";
import { FaAngleDown } from "react-icons/fa";

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
      duration: 1,
      ease: "bounce",
    });

    gsap.to(".box2", {
      y: -30,
      duration: 1.5,
      ease: "bounce",
    });

    gsap.to(".box3", {
      y: -30,
      duration: 2,
      ease: "bounce",
    });

    gsap.to(".box4", {
      y: -90,
      duration: 1,
      ease: "bounce",
    });

    gsap.to(".text", { y: -120, duration: 1.5, ease: "bounce" });
    gsap.to(".claim", { y: -110, duration: 2, ease: "bounce" });

    gsap.to(".why-us", { y: -70, duration: 3, ease: "bounce" });

    var down_tween = gsap.to(".down", {
      y: 10,
      duration: 1.5,
      ease: "sine.inOut",
    });
    down_tween.yoyo(true).repeat(1000);
  });
  return (
    <div className="bg-[#F3E9D2]">
      <Navbar />

      <div className="w-full h-1/2 flex items-center justify-center">
        <div className="w-1/3 flex flex-col ml-48">
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
              <label className="text-xl font-bold mr-2 text-[#114B57]">
                portrait.me/
              </label>
              <Input
                className="w-96 border-[#88D498] border-4 placeholder:font-bold text-lg"
                placeholder="hclanka"
              />
            </div>
            <button
              type="submit"
              className="w-48 h-12 bg-[#88D498] rounded-md font-bold text-white transition ease-in-out delay-150 hover:text-[#F3E9D2] hover:bg-[#1A936F]"
            >
              Claim!
            </button>
          </form>
          <a href="/" className="why-us">
            <span className="font-bold text-md text-[#114B57]">Why Us?</span>
            <FaAngleDown className="down text-[#114B57]" />
          </a>
        </div>
        <div className="inline-grid gap-4 grid-cols-2 p-24 mr-28">
          <div className="box1 w-48 h-64 bg-[#88D498] rounded-md"></div>
          <div className="box3 w-48 h-48 bg-[#1A936F] rounded-md"></div>
          <div className="box2 w-48 h-48 bg-[#1A936F] rounded-md"></div>
          <div className="box4 w-48 h-64 bg-[#88D498] rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
