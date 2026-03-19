"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function IPhoneScreenshot() {
  const friendsRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Scale everything down on smaller screens
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setScale(0.62);
      else if (w < 768) setScale(0.72);
      else if (w < 1024) setScale(0.85);
      else setScale(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // rAF loop: float + scroll fold-in for friends tab
  useEffect(() => {
    let rafId: number;
    const loop = (time: number) => {
      const floatY = Math.sin((time / 8000) * Math.PI * 2) * -8;
      const progress = Math.min(window.scrollY / 350, 1);
      const slideX = progress * -150;
      const rotate = 5 - progress * 5;
      const opacity = 1 - progress * 0.45;

      if (friendsRef.current) {
        friendsRef.current.style.transform =
          `translateX(${slideX}px) rotate(${rotate}deg) translateY(${floatY}px)`;
        friendsRef.current.style.opacity = String(opacity);
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const mainW  = Math.round(280 * scale);
  const friendW = Math.round(220 * scale);
  const containerW = Math.round(380 * scale);
  const containerH = Math.round(620 * scale);
  const friendRight = Math.round(-5 * scale);
  const friendTop   = Math.round(100 * scale);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: `${containerW}px`, minHeight: `${containerH}px` }}
    >
      {/* Friends tab */}
      <div
        ref={friendsRef}
        className="absolute"
        style={{ right: `${friendRight}px`, top: `${friendTop}px`, zIndex: 1 }}
      >
        <Image
          src="/iphone_friends.webp"
          alt="Habbit friends tab"
          width={220}
          height={454}
          className="drop-shadow-xl"
          style={{ width: `${friendW}px`, height: "auto", opacity: 0.88 }}
          sizes={`${friendW}px`}
        />
      </div>

      {/* Main phone */}
      <div
        className="absolute animate-float"
        style={{ left: 0, top: 0, zIndex: 2 }}
      >
        <Image
          src="/iphone_home.webp"
          alt="Habbit app home screen"
          width={280}
          height={578}
          className="drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          style={{ width: `${mainW}px`, height: "auto" }}
          sizes={`${mainW}px`}
          priority
        />
      </div>
    </div>
  );
}
