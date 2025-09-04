import React from 'react';
import { motion } from 'framer-motion';

const PastelDoodles = () => {
  const shapes = [
    // Top left corner
    {
      id: 1,
      d: 'M30,50 Q50,30 70,50 T90,90 Z',
      fill: 'url(#gradient1)',
      initial: { x: -100, y: -100, rotate: -15 },
      animate: { x: 0, y: 0, rotate: 0 },
      transition: { duration: 1, delay: 0.2 }
    },
    // Top right corner
    {
      id: 2,
      d: 'M200,30 Q180,10 160,30 T140,70 Z',
      fill: 'url(#gradient2)',
      initial: { x: 100, y: -100, rotate: 15 },
      animate: { x: 0, y: 0, rotate: 0 },
      transition: { duration: 1, delay: 0.4 }
    },
    // Bottom left corner
    {
      id: 3,
      d: 'M50,200 Q30,180 50,160 T90,140 Z',
      fill: 'url(#gradient3)',
      initial: { x: -100, y: 100, rotate: -15 },
      animate: { x: 0, y: 0, rotate: 0 },
      transition: { duration: 1, delay: 0.3 }
    },
    // Bottom right corner
    {
      id: 4,
      d: 'M250,250 Q230,230 210,250 T190,290 Z',
      fill: 'url(#gradient4)',
      initial: { x: 100, y: 100, rotate: 15 },
      animate: { x: 0, y: 0, rotate: 0 },
      transition: { duration: 1, delay: 0.5 }
    },
    // Center elements
    {
      id: 5,
      d: 'M150,150 Q130,130 110,150 T90,190 Z',
      fill: 'url(#gradient5)',
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 0.3 },
      transition: { duration: 1.5, delay: 0.6, type: 'spring' }
    }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 300"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#86efac" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a5f3fc" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fca5a5" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient5" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {shapes.map((shape) => (
          <motion.path
            key={shape.id}
            d={shape.d}
            fill={shape.fill}
            initial={shape.initial}
            animate={shape.animate}
            transition={shape.transition}
          />
        ))}
      </svg>
    </div>
  );
};

export default PastelDoodles;