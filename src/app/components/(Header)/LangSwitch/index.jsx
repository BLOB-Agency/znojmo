import React from "react";
import Link from "next-intl/link";
export default function LangSwitch({ isCzech }) {
  return (
    <div className={`justify-self-end text-black `}>
      <Link
        href="/"
        locale="en"
        className={`transition-all  ${!isCzech ? "text-primary" : ""}`}
      >
        EN
      </Link>
      {" / "}
      <Link
        href="/"
        locale="cs"
        className={`transition-all ${isCzech ? "text-primary" : ""}`}
      >
        CZ
      </Link>
    </div>
  );
}
