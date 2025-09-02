'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLayerGroup, 
  FaRobot, 
  FaMapMarkedAlt, 
  FaChartLine, 
  FaChalkboardTeacher, 
  FaUserFriends, 
  FaCloud,
  FaRocket
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';



function RotatingSpan({ text, color }: { text: string; color: string }) {
  
  return (
    <div className="relative h-20 overflow-hidden flex items-center">
     
      <AnimatePresence mode="wait">
        <motion.div 
          key={text}
          className="flex space-x-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={`${text}-${index}`}
              className={`inline-block bg-gradient-to-r ${color} bg-clip-text text-transparent tracking-tight`}
              initial={{
                y: '100%',
                opacity: 0,
                scale: 0.8,
                filter: 'blur(8px)'
              }}
              animate={{
                y: '0%',
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)'
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
                ease: [0.2, 0.6, 0.3, 0.9]
              }}
              style={{
                display: 'inline-block',
                transformStyle: 'preserve-3d',
                transformOrigin: 'bottom center',
                backfaceVisibility: 'hidden',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const features = [
  {
    icon: <FaLayerGroup className="text-blue-500" />, 
    title: "All-in-One Platform", 
    description: "One login for learning, assessment, management, and communication."
  },
  {
    icon: <FaRobot className="text-purple-500" />,
    title: "AI That Works for You",
    description: "Our SENSAI assistant answers doubts, personalised learning, and automates tasks—24/7."
  },
  {
    icon: <FaMapMarkedAlt className="text-green-500" />,
    title: "Built for India",
    description: "Aligned with NEET, & NCERT. Local focus, global quality."
  },
  {
    icon: <FaChartLine className="text-pink-500" />,
    title: "Boost Results",
    description: "Improve academic scores by 20% with adaptive paths & real-time feedback."
  },
  {
    icon: <FaChalkboardTeacher className="text-yellow-500" />,
    title: "Teachers Love It",
    description: "Create tests in minutes, track performance instantly, and teach smarter—not harder."
  },
  {
    icon: <FaUserFriends className="text-cyan-500" />,
    title: "Parents Stay Connected",
    description: "Transparent progress reports and real-time updates, anytime, anywhere."
  },
  {
    icon: <FaCloud className="text-indigo-500" />,
    title: "Scalable & Secure",
    description: "Cloud-native, mobile-first, and enterprise-ready."
  },
];

// Animated Floating Button Component
const AnimatedFloatingButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  // Calculate button position based on scroll
  const buttonY = Math.min(scrollY * 0.1, 100);

  return (
    <motion.div
      ref={buttonRef}
      className="fixed bottom-6 right-6 z-50"
      style={{
        transform: `translateY(${buttonY}px)`,
      }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: 1, 
        rotate: 0,
        y: buttonY
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8
      }}
    >
      <motion.button
        onClick={handleClick}
        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white text-xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
        animate={isClicked ? {
          scale: [1, 1.5, 0.8, 1.2, 1],
          rotate: [0, 180, -90, 45, 0],
          boxShadow: [
            "0 10px 30px rgba(59, 130, 246, 0.5)",
            "0 20px 60px rgba(147, 51, 234, 0.8)",
            "0 30px 80px rgba(59, 130, 246, 0.6)",
            "0 15px 40px rgba(147, 51, 234, 0.4)",
            "0 10px 30px rgba(59, 130, 246, 0.5)"
          ]
        } : {}}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 15px 40px rgba(59, 130, 246, 0.6)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={isClicked ? {
            scale: [1, 2, 0.5, 1.5, 1],
            opacity: [1, 0.8, 0.3, 0.9, 1]
          } : {}}
          transition={{ duration: 0.6 }}
        >
          <FaRocket />
        </motion.div>
        
        {/* Burst particles */}
        {isClicked && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 1
                }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 40,
                  y: Math.sin((i * Math.PI * 2) / 8) * 40,
                  scale: [0, 1, 0],
                  opacity: [1, 0.8, 0]
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}
      </motion.button>
    </motion.div>
  );
};

function HomeContent() {
  const content = [
    { 
      text: "Adaptive Learning", 
      image: '/image/A1.jpeg',
      color: 'from-[#0ea5e9] to-[#0ea5e9]',
      gradient: 'bg-gradient-to-r from-[#0ea5e9] to-[#0ea5e9]'
    },
    { 
      text: "Empowered Teaching", 
      image: '/image/E1.jpeg',
      color: 'from-[#3b82f6] to-[#3b82f6]',
      gradient: 'bg-gradient-to-r from-[#3b82f6] to-[#3b82f6]'
    },
    { 
      text: "Intelligent Management", 
      image: '/image/I1.jpeg',
      color: 'from-[#6366f1] to-[#6366f1]',
      gradient: 'bg-gradient-to-r from-[#6366f1] to-[#6366f1]'
    },
    { 
      text: "Seamless Administration", 
      image: '/image/S1.jpeg',
      color: 'from-[#8b5cf6] to-[#8b5cf6]',
      gradient: 'bg-gradient-to-r from-[#8b5cf6] to-[#8b5cf6]'
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000); // Change content every 5 seconds
    return () => clearInterval(interval);
  }, []);
  const [onePlatformRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [offersRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [whyChooseClassARef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [contactUsRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="home" className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          style={{
            backgroundImage: `url(${content[activeIndex].image})`,
          }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-xl" />
      

      
      {/* Add padding to account for fixed header */}
      <div className="h-16 md:h-20"></div>
      
      {/* Hero Section */}
      <main className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-start max-w-7xl mx-auto w-full px-6 md:px-8 py-8 lg:py-12 gap-12 lg:gap-8 relative z-10 ml-5">
        {/* Left Side */}
        <div className="relative flex-1 flex flex-col items-start justify-center w-full max-w-4xl p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-blue-400/40 shadow-xl">
          <div className="mb-6 ">
            <span className="inline-block text-blue-400 text-3xl mr-2 align-middle animate-pulse -mt-25">✦</span>
          </div>
          <div className="mb-6">
            <h1 className="text-lg sm:text-2xl md:text-2xl lg:text-4xl font-bold leading-tight text-gray-900 -mt-15">
              <div className="flex flex-col items-start">
                <span className="font-stretch-125 text-xl sm:text-2xl md:text-3xl lg:text-5xl">Empowering Institutions with</span>
                <span className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl mt-2 leading-tight">                  <RotatingSpan text={content[activeIndex].text} color={content[activeIndex].color} />
                </span>
              </div>
            </h1>
          </div>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed ">
            A Next-Gen Edtech ecosystem integrating<br />
            smart classrooms, institutional management, and <br />
            data-driven insights to elevate learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-5">
            <motion.a 
              href="#contact" 
              className="relative px-8 py-3.5 rounded-full border-2 border-gray-900 bg-white text-gray-900 font-semibold flex items-center justify-center gap-2 overflow-hidden group"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transform: 'perspective(500px) rotateX(0deg)',
                  transformStyle: 'preserve-3d',
                }}
              />
              <motion.span 
                className="relative z-10 flex items-center gap-2 "
                whileHover={{ scale: 1.03 }}
              >
                Book a Demo
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.span>
            </motion.a>

            <motion.a 
              href="/classa#modules" 
              className="relative px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold flex items-center justify-center gap-2 overflow-hidden group"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <motion.span 
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transform: 'perspective(500px) rotateX(0deg)',
                  transformStyle: 'preserve-3d',
                }}
              />
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
              >
                Explore Modules
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.span>
              <motion.span 
                className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-full transition-all duration-300"
                style={{
                  transform: 'translateZ(10px)',
                  boxShadow: '0 10px 30px -10px rgb(27, 15, 241)'
                }}
              />
            </motion.a>
          </div>
        </div>
        
        {/* Right Side */}
        {/* <div className="flex-1 flex items-center justify-center relative h-[50vh] lg:h-[60vh] -mr-20">
          <img 
            src="/image/Blue_Orange_Objects__Education_Website.png" 
            alt="Education Platform" 
            className="w-full h-full object-contain"
          />
        </div> */}
      </main>
      
      {/* One Platform Section */}
      
    </div> 
  );
}


export default HomeContent;



