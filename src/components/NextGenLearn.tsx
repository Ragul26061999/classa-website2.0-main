'use client';
import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, MonitorPlay, Users, BookOpen, GraduationCap, BarChart3, Handshake, Computer, MessageSquare } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: {
    icon: string;
    gradientFrom: string;
    gradientTo: string;
    border: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color }) => (
  <div className="w-full sm:w-72 md:w-80 p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 flex flex-col items-center justify-center text-center mx-2 sm:mx-3 md:mx-4 group relative">
    <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${color.gradientFrom} ${color.gradientTo} rounded-full flex items-center justify-center shadow-md`}>
      <div className={`w-4 h-4 ${color.icon.replace('text-', 'bg-')} rounded-full`}></div>
    </div>
    <div className="relative mb-6">
      <div className={`absolute inset-0 bg-gradient-to-r ${color.gradientFrom} ${color.gradientTo} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-xl scale-150`}></div>
      <div className={`relative bg-gradient-to-br ${color.gradientFrom.replace('500', '50')} ${color.gradientTo.replace('600', '100')} p-6 rounded-full border-2 ${color.border} group-hover:${color.border.replace('100', '200')} transition-all duration-300`}>
        <div className={`text-5xl ${color.icon} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>
    </div>
    <h3 className={`text-2xl font-bold bg-gradient-to-r ${color.gradientFrom} ${color.gradientTo} bg-clip-text text-transparent mb-3 group-hover:opacity-90 transition-all duration-300`}>
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
      {description}
    </p>
    <div className={`mt-4 w-16 h-1 bg-gradient-to-r ${color.gradientFrom} ${color.gradientTo} rounded-full group-hover:w-24 transition-all duration-300`}></div>
  </div>
);

 const HomeContent: React.FC = () => {
   const scrollRef = useRef<HTMLDivElement>(null);
   const scrollIntervalRef = useRef<number | null>(null);

   // Responsive breakpoints for different screen sizes
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const features = [
    {
      title: 'Online Classes',
      description: 'Engage in live, interactive online classes with expert instructors.',
      icon: <MonitorPlay size={40} />,
      color: {
        icon: 'text-blue-500',
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-blue-600',
        border: 'border-blue-100'
      }
    },
    {
      title: 'Mentorship & Guidance',
      description: 'Receive personalized guidance and support from experienced mentors.',
      icon: <Users size={40} />,
      color: {
        icon: 'text-purple-500',
        gradientFrom: 'from-purple-500',
        gradientTo: 'to-purple-600',
        border: 'border-purple-100'
      }
    },
    {
      title: 'Digital Study Materials',
      description: 'Access a vast library of digital textbooks, notes, and practice questions.',
      icon: <BookOpen size={40} />,
      color: {
        icon: 'text-green-500',
        gradientFrom: 'from-green-500',
        gradientTo: 'to-green-600',
        border: 'border-green-100'
      }
    },
    {
      title: 'Career Guidance',
      description: 'Get expert advice and resources to help shape your future career path.',
      icon: <GraduationCap size={40} />,
      color: {
        icon: 'text-yellow-500',
        gradientFrom: 'from-yellow-500',
        gradientTo: 'to-yellow-600',
        border: 'border-yellow-100'
      }
    },
    {
      title: 'Tests & Assessments',
      description: 'Regular tests and assessments to track progress and identify areas for improvement.',
      icon: <BarChart3 size={40} />,
      color: {
        icon: 'text-pink-500',
        gradientFrom: 'from-pink-500',
        gradientTo: 'to-pink-600',
        border: 'border-pink-100'
      }
    },
    {
      title: 'Parent–Teacher Connect',
      description: 'Seamless communication channel for parents and teachers to collaborate on student progress.',
      icon: <Handshake size={40} />,
      color: {
        icon: 'text-indigo-500',
        gradientFrom: 'from-indigo-500',
        gradientTo: 'to-indigo-600',
        border: 'border-indigo-100'
      }
    },
    {
      title: 'Flexible Learning Platform',
      description: 'Learn anytime, anywhere with our adaptable and user-friendly online platform.',
      icon: <Computer size={40} />,
      color: {
        icon: 'text-red-500',
        gradientFrom: 'from-red-500',
        gradientTo: 'to-red-600',
        border: 'border-red-100'
      }
    },
    {
      title: 'Peer Learning & Community',
      description: 'Collaborate with peers, share knowledge, and grow together in a supportive community.',
      icon: <MessageSquare size={40} />,
      color: {
        icon: 'text-cyan-500',
        gradientFrom: 'from-cyan-500',
        gradientTo: 'to-cyan-600',
        border: 'border-cyan-100'
      }
    },
  ];

   const displayedFeatures = [...features, ...features];

   useEffect(() => {
     const scrollElement = scrollRef.current;
     if (!scrollElement) return;

     const autoScroll = () => {
       if (scrollElement) {
         const { scrollWidth, clientWidth, scrollLeft } = scrollElement;
         const cardWidth = 352; // Approximate width of a single card
         const singleSetWidth = features.length * cardWidth;

         if (scrollLeft >= singleSetWidth) {
           scrollElement.scrollLeft = 0;
         } else {
           scrollElement.scrollLeft += 1;
         }
       }
       scrollIntervalRef.current = requestAnimationFrame(autoScroll);
     };

     scrollIntervalRef.current = requestAnimationFrame(autoScroll);

     return () => {
       if (scrollIntervalRef.current) {
         cancelAnimationFrame(scrollIntervalRef.current as any);
       }
     };
   }, []);

   const handleScroll = (direction: 'left' | 'right') => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Temporarily stop auto-scroll
    if (scrollIntervalRef.current) {
      cancelAnimationFrame(scrollIntervalRef.current as any);
      scrollIntervalRef.current = null;
    }

    const cardWidth = 352; // Approximate width of a single card (w-80 + mx-4*2 = 320 + 16*2 = 352)
    const currentScroll = scrollElement.scrollLeft;
    const singleSetWidth = features.length * cardWidth;

    let targetScroll = currentScroll;
    if (direction === 'left') {
      targetScroll = currentScroll - cardWidth;
      if (targetScroll < 0) {
        // If scrolling left from the beginning of the first set, jump to the end of the duplicated set
        targetScroll = singleSetWidth + targetScroll; 
      }
    } else {
      targetScroll = currentScroll + cardWidth;
      if (targetScroll >= singleSetWidth * 2) { 
        // If scrolled past the end of the second set, wrap around to the beginning of the second set
        targetScroll = targetScroll - singleSetWidth; 
      }
    }

    scrollElement.scrollTo({ left: targetScroll, behavior: 'smooth' });

    // Restart auto-scroll after a short delay
    setTimeout(() => {
      if (scrollRef.current) {
        const autoScroll = () => {
          if (scrollRef.current) {
            const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
            const singleSetWidth = features.length * cardWidth;

            if (scrollLeft >= singleSetWidth) {
              scrollRef.current.scrollLeft = 0;
            } else {
              scrollRef.current.scrollLeft += 1;
            }
            // Removed setScrollPosition(scrollRef.current.scrollLeft);
          }
          scrollIntervalRef.current = requestAnimationFrame(autoScroll);
        };
        scrollIntervalRef.current = requestAnimationFrame(autoScroll);
      }
    }, 500);
  };

  return (
    <section className="py-2 bg-gradient-to-b from-gray-50 to-white">
      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Next-Gen Learning Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students with cutting-edge educational tools and resources
          </p>
        </div>
        <div className="relative">
          <div 
            ref={scrollRef}
            className="w-full overflow-x-auto scrollbar-hide py-4 sm:py-8 px-2 sm:px-4 lg:px-8 -mx-2 sm:-mx-4 lg:-mx-8"
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4">
              {features.map((feature, index) => (
                <div key={`${feature.title}-${index}`} className="w-full">
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
            onClick={() => handleScroll('left')}
          >
            <ArrowLeft className="text-gray-700" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
            onClick={() => handleScroll('right')}
          >
            <ArrowRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;