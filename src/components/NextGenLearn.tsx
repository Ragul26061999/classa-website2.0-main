'use client';
import React, { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, MonitorPlay, Users, BookOpen, GraduationCap, BarChart3, Handshake, Computer, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: {
    icon: string;
    gradientFrom: string;
    gradientTo: string;
    border: string;
    bg: string;
  };
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex-none w-[300px] sm:w-[340px] group"
  >
    <div className={`relative h-full p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden`}>
      {/* Background gradient blob */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${color.gradientFrom} ${color.gradientTo} rounded-full opacity-[0.08] blur-3xl group-hover:opacity-[0.15] transition-opacity duration-500`} />
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color.gradientFrom} ${color.gradientTo} text-white shadow-lg ${color.gradientFrom.includes('blue') ? 'shadow-blue-500/25' : color.gradientFrom.includes('purple') ? 'shadow-purple-500/25' : color.gradientFrom.includes('green') ? 'shadow-green-500/25' : 'shadow-gray-500/25'} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color.gradientFrom} ${color.gradientTo} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  </motion.div>
);

 const HomeContent: React.FC = () => {
   const scrollRef = useRef<HTMLDivElement>(null);
   const scrollIntervalRef = useRef<number | null>(null);

   const features = [
    {
      title: 'Online Classes',
      description: 'Engage in live, interactive online classes with expert instructors.',
      icon: <MonitorPlay size={24} />,
      color: {
        icon: 'text-blue-500',
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-blue-600',
        border: 'border-blue-100',
        bg: 'bg-blue-50'
      }
    },
    {
      title: 'Mentorship & Guidance',
      description: 'Receive personalized guidance and support from experienced mentors.',
      icon: <Users size={24} />,
      color: {
        icon: 'text-purple-500',
        gradientFrom: 'from-purple-500',
        gradientTo: 'to-purple-600',
        border: 'border-purple-100',
        bg: 'bg-purple-50'
      }
    },
    {
      title: 'Digital Study Materials',
      description: 'Access a vast library of digital textbooks, notes, and practice questions.',
      icon: <BookOpen size={24} />,
      color: {
        icon: 'text-green-500',
        gradientFrom: 'from-emerald-500',
        gradientTo: 'to-teal-500',
        border: 'border-green-100',
        bg: 'bg-green-50'
      }
    },
    {
      title: 'Career Guidance',
      description: 'Get expert advice and resources to help shape your future career path.',
      icon: <GraduationCap size={24} />,
      color: {
        icon: 'text-amber-500',
        gradientFrom: 'from-amber-500',
        gradientTo: 'to-orange-500',
        border: 'border-amber-100',
        bg: 'bg-amber-50'
      }
    },
    {
      title: 'Tests & Assessments',
      description: 'Regular tests and assessments to track progress and identify areas for improvement.',
      icon: <BarChart3 size={24} />,
      color: {
        icon: 'text-pink-500',
        gradientFrom: 'from-pink-500',
        gradientTo: 'to-rose-500',
        border: 'border-pink-100',
        bg: 'bg-pink-50'
      }
    },
    {
      title: 'Parent–Teacher Connect',
      description: 'Seamless communication channel for parents and teachers to collaborate on student progress.',
      icon: <Handshake size={24} />,
      color: {
        icon: 'text-indigo-500',
        gradientFrom: 'from-indigo-500',
        gradientTo: 'to-violet-500',
        border: 'border-indigo-100',
        bg: 'bg-indigo-50'
      }
    },
    {
      title: 'Flexible Learning Platform',
      description: 'Learn anytime, anywhere with our adaptable and user-friendly online platform.',
      icon: <Computer size={24} />,
      color: {
        icon: 'text-red-500',
        gradientFrom: 'from-red-500',
        gradientTo: 'to-rose-600',
        border: 'border-red-100',
        bg: 'bg-red-50'
      }
    },
    {
      title: 'Peer Learning & Community',
      description: 'Collaborate with peers, share knowledge, and grow together in a supportive community.',
      icon: <MessageSquare size={24} />,
      color: {
        icon: 'text-cyan-500',
        gradientFrom: 'from-cyan-500',
        gradientTo: 'to-sky-500',
        border: 'border-cyan-100',
        bg: 'bg-cyan-50'
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
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Platform Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">NextGen Learn:</span>{' '}
            <span className="text-gray-900">Shaping Future Education</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover how our innovative features are transforming the learning experience for students and educators alike.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-4 px-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayedFeatures.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} index={idx % features.length} />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-xl transition-all duration-300 z-20"
            onClick={() => handleScroll('left')}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-xl transition-all duration-300 z-20"
            onClick={() => handleScroll('right')}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;