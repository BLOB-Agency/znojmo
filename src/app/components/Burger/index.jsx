"use client";
import React from "react";

export default function Burger({ toggleMenu, isMenuOpen }) {
  // Let's make a burger menu with three lines

  return (
    <button
      className={`w-[40px] flex flex-col gap-[7px] relative`}
      onClick={toggleMenu}
    >
      <span
        className={`w-full rounded-full transition-all backdrop-invert ${
          isMenuOpen
            ? "absolute self-center -rotate-45 h-[3px] bg-black"
            : "h-[2px]"
        }`}
      ></span>
      <span
        className={`w-full h-[2px] rounded-full transition-all backdrop-invert ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`w-full rounded-full transition-all backdrop-invert ${
          isMenuOpen
            ? "absolute self-center rotate-45 h-[3px] bg-black"
            : "h-[2px]"
        }`}
      ></span>
    </button>
  );
}
