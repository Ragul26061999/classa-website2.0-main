'use client';
import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, MonitorPlay, Users, BookOpen, GraduationCap, BarChart3, Handshake, Computer, MessageSquare } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="flex-none w-80 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center mx-4">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
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