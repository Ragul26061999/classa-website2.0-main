"use client";

import React from "react";

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-gradient-to-b from-neutral-700 to-indigo-200 overflow-hidden">
      {/* Plane */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-48 animate-plane-bounce z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1131.53 379.304"
          className="w-full h-16 animate-plane-rotate"
        >
          <polygon
            fill="#D8D8D8"
            points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223"
          />
          <polygon
            fill="#C4C4C3"
            points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102"
          />
        </svg>
      </div>

      {/* Clouds */}
      <div className="absolute inset-0 overflow-hidden">
        <Cloud className="w-[500px] top-1/4 right-10 animate-cloud-slowest z-20" />
        <Cloud className="w-[150px] top-1/3 right-1/2 animate-cloud-slow z-10" />
        <Cloud className="w-[600px] top-10 right-0 animate-cloud-super z-0" />
        <Cloud className="w-[300px] top-1/2 right-20 animate-cloud-slower z-5" />
      </div>
    </main>
  );
}

function Cloud({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 762 331"
      className={`absolute opacity-80 ${className}`}
    >
      <path
        fill="#FFFFFF"
        d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16
        c0-58.542-47.458-106-106-106c-8.198,0-16.178,0.932-23.841,2.693
        C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
        C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607
        C20.866,228,0,251.058,0,279.5S20.866,331,46.607,331h668.787
        C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
      />
    </svg>
  );
}
