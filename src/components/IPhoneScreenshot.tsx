"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function IPhoneScreenshot() {
  const friendsRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      {/* ── Mobile: single phone, smaller, centred ── */}
      <div className="lg:hidden flex justify-center py-4">
        <Image
          src="/iphone_home.webp"
          alt="Habbit app home screen"
          width={200}
          height={413}
          className="drop-shadow-xl animate-float"
          style={{ width: "200px", height: "auto" }}
          sizes="200px"
          priority
        />
      </div>

      {/* ── Desktop: two-phone stacked layout ── */}
      <div
        className="hidden lg:flex relative items-center justify-center"
        style={{ minHeight: "620px", width: "380px" }}
      >
        {/* Friends tab — scroll-driven via rAF */}
        <div
          ref={friendsRef}
          className="absolute"
          style={{ right: "-5px", top: "100px", zIndex: 1 }}
        >
          <Image
            src="/iphone_friends.webp"
            alt="Habbit friends tab"
            width={220}
            height={454}
            className="drop-shadow-xl"
            style={{ width: "220px", height: "auto", opacity: 0.88 }}
            sizes="220px"
          />
        </div>

        {/* Main phone */}
        <div
          className="absolute animate-float"
          style={{ left: "0px", top: "0px", zIndex: 2 }}
        >
          <Image
            src="/iphone_home.webp"
            alt="Habbit app home screen"
            width={280}
            height={578}
            className="drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            style={{ width: "280px", height: "auto" }}
            sizes="280px"
            priority
          />
        </div>
      </div>
    </>
  );
}
