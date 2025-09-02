import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const AnimatedRocketHero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Animated Rocket Hero</title>
        <meta name="description" content="Animated Rocket Hero Section" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style jsx global>{`
        /* Custom animation for the paper plane for smoother looping */
        #paper-plane-group,
        #paper-plane-group-2,
        #paper-plane-group-3 {
          /* The SVG path starts at x=-50. We initially position the plane there. */
          transform: translateX(-50px);
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden w-full min-h-screen flex items-center justify-center p-6">
        {/* Background SVG Animation */}
        <div className="absolute inset-0 z-0 opacity-70">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
            {/* Plane 1: Original Path & Trail */}
            <path
              id="motionPath1"
              fill="none"
              stroke="none"
              d="M-50,450 C 250,250 550,550 850,450 S 1150,250 1490,400"
            />
            <path
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="2000"
              strokeDashoffset="2000"
              d="M-50,450 C 250,250 550,550 850,450 S 1150,250 1490,400"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="12s"
                repeatCount="indefinite"
                from="2000"
                to="0"
                calcMode="spline"
                keySplines="0.4, 0, 0.2, 1"
              />
            </path>
            <path
              fill="none"
              stroke="#94a3b8"
              strokeWidth="3"
              strokeDasharray="80 2000"
              strokeDashoffset="2080"
              d="M-50,450 C 250,250 550,550 850,450 S 1150,250 1490,400"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="12s"
                repeatCount="indefinite"
                from="2080"
                to="0"
                calcMode="spline"
                keySplines="0.4, 0, 0.2, 1"
              />
            </path>

            {/* Plane 2: New Path & Dashed Trail */}
            <path
              id="motionPath2"
              fill="none"
              stroke="none"
              d="M-50,750 C 300,500 600,200 900,300 S 1200,600 1490,500"
            />
            <path
              fill="none"
              stroke="#a5b4fc"
              strokeWidth="2"
              strokeDasharray="10 15 2000 2000"
              strokeDashoffset="4045"
              d="M-50,750 C 300,500 600,200 900,300 S 1200,600 1490,500"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="14s"
                begin="4s"
                repeatCount="indefinite"
                from="4045"
                to="0"
                calcMode="spline"
                keySplines="0.4, 0, 0.2, 1"
              />
            </path>

            {/* Plane 3: Another New Path & Thinner Trail */}
            <path
              id="motionPath3"
              fill="none"
              stroke="none"
              d="M-50,200 C 400,600 800,100 1490,300"
            />
            <path
              fill="none"
              stroke="#fca5a5"
              strokeWidth="1"
              strokeDasharray="2000"
              strokeDashoffset="2000"
              d="M-50,200 C 400,600 800,100 1490,300"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="10s"
                begin="2s"
                repeatCount="indefinite"
                from="2000"
                to="0"
                calcMode="spline"
                keySplines="0.4, 0, 0.2, 1"
              />
            </path>
            <path
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="60 2000"
              strokeDashoffset="2060"
              d="M-50,200 C 400,600 800,100 1490,300"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="10s"
                begin="2s"
                repeatCount="indefinite"
                from="2060"
                to="0"
                calcMode="spline"
                keySplines="0.4, 0, 0.2, 1"
              />
            </path>

            {/* Paper Plane 1 Group */}
            <g id="paper-plane-group" transform="scale(12)">
              <g id="paper-plane-1">
                <path
                  d="M2.2,16.5l19.5-8.5L2.2,0.1L2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z"
                  fill="#38bdf8"
                />
                <path
                  d="M2.2,16.5l19.5-8.5L2.2,0.1l0,0C2.2,0.1,2.2,7,2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z"
                  fill="#0ea5e9"
                />
              </g>
              <animateMotion
                dur="12s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.4, 0, 0.2, 1"
              >
                <mpath href="#motionPath1" />
              </animateMotion>
            </g>

            {/* Paper Plane 2 Group */}
            <g id="paper-plane-group-2" transform="scale(8)">
              <g id="paper-plane-2">
                <path
                  d="M2.2,16.5l19.5-8.5L2.2,0.1L2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z"
                  fill="#818cf8"
                />
                <path
                  d="M2.2,16.5l19.5-8.5L2.2,0.1l0,0C2.2,0.1,2.2,7,2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z"
                  fill="#6366f1"
                />
              </g>
              <animateMotion
                dur="14s"
                begin="4s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.4, 0, 0.2, 1"
              >
                <mpath href="#motionPath2" />
              </animateMotion>
            </g>

            {/* Paper Plane 3 Group */}
            <g id="paper-plane-group-3" transform="scale(10)">
              <g id="paper-plane-3">
                <path
                  d="M2.2,16.5l19.5-8.5L2.2,0.1L2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z"
                  fill="#f87171"
                />
                <path
                  d="M2.2,16.5l19.5-8.5L2.2,0.1l0,0C2.2,0.1,2.2,7,2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z"
                  fill="#dc2626"
                />
              </g>
              <animateMotion
                dur="10s"
                begin="2s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.4, 0, 0.2, 1"
              >
                <mpath href="#motionPath3" />
              </animateMotion>
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Propel Your Ideas Forward
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Our platform helps you launch your projects faster than ever before. Join us and watch your ideas take flight.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
};

export default AnimatedRocketHero;
