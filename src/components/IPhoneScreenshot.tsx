"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function IPhoneScreenshot() {
  const friendsRef = useRef<HTMLDivElement>(null);
  const scrollRef  = useRef(0);

  // Passive scroll listener → ref (no rAF involvement, no jank)
  useEffect(() => {
    const onScroll = () => { scrollRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // rAF loop: float + scroll fold-in, reads from ref
  useEffect(() => {
    let rafId: number;
    const loop = (time: number) => {
      const floatY   = Math.sin((time / 8000) * Math.PI * 2) * -8;
      const progress = Math.min(scrollRef.current / 350, 1);
      const slideX   = progress * -150; // in element's own coord space — auto-scales with CSS zoom
      const rotate   = 5 - progress * 5;
      const opacity  = 1 - progress * 0.45;

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
    // CSS zoom scales the whole stage + all children + all transforms uniformly
    <div className="phone-stage">
      {/* Friends tab */}
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
        style={{ left: 0, top: 0, zIndex: 2 }}
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
  );
}
