'use client';

import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex items-center min-h-[90vh] sm:min-h-screen w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Column - Text Content */}
            <div className="relative z-10 w-full lg:max-w-2xl text-center lg:text-left">
              {/* Title */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                All-in-One Platform for{' '}
                <span className="text-blue-600">Modern Education</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600">
                Six Core Modules. Infinite Possibilities.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                  aria-label="Get started with CLASSA"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base"
                  aria-label="Learn more about our features"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative z-10 w-full max-w-md lg:max-w-xl mt-8 lg:mt-0">
              <div className="relative w-full aspect-square md:aspect-video lg:aspect-square">
                <img
                  src="/image/Excited_3D_Cartoon_Character_with_Laptop_Png_-_3000x3000_1-removebg-preview.png"
                  alt="Excited student with laptop"
                  className="w-full h-full object-contain object-center"
                  loading="eager"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
          
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
