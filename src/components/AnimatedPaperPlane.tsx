'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPaperPlane = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dotted Trail Path */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50 200 Q200 100, 400 150 T750 200"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="8,12"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.6,
            strokeDashoffset: [0, -40]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, delay: 0.5 },
            strokeDashoffset: {
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      </svg>

      {/* Paper Plane */}
      <motion.div
        className="absolute"
        initial={{ x: -100, y: 200 }}
        animate={{
          x: [50, 200, 400, 600, 750],
          y: [200, 100, 150, 120, 200],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      >
        {/* Paper Plane SVG */}
        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: [0, -10, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M2 12L22 2L15 12L22 22L2 12Z"
            fill="#3B82F6"
            stroke="#1E40AF"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M15 12L9 16"
            stroke="#1E40AF"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-sky-400 rounded-full"
          initial={{ 
            x: Math.random() * 800, 
            y: Math.random() * 400,
            opacity: 0 
          }}
          animate={{
            x: Math.random() * 800,
            y: Math.random() * 400,
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedPaperPlane;
