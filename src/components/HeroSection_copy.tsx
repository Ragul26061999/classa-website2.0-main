'use client';

import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex items-center min-h-screen px-6 py-12 md:py-24 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div className="relative z-10 max-w-2xl text-left">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 animate-fadeInUp">
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
              className="mt-8 flex flex-wrap gap-4 animate-fadeInUp"
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

          {/* Right Column - Image */}
          <div className="relative z-10 w-full max-w-xl animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <img
              src="/image/Excited_3D_Cartoon_Character_with_Laptop_Png_-_3000x3000_1-removebg-preview.png"
              alt="Excited student with laptop"
              className="w-full h-auto rounded-2xl "
            />
          </div>
          
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
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
