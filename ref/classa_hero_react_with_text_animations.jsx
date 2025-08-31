import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Hero section with glassy white card, pastel blue blur spots,
 * and split-letter easing animation for the rotating line.
 * Pure JS (no TS types) for compatibility.
 */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

function Button({ children, variant = "primary" }) {
  return (
    <button
      className={[
        "rounded-xl px-6 py-3 text-base font-medium transition inline-flex items-center justify-center shadow-sm",
        variant === "primary"
          ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700"
          : "bg-white/80 text-gray-900 ring-1 ring-black/10 hover:bg-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

const ease = [0.16, 1, 0.3, 1];

function SplitText({ text, className = "" }) {
  const chars = useMemo(() => text.split("").map((c) => (c === " " ? "\u00A0" : c)), [text]);
  const container = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.02 } },
    exit: { opacity: 0, transition: { staggerChildren: 0.015, staggerDirection: -1 } },
  };
  const child = {
    initial: { y: 24, opacity: 0, rotateX: 25 },
    animate: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.6, ease } },
    exit: { y: -24, opacity: 0, rotateX: -15, transition: { duration: 0.35, ease } },
  };
  return (
    <motion.span
      className={["block text-5xl font-semibold", className].join(" ")}
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {chars.map((c, i) => (
        <motion.span key={`${c}-${i}`} className="inline-block will-change-transform" variants={child}>
          {c}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function HeroSection() {
  const highlightedContent = [
    "Adaptive Learning",
    "Empowered Teaching",
    "Intelligent Management",
    "Seamless Administration",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % highlightedContent.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#f6f8fb] p-6">
      {/* Subtle page gradient tint */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6f8fb] via-white to-[#f6f8fb]" />
      </div>

      {/* Center glass card */}
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-12 shadow-[0_20px_80px_rgba(30,64,175,0.08)] backdrop-blur-xl">
        {/* animated blur spots */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-28 -top-24 h-[420px] w-[420px] rounded-full bg-sky-300/28 blur-3xl animate-float-slow" />
          <div className="absolute right-[-120px] top-14 h-[420px] w-[420px] rounded-full bg-cyan-300/24 blur-3xl animate-float-slower" />
          <div className="absolute bottom-[-140px] left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-200/24 blur-3xl animate-pulse-soft" />
        </div>

        <motion.h1
          {...fadeUp(0.05)}
          className="mx-4 text-center text-[44px] font-extrabold leading-tight tracking-tight text-slate-900"
          style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
          Empowering Institutions with
        </motion.h1>

        <div className="mt-1 text-center">
          <AnimatePresence mode="wait">
            <SplitText
              key={index}
              text={highlightedContent[index]}
              className="bg-gradient-to-r from-sky-500 via-sky-400 to-blue-400 text-transparent bg-clip-text"
            />
          </AnimatePresence>
        </div>

        <motion.p
          {...fadeUp(0.25)}
          className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600"
          style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
          A next-generation EdTech ecosystem that seamlessly integrates smart classrooms, institutional management,
          and data-driven insights to elevate learning outcomes.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="mt-10 flex justify-center gap-4">
          <Button variant="primary">Book a Demo</Button>
          <Button variant="secondary">Explore Modules</Button>
        </motion.div>
      </div>

      {/* keyframes for floating/pulsing spots */}
      <style>{`
        @keyframes float-slow { 0%{ transform: translateY(0) } 50%{ transform: translateY(-10px) } 100%{ transform: translateY(0) } }
        @keyframes float-slower { 0%{ transform: translateY(0) } 50%{ transform: translateY(12px) } 100%{ transform: translateY(0) } }
        @keyframes pulse-soft { 0%,100%{ opacity: .5 } 50%{ opacity: .8 } }
        .animate-float-slow{ animation: float-slow 12s ease-in-out infinite; }
        .animate-float-slower{ animation: float-slower 16s ease-in-out infinite; }
        .animate-pulse-soft{ animation: pulse-soft 10s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
