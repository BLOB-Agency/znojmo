"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function PartnerBanner() {
  const logos = [
    "logo-kfc.png",
    "logo-premium-hotel.png",
    "logo-znojmo.png",
    "nevoga_logo.png",
    "logo-ds-duma.png",
    "logo-starbuck.png",
  ];
  // Let's check if the window width is smaller than 640px
  // If it is we'll apply a class called trusted-by otherwise won't apply it.
  // We'll use this class to apply a different style to the container
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640);
    };

    // Initial check
    handleResize();

    // Set up event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      className={`absolute bg-white w-full md:w-[80%] sm:left-auto flex justify-self-center bottom-[-30px]  overflow-hidden  transition-all duration-400 `}
      style={
        isDesktop
          ? { clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }
          : {clipPath:"none"}
      }
    >
      <div className="z-[4] absolute bg-black w-fit text-center flex justify-center items-center p-[10px] pl:[24px] sm:pl-[50px] relative w-[200px] overflow-hidden">
        <h3 className="font-bold  ">TRUSTED BY</h3>
      </div>
      <div className=" flex w-[180px]  bg-white p-[10px]  pr-[50px] ">
        {" "}
        <div className="logo-container space-x-4 ">
          {Array.from({ length: 2 }).flatMap((_, repeatIndex) =>
            logos.map((logo, index) => (
              <div
                key={`${repeatIndex}-${index}`}
                className="logo-slide  relative w-[50px] h-[50px]"
              >
                <Image
                  src={`/images/${logo}`}
                  fill
                  priority
                  sizes={100}
                  alt="Logo Partner"
                  className="object-contain"
                />
              </div>
            ))
          )}
          {Array.from({ length: 2 }).flatMap((_, repeatIndex) =>
            logos.map((logo, index) => (
              <div
                key={`${repeatIndex}-${index}`}
                className="logo-slide  relative w-[50px] h-[50px]"
              >
                <Image
                  src={`/images/${logo}`}
                  fill
                  priority
                  sizes={100}
                  alt="Logo Partner"
                  className="object-contain"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
