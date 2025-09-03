'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const HeroSection = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.VANTA && vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1e3a8a,
        backgroundColor: 0xf8fafc,
        points: 12.0,
        maxDistance: 25.0,
        spacing: 18.0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (vantaRef.current && window.VANTA && !vantaEffect.current) {
            vantaEffect.current = window.VANTA.NET({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x1e3a8a,
              backgroundColor: 0xf8fafc,
              points: 12.0,
              maxDistance: 25.0,
              spacing: 18.0,
            });
          }
        }}
      />
      
      <section
        ref={vantaRef}
        className="relative flex items-center justify-center min-h-screen text-center px-6"
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 animate-fadeInUp">
            All-in-One Platform for{' '}
            <span className="text-blue-600">Modern Education</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 text-lg md:text-xl text-gray-600 animate-fadeInUp"
            style={{ animationDelay: '0.3s' }}
          >
            Six Core Modules. Infinite Possibilities.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-8 flex justify-center gap-4 animate-fadeInUp"
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
          </div>
        </div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
