"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({
  name,
  namePh,
  email,
  emailPh,
  message,
  messagePh,
  submitBtn,
}) {
  const form = useRef();
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    const formEl = form.current;
    if (!formEl.checkValidity()) {
      // Update state based on individual field validity
      setIsNameValid(formEl["user_name"].checkValidity());
      setIsEmailValid(formEl["user_email"].checkValidity());
      return;
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          formEl.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-[12px] ">
      <div className="flex flex-col gap-[5px] w-full">
        <label className="pl-[25px]">{name}</label>
        <input
          className={`bg-transparent border-[1.5px] border-black rounded-full px-[25px] py-[15px] focus:outline-primary transition-all duration-400 ${
            !isNameValid && "border-red-500 !important"
          }`}
          type="text"
          name="user_name"
          placeholder={namePh}
          required
          onChange={(e) => setIsNameValid(e.target.checkValidity())}
        />
      </div>
      <div className="flex flex-col gap-[5px] w-full">
        <label className="pl-[25px]">{email}</label>
        <input
          className={`bg-transparent border-[1.5px] border-black rounded-full px-[25px] py-[15px] outline-none focus:border-primary transition-all duration-400 ${
            !isEmailValid && "border-red-500 !important"
          }`}
          type="email"
          name="user_email"
          placeholder={emailPh}
          required
          pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]$"
          onChange={(e) => setIsEmailValid(e.target.checkValidity())}
        />
      </div>
      <div className="flex flex-col gap-[5px] w-full">
        <label className="pl-[25px]">{message}</label>
        <textarea
          className="min-h-[150px] bg-transparent border-[1.5px] border-black rounded-2xl px-[25px] py-[15px] outline-none focus:border-primary transition-all duration-400"
          name="message"
          placeholder={messagePh}
          required
          minLength={50}
        />
      </div>
      <input
        type="submit"
        className="cursor-pointer  font-extrabold text-white bg-primary px-[50px] py-[10px] w-fit rounded-full self-end transition-all duration-400 hover:scale-105 "
        value={submitBtn}
      />
    </form>
  );
}
