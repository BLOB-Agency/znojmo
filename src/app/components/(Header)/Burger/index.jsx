"use client";
import React from "react";

export default function Burger({ toggleMenu, isMenuOpen }) {
  return (
    <button
      className={`w-[40px] flex flex-col gap-[7px] relative`}
      onClick={toggleMenu}
    >
      <span
        className={`w-full rounded-full transition-all bg-primary ${
          isMenuOpen ? "absolute self-center -rotate-45 h-[4px] " : "h-[4px]"
        }`}
      ></span>
      <span
        className={`w-full h-[4px] rounded-full transition-all  bg-primary ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`w-full rounded-full transition-all  bg-primary ${
          isMenuOpen ? "absolute self-center rotate-45 h-[4px] " : "h-[4px]"
        }`}
      ></span>
    </button>
  );
}
