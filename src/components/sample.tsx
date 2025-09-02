import React from 'react';

const PlaneAnimation = () => {
  return (
    <>
      {/* The main container for the animation, setting up the full-screen layout */}
      <div className="bg-gradient-to-t from-[#adadff] to-[#5a5a57] min-h-screen relative overflow-hidden flex items-center justify-center">
        
        {/* The frame and plane container with their animations */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-30 flex items-center justify-center">
          <div className="w-[200px] animate-[plane-circular-flight_10s_ease-in-out_infinite]">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="1131.53px" height="379.304px" viewBox="0 0 1131.53 379.304"
              enableBackground="new 0 0 1131.53 379.304" xmlSpace="preserve" className="w-full h-[60px]">
              {/* Changed plane color to shades of blue */}
              <polygon fill="#3B82F6" points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223"/>
              <polygon fill="#2563EB" points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102"/>
            </svg>
          </div>
        </div>

        {/* Clouds layer with different sizes, speeds, and depths */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden translate-z-0">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
            height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331" xmlSpace="preserve"
            className="cloud front slowest top-[20%] right-0 opacity-1">
            <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
          </svg>
          
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
            height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331" xmlSpace="preserve"
            className="cloud distant smaller top-[20%] right-0 mt-[50px] mr-[400px] w-[100px]">
            <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
          </svg>

          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
            height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331" xmlSpace="preserve"
            className="cloud small slow top-[20%] right-0 mr-[200px] w-[150px]">
            <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
          </svg>
          
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
            height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331" xmlSpace="preserve"
            className="cloud distant super-slow massive top-[20%] right-0 mt-[20px] w-[600px]">
            <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
          </svg>
          
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
            height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331" xmlSpace="preserve"
            className="cloud slower top-[20%] right-0 opacity-1">
            <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
          </svg>
        </div>
      </div>
    
      <style jsx>{`
        /* The cloud animation keyframes */
        @keyframes cloud-movement {
          0% {
            opacity: 0.1;
            transform: translateX(300px);
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0;
          }
          100% {
            opacity: 0;
            transform: translateX(-1000px);
          }
        }
        
        /* Apply the animation to the cloud elements with different durations */
        .cloud {
          animation-name: cloud-movement;
          animation-timing-function: linear;
          animation-direction: forwards;
          animation-iteration-count: infinite;
          animation-duration: 8s;
        }
        .cloud.slow { animation-duration: 9.2s; }
        .cloud.slower { animation-duration: 11.2s; }
        .cloud.slowest { animation-duration: 13.5s; }
        .cloud.super-slow { animation-duration: 20.5s; }

        /* Keyframes for the new circular flight animation for the plane */
        @keyframes plane-circular-flight {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(150px, -100px) rotate(15deg);
          }
          50% {
            transform: translate(300px, 0) rotate(0deg);
          }
          75% {
            transform: translate(150px, 100px) rotate(-15deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </>
  );
};

export default PlaneAnimation;
