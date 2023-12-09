import React from "react";
import Link from "next-intl/link";
export default function LangSwitch({ isEnglish }) {
  return (
    <div className={`justify-self-end text-primary `}>
      <Link
        href="/"
        locale="cs"
        className={`transition-all text-[20px]  ${
          !isEnglish ? "text-primary" : ""
        }`}
      >
        🇨🇿
      </Link>
      {" / "}
      <Link
        href="/"
        locale="en"
        className={`transition-all text-[20px] ${
          isEnglish ? "text-primary" : ""
        }`}
      >
        🇬🇧
      </Link>
    </div>
  );
}
