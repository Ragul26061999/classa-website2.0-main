"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  hideNavbar?: boolean;
}

const rotatingTexts = [
  { text: "Adaptive Learning", image: "/adaptive.png", color: "#007DC6" },
  { text: "Empowered Teaching", image: "/empowerd.png", color: "#F29553" },
  { text: "Intelligent Management", image: "/intelligent.png", color: "#EDC531" },
  { text: "Seamless Administration", image: "/seamless.png", color: "#db2777" },
];

export default function HeroSection({ hideNavbar = false }: HeroSectionProps) {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState("");

  useEffect(() => {
    if (contentRef.current) {
      const { offsetWidth: w, offsetHeight: h } = contentRef.current;
      setPath(`M 0 0 H ${w} V ${h} H 0 Z`);
    }
  }, []);

  useEffect(() => {
    if (!hideNavbar || !heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarHidden(entry.intersectionRatio < 1);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 1]
      }
    );

    observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [hideNavbar]);

  useEffect(() => {
    if (hideNavbar) {
      document.body.style.setProperty('--navbar-hidden', isNavbarHidden ? '0' : '-100%');
    }
  }, [isNavbarHidden, hideNavbar]);
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
      ref={heroRef}
      className={`relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black text-white ${hideNavbar ? 'pt-0' : 'pt-16 md:pt-0'}`}
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
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6">
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
            className="object-contain"
          />
        </motion.div>
        </motion.div>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Empowering Institutions with{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingTexts[index].text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="block mt-2 sm:mt-3 md:mt-4"
                style={{ color: rotatingTexts[index].color }}
              >
                {rotatingTexts[index].text}
              </motion.span>
            </AnimatePresence>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2 sm:px-0">
            A Next-Gen Edtech ecosystem integrating smart classrooms,
            institutional management, and data-driven insights to elevate learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button 
              onClick={() => router.push('/#contact')}
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition text-sm sm:text-base"
            >
              Book a Demo
            </button>
            <button 
              onClick={() => router.push('/classa')}
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition text-sm sm:text-base"
            >
              Explore the Module
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
