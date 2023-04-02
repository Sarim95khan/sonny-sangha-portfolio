"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Yahya Khan",
      "Chemical Engineer",
      "a Developer",
      "& an Artist!",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8">
      <BackgroundCircles />
      <Image
        className=" relative rounded-full object-cover"
        src="/images/Sarim.jpeg"
        width={128}
        height={128}
        alt="Sarim"
      />
      <div className="z-20">
        <h1 className="text-sm  uppercase text-gray-500 tracking-[5px]">
          Chemical Engineer
        </h1>
        <h2 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h2>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">about</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">skills</button>
          </Link>
          <Link href="#project">
            <button className="heroButton">Project"</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
