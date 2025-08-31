'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, MonitorPlay, GraduationCap, BarChart3, Handshake, Computer, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    title: 'Online Classes',
    description: 'Live and interactive classes led by experienced teachers with flexible schedules, recorded sessions, and doubt-clearing support.',
    icon: <MonitorPlay className="w-10 h-10" />,
    gradient: 'from-blue-300 to-cyan-300',
    bgGradient: 'from-blue-100/80 to-cyan-100/80',
    shadowColor: 'shadow-blue-200/40',
  },
  {
    title: 'Mentorship & Guidance',
    description: 'One-on-one mentorship from subject experts to help students set learning goals, track progress, and stay motivated.',
    icon: <Users className="w-10 h-10" />,
    gradient: 'from-purple-300 to-pink-300',
    bgGradient: 'from-purple-100/80 to-pink-100/80',
    shadowColor: 'shadow-purple-200/40',
  },
  {
    title: 'Digital Study Materials',
    description: 'Access to structured notes, e-books, practice tests, and revision guides — available anytime, anywhere.',
    icon: <BookOpen className="w-10 h-10" />,
    gradient: 'from-green-300 to-emerald-300',
    bgGradient: 'from-green-100/80 to-emerald-100/80',
    shadowColor: 'shadow-green-200/40',
  },
  {
    title: 'Career Guidance',
    description: 'Personalized counseling to help students choose the right career path, prepare for competitive exams, and build future-ready skills.',
    icon: <GraduationCap className="w-10 h-10" />,
    gradient: 'from-orange-300 to-rose-300',
    bgGradient: 'from-orange-100/80 to-rose-100/80',
    shadowColor: 'shadow-orange-200/40',
  },
  {
    title: 'Tests & Assessments',
    description: 'Regular quizzes, mock exams, and performance reports to evaluate learning outcomes and strengthen weak areas.',
    icon: <BarChart3 className="w-10 h-10" />,
    gradient: 'from-indigo-300 to-violet-300',
    bgGradient: 'from-indigo-100/80 to-violet-100/80',
    shadowColor: 'shadow-indigo-200/40',
  },
  {
    title: 'Parent–Teacher Connect',
    description: 'Seamless communication between parents and teachers with updates on performance, attendance, and progress reports.',
    icon: <Handshake className="w-10 h-10" />,
    gradient: 'from-teal-300 to-cyan-300',
    bgGradient: 'from-teal-100/80 to-cyan-100/80',
    shadowColor: 'shadow-teal-200/40',
  },
  {
    title: 'Flexible Learning Platform',
    description: 'A user-friendly online platform accessible on mobile, tablet, and desktop with smooth navigation and secure login.',
    icon: <Computer className="w-10 h-10" />,
    gradient: 'from-violet-300 to-purple-300',
    bgGradient: 'from-violet-100/80 to-purple-100/80',
    shadowColor: 'shadow-violet-200/40',
  },
  {
    title: 'Peer Learning & Community',
    description: 'Discussion forums, group projects, and study groups to encourage collaboration and peer-to-peer learning.',
    icon: <MessageSquare className="w-10 h-10" />,
    gradient: 'from-pink-300 to-rose-300',
    bgGradient: 'from-pink-100/80 to-rose-100/80',
    shadowColor: 'shadow-pink-200/40',
  },
];

const HomeContent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardWidth = 320; // Width of card + gap
  const featuresCount = features.length;
  const scrollSpeed = 1.5;
  const scrollAmount = useRef(0);
  const isScrolling = useRef(false);
  const lastTimestamp = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const [particlePositions, setParticlePositions] = useState<Array<{
    left: number;
    top: number;
    animationDelay: number;
    animationDuration: number;
  }>>([]);

  // Generate particle positions once on mount
  useEffect(() => {
    const positions = Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 4,
      animationDuration: 4 + Math.random() * 3,
    }));
    setParticlePositions(positions);
  }, []);

  // Auto-scroll effect with requestAnimationFrame
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const getMaxScroll = () => {
      return scrollContainer.scrollWidth - scrollContainer.clientWidth;
    };

    const autoScroll = (timestamp: number) => {
      if (!lastTimestamp.current) lastTimestamp.current = timestamp;
      const deltaTime = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;
      
      if (isPaused || isScrolling.current || isManuallyPaused) {
        animationFrameId.current = requestAnimationFrame(autoScroll);
        return;
      }
      
      scrollAmount.current += scrollSpeed * (deltaTime / 16);
      const maxScroll = getMaxScroll();
      
      if (scrollAmount.current >= maxScroll) {
        scrollAmount.current = 0;
        scrollContainer.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        scrollContainer.scrollTo({
          left: scrollAmount.current,
          behavior: 'auto'
        });
      }
      
      // Update current card index
      const currentIndex = Math.round(scrollAmount.current / cardWidth) % featuresCount;
      setCurrentCardIndex(currentIndex >= 0 ? currentIndex : featuresCount + currentIndex);
      
      animationFrameId.current = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationFrameId.current = requestAnimationFrame(autoScroll);

    // Clean up
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isPaused, isManuallyPaused, featuresCount]);

  // Handle arrow button clicks with smooth card snapping
  const handleArrowClick = (direction: 'left' | 'right') => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isScrolling.current) return;

    // Cancel any ongoing animations
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    const containerWidth = scrollContainer.clientWidth;
    const scrollPosition = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - containerWidth;
    
    // Calculate card dimensions and spacing
    const cardOffset = 24; // space-x-6 = 1.5rem = 24px
    const cardTotalWidth = cardWidth + cardOffset;
    
    // Calculate target scroll position
    let targetScroll: number;
    let currentCard = Math.round(scrollPosition / cardTotalWidth);
    
    if (direction === 'right') {
      // Move to next card
      targetScroll = (currentCard + 1) * cardTotalWidth;
      // Loop to start if at the end
      if (targetScroll > maxScroll) {
        targetScroll = 0;
      }
    } else {
      // Move to previous card
      targetScroll = (currentCard - 1) * cardTotalWidth;
      // Loop to end if at the start
      if (targetScroll < 0) {
        targetScroll = maxScroll - (maxScroll % cardTotalWidth);
      }
    }
    
    // Clamp the target scroll position
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    
    // If we're already at the target, do nothing
    if (Math.abs(targetScroll - scrollPosition) < 1) {
      isScrolling.current = false;
      return;
    }
    
    // Set up animation
    isScrolling.current = true;
    const startTime = performance.now();
    const startPosition = scrollPosition;
    const distance = targetScroll - startPosition;
    const duration = 500; // Slightly longer duration for smoother animation
    
    // Spring animation function
    const spring = (t: number) => {
      const damping = 0.6; // Controls bounciness (0-1)
      const stiffness = 0.2; // Controls speed (0-1)
      return 1 - Math.exp(-stiffness * t) * Math.cos(damping * t);
    };
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      let progress = Math.min(elapsed / duration, 1);
      
      // Apply spring easing
      progress = spring(progress * 10) / spring(10);
      
      const newScroll = startPosition + (distance * progress);
      scrollAmount.current = newScroll;
      
      // Use smooth scrolling for better performance
      scrollContainer.scrollTo({ left: newScroll, behavior: 'smooth' });
      
      if (progress < 0.99) {
        // Continue animation
        animationFrameId.current = requestAnimationFrame(animateScroll);
      } else {
        // Snap to exact position at the end
        scrollContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });
        isScrolling.current = false;
        
        // Update current card index
        const newIndex = Math.round(targetScroll / cardTotalWidth) % featuresCount;
        setCurrentCardIndex(newIndex >= 0 ? newIndex : featuresCount + newIndex);
      }
    };
    
    // Start the animation
    animationFrameId.current = requestAnimationFrame(animateScroll);
  };

  return (
    <div className="min-h-screen bg-blue-50 relative overflow-hidden">
      {/* Soft animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-green-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((position, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-40 animate-bounce"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              animationDelay: `${position.animationDelay}s`,
              animationDuration: `${position.animationDuration}s`
            }}
          />
        ))}
      </div>
    
      <header className="relative py-2 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-6 py-3 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full mb-8 text-gray-700 font-medium shadow-lg">
            ✨ Welcome to the Future of Learning
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 bg-clip-text text-transparent mb-6 tracking-tight">
            NextGen Learn
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Transform your educational journey with cutting-edge learning solutions designed for the digital age
          </p>
        </div>
      </header>

      <main className="relative py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              <span className="relative">
                Features & Services
                <span className="absolute -bottom-3 left-0 right-0 w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mx-auto"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a comprehensive suite of tools and resources designed to empower your learning journey
            </p>
          </div>
          
          <div className="relative group">
            {/* Navigation Buttons */}
            <button 
              onClick={() => handleArrowClick('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button 
              onClick={() => handleArrowClick('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Scrolling container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto no-scrollbar pb-6 scroll-smooth will-change-transform"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => !isManuallyPaused && setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => !isManuallyPaused && setIsPaused(false)}
            >
              <div className="flex space-x-6 w-max px-4">
                {[...features, ...features, ...features].map((feature, index) => (
                  <div 
                    key={index} 
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 w-80 flex-shrink-0 border border-white/60 hover:bg-white/90 hover:-translate-y-2 hover:${feature.shadowColor} hover:shadow-xl`}
                  >
                    {/* Soft animated border */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-sm transition duration-500`}></div>
                    
                    <div className="relative z-10 w-full">
                      {/* Icon container with pastel background */}
                      <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${feature.bgGradient} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        {React.cloneElement(feature.icon, { 
                          className: `w-10 h-10 text-gray-600 transition-all duration-300 group-hover:scale-110` 
                        })}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      
                      {/* <button 
                        className={`px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r ${feature.gradient} text-white hover:opacity-90 transition-opacity`}
                        onMouseEnter={() => setIsManuallyPaused(true)}
                        onMouseLeave={() => setIsManuallyPaused(false)}
                      >
                        Learn More
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Optimize for GPU acceleration */
        .will-change-transform {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        /* Smooth scrolling behavior */
        .scroll-smooth {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
  );
};

export default HomeContent;
