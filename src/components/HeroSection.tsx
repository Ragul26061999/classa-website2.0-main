"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const rotatingTexts = [
  { text: "Adaptive Learning", image: "/adaptive.png", color: "#007DC6", opacity: 0.8 },
  { text: "Empowered Teaching", image: "/empowerd.png", color: "#F29553", opacity: 0.8 },
  { text: "Intelligent Management", image: "/intelligent.png", color: "#EDC531", opacity: 0.8 },
  { text: "Seamless Administration", image: "/seamless.png", color: "#db2777", opacity: 0.8 },
];

export default function HeroSection() {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState("");

  useEffect(() => {
    if (contentRef.current) {
      const { offsetWidth: w, offsetHeight: h } = contentRef.current;
      setPath(`M 0 0 H ${w} V ${h} H 0 Z`);
    }
  }, []);

  const [index, setIndex] = useState(0);

  // Rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black text-white"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={rotatingTexts[index].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={rotatingTexts[index].image}
              alt={rotatingTexts[index].text}
              fill
              className="object-cover"
              style={{ opacity: rotatingTexts[index].opacity }}
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center pt-12 md:pt-20 px-4 sm:px-6 border border-transparent">
        <div className="hidden md:block">
          <motion.div
            className="absolute"
            style={{
              width: 44,
              height: 44,
              offsetPath: path ? `path('${path}')` : undefined,
            }}
            animate={{
              offsetDistance: "100%",
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Image
                src="/image/stars.png"
                alt="stars"
                width={48}
                height={48}
                className="object-contain -mt-5"
              />
            </motion.div>
          </motion.div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empowering Institutions with{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingTexts[index].text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="block"
              style={{ color: rotatingTexts[index].color }}
            >
              {rotatingTexts[index].text}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-8">
          A Next-Gen Edtech ecosystem integrating smart classrooms,
          institutional management, and data-driven insights to elevate learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button 
            onClick={() => router.push('/#contact')}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition"
          >
            Book a Demo
          </button>
          <button 
            onClick={() => router.push('/classa')}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition"
          >
            Explore the Module
          </button>
        </div>
      </div>
    </section>
  );
}
