'use client';
import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, MonitorPlay, Users, BookOpen, GraduationCap, BarChart3, Handshake, Computer, MessageSquare } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="flex-none w-80 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center justify-center text-center mx-4 group">
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-xl scale-150"></div>
      <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-full border-2 border-blue-100 group-hover:border-blue-200 transition-all duration-300">
        <div className="text-5xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
    </div>
    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
      {description}
    </p>
    <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
  </div>
);

const HomeContent: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    {
      title: 'Online Classes',
      description: 'Engage in live, interactive online classes with expert instructors.',
      icon: <MonitorPlay size={40} />,
    },
    {
      title: 'Mentorship & Guidance',
      description: 'Receive personalized guidance and support from experienced mentors.',
      icon: <Users size={40} />,
    },
    {
      title: 'Digital Study Materials',
      description: 'Access a vast library of digital textbooks, notes, and practice questions.',
      icon: <BookOpen size={40} />,
    },
    {
      title: 'Career Guidance',
      description: 'Get expert advice and resources to help shape your future career path.',
      icon: <GraduationCap size={40} />,
    },
    {
      title: 'Tests & Assessments',
      description: 'Regular tests and assessments to track progress and identify areas for improvement.',
      icon: <BarChart3 size={40} />,
    },
    {
      title: 'Parent–Teacher Connect',
      description: 'Seamless communication channel for parents and teachers to collaborate on student progress.',
      icon: <Handshake size={40} />,
    },
    {
      title: 'Flexible Learning Platform',
      description: 'Learn anytime, anywhere with our adaptable and user-friendly online platform.',
      icon: <Computer size={40} />,
    },
    {
      title: 'Peer Learning & Community',
      description: 'Collaborate with peers, share knowledge, and grow together in a supportive community.',
      icon: <MessageSquare size={40} />,
    },
  ];

  useEffect(() => {
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        if (scrollLeft >= maxScrollLeft) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
        }
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    }, 20);
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    scrollIntervalRef.current = null;
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
    // Always restart auto-scroll after short delay
    setTimeout(() => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
          const maxScrollLeft = scrollWidth - clientWidth;
          if (scrollLeft >= maxScrollLeft) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
          }
          setScrollPosition(scrollRef.current.scrollLeft);
        }
      }, 20);
    }, 500);
  };

  return (
    <section className="py-2 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-4">
          NextGen Learn: Shaping Future Education
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover how our innovative features are transforming the learning experience for students and educators alike.
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto py-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
            {/* Duplicate cards for continuous scroll effect */}
            {features.map((feature, index) => (
              <FeatureCard key={`duplicate-${index}`} {...feature} />
            ))}
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