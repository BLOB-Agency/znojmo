import React from "react";
import Link from "next-intl/link";
export default function LangSwitch({ isCzech }) {
  return (
    <div className={`justify-self-end text-primary `}>
      <Link
        href="/"
        locale="en"
        className={`transition-all text-[20px]  ${!isCzech ? "text-primary" : ""}`}
      >
        🇬🇧
      </Link>
      {" / "}
      <Link
        href="/"
        locale="cs"
        className={`transition-all text-[20px] ${isCzech ? "text-primary" : ""}`}
      >
        🇨🇿
      </Link>
    </div>
  );
}
