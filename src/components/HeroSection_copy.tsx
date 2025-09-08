'use client';

import React from "react";
import { motion } from "framer-motion";

// The FloatingPaths component for the animated background
interface PathData {
  id: number;
  d: string;
  color: string;
  width: number;
}

function FloatingPaths({ position }: { position: number }) {
  const paths: PathData[] = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-blue-500 dark:text-blue-400"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const HeroSection = () => {
  return (
    <>
      <section className="relative flex items-center justify-center min-h-screen px-6 py-12 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/image/all-in-one.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/30 dark:bg-neutral-950/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto max-w-4xl text-center pt-20">
          {/* Centered Content with Glass Effect */}
          <div className="relative z-10 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 animate-fadeInUp">
              All-in-One Platform for{' '}
              <span className="text-blue-600">Modern Education</span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-6 text-lg md:text-xl text-gray-900 dark:text-white animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
            >
              Six Core Modules. Infinite Possibilities.
            </p>

            {/* CTA Buttons */}
            {/* <div
              className="mt-8 flex flex-wrap justify-center gap-4 animate-fadeInUp"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="#"
                className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-2xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
              >
                Learn More
              </a>
            </div> */}
          </div>
          
        </div>
      </section>
      {/* <style jsx>{`
        .remove-white-bg {
          filter: brightness(1.1) contrast(1.1);
          mix-blend-mode: multiply;
        }
        @media (prefers-color-scheme: dark) {
          .remove-white-bg {
            filter: none;
            mix-blend-mode: normal;
          }
        }
      `}</style> */}
    </>
  );
};

export default HeroSection;
