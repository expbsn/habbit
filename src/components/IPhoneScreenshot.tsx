"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function IPhoneScreenshot() {
  // Outer wrapper handles scroll-driven translateX + rotate
  const scrollDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const progress = Math.min(window.scrollY / 350, 1);
      const slideX  = progress * -150;
      const rotate  = 5 - progress * 5;
      const opacity = 1 - progress * 0.45;

      if (scrollDivRef.current) {
        scrollDivRef.current.style.transform =
          `translateX(${slideX}px) rotate(${rotate}deg)`;
        scrollDivRef.current.style.opacity = String(opacity);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Set initial state
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="phone-stage">

      {/* Friends tab — scroll transform on outer, CSS float on inner */}
      <div
        ref={scrollDivRef}
        className="absolute"
        style={{
          right: "-5px",
          top: "100px",
          zIndex: 1,
          transform: "translateX(0px) rotate(5deg)",
          willChange: "transform, opacity",
        }}
      >
        <div className="animate-float-slow-y">
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
      </div>

      {/* Main phone — CSS float, hover scale */}
      <div
        className="absolute animate-float"
        style={{ left: 0, top: 0, zIndex: 2, willChange: "transform" }}
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
