'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import FOG from 'vanta/dist/vanta.fog.min.js';
import * as THREE from 'three';

// Define the type for the Vanta.js effect
type VantaEffect = {
  destroy: () => void;
  setOptions: (options: { [key: string]: any }) => void;
  [key: string]: any;
};

const HeroSection = () => {
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void; setOptions: (options: { [key: string]: any }) => void } | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);


  // Vanta.js background effect with pastel colors
  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xFFFFFF,  // White
        midtoneColor: 0x818cf8,   // Very light blue (almost white)
        lowlightColor: 0xd8b4fe,  // Light blue
        baseColor: 0xFFFFFF,      // White      
        blurFactor: 0.80,
        speed: 1.50,
        zoom: 0.85
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);


  return (
    <section ref={vantaRef} id="home" className="relative flex min-h-screen items-center justify-center px-6 py-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h1 
          className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          All-in-One Platform for Modern Education
        </motion.h1>

        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-[15px] sm:text-base text-nayvblue-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Six Core Modules. Infinite Possibilities. <br />
          Manage, Learn, and Grow — all in one ecosystem.
        </motion.p>

        <motion.div 
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className="relative rounded-xl px-6 py-3 text-base font-medium transition inline-flex items-center justify-center shadow-sm bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 hover:scale-105 transform-gpu duration-300">
            Get Started <span className="ml-2">→</span>
          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        .vanta-canvas {
          filter: blur(2px);
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
