"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

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
      <h1>
        {text}
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
