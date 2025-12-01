'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
  LayoutGrid,
  ClipboardCheck,
  FileSearch,
  BarChart3,
  Users,
  GraduationCap,
  Building2,
  Brain,
  Puzzle,
  Stars,
  ShieldCheck,
  Eye,
  BadgeCheck,
  Shield,
  Cog,
  Crosshair,
  Lightbulb,
  BookOpen,
  X,
  Sparkles,
  Zap,
  Target,
  Heart,
  Globe,
  ArrowRight,
} from 'lucide-react';
import Folder from './Folder';
import CardSwap, { Card } from './CardSwap';
import Link from 'next/link';

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <span>{count}{suffix}</span>;
}

// Floating orb component
function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

const AboutUs = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Pastel glass palette helpers
  const pastelGlass =
    'bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.06)]';

  const problems = [
    {
      id: 1,
      title: 'Fragmented Systems',
      desc: 'Unify academics, assessments, and administration into a single platform.',
      icon: LayoutGrid,
      accent: 'from-sky-200/70 to-indigo-200/70',
      iconColor: 'text-sky-700',
      bubbleRing: 'ring-sky-200/70',
      span: 'lg:col-span-5 lg:row-span-2 md:col-span-6',
    },
    {
      id: 2,
      title: 'Manual Administrative Overhead',
      desc: 'Automate workflows like attendance, communication, and scheduling.',
      icon: ClipboardCheck,
      accent: 'from-emerald-200/70 to-teal-200/70',
      iconColor: 'text-emerald-700',
      bubbleRing: 'ring-emerald-200/70',
      span: 'lg:col-span-3 md:col-span-6',
    },
    {
      id: 3,
      title: 'Ineffective Assessments',
      desc: 'Generate intelligent tests and insightful feedback with SenseAI.',
      icon: FileSearch,
      accent: 'from-amber-200/70 to-orange-200/70',
      iconColor: 'text-amber-700',
      bubbleRing: 'ring-amber-200/70',
      span: 'lg:col-span-4 md:col-span-6',
    },
    {
      id: 4,
      title: 'Poor Data Visibility',
      desc: 'Access real-time dashboards for student, teacher, and operational performance.',
      icon: BarChart3,
      accent: 'from-fuchsia-200/70 to-pink-200/70',
      iconColor: 'text-fuchsia-700',
      bubbleRing: 'ring-fuchsia-200/70',
      span: 'lg:col-span-4 md:col-span-6',
    },
    {
      id: 5,
      title: 'Limited Parent Involvement',
      desc: 'Engage parents with updates, reports and two-way messaging.',
      icon: Users,
      accent: 'from-purple-200/70 to-sky-200/70',
      iconColor: 'text-purple-700',
      bubbleRing: 'ring-purple-200/70',
      span: 'lg:col-span-3 md:col-span-6',
    },
  ];

  // Subtle parallax tilt wrapper
  function TiltCard({
    children,
    className,
    delay = 0.06,
  }: React.PropsWithChildren<{ className?: string; delay?: number }>) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [transform, setTransform] = useState('perspective(1000px)');

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * 8;
      const rotateY = (x - 0.5) * 8;
      const px = x * 100;
      const py = y * 100;
      el.style.setProperty('--mx', `${px}%`);
      el.style.setProperty('--my', `${py}%`);
      setTransform(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
          2,
        )}deg) scale(1.01)`
      );
    };
    const handleLeave = () =>
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        style={{ transform, willChange: 'transform' }}
        className={`${className} group cursor-pointer`}
      >
        {children}
      </motion.div>
    );
  }

  const [selectedFeature, setSelectedFeature] = useState<{
    Icon: React.ComponentType<{ className?: string }>;
    label: string;
    description: string;
  } | null>(null);

  return (
    <section className="min-h-screen bg-white">
      
        {/* ===== INNOVATIVE HERO SECTION ===== */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Animated mesh gradient */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/25 rounded-full blur-[60px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-1/3 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-cyan-500/20 rounded-full blur-[50px] md:blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.8)_70%)]" />
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text content */}
              <motion.div
                style={{ y, opacity }}
                className="text-center lg:text-left"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-white/80 font-medium">About CLASSA</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                >
                  <span className="block">Transforming</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Education
                  </span>
                  <span className="block text-white/80 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1">with Innovation</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-base sm:text-lg text-white/60 max-w-xl mb-8 sm:mb-10"
                >
                  CLASSA is a Next-Gen education platform that streamlines academics, 
                  student support, and school management with AI-driven technology.
                </motion.p>

                {/* CTA Buttons - Hidden on mobile, shown on sm+ */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="hidden sm:flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/classa"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Explore Modules</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right: Interactive feature cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mt-8 lg:mt-0"
              >
                {/* Main feature grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: Brain, title: 'AI-Powered', desc: 'Smart learning paths', color: 'from-blue-500 to-cyan-400', delay: 0 },
                    { icon: Puzzle, title: 'Modular', desc: 'Scale as you grow', color: 'from-purple-500 to-pink-400', delay: 0.1 },
                    { icon: ShieldCheck, title: 'Secure', desc: 'Privacy-first design', color: 'from-emerald-500 to-teal-400', delay: 0.2 },
                    { icon: BarChart3, title: 'Analytics', desc: 'Real-time insights', color: 'from-amber-500 to-orange-400', delay: 0.3 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + item.delay }}
                      whileHover={{ scale: 1.03, y: -3 }}
                      className="group relative p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                    >
                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                      
                      <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 sm:mb-4 shadow-lg`}>
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-white/50">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Floating badge - hidden on small mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="hidden sm:flex absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium shadow-lg shadow-blue-500/25"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    AI-Powered
                  </span>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Mobile CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-col sm:hidden gap-3"
            >
              <Link
                href="/#contact"
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl text-center shadow-lg shadow-blue-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/classa"
                className="w-full py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-xl text-center"
              >
                Explore Modules
              </Link>
            </motion.div>

          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/40"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

      <div className="max-w-7xl mx-auto">

        {/* ===== NEW SECTION ===== */}
        {/* <section className="relative py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#1E2D3D] mb-6"
            >
              Our Commitment to Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-[1.05rem] text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10"
            >
              At CLASSA, we are dedicated to continuously improving our platform and services to meet the evolving needs of educators and students. Our commitment to innovation ensures that we provide the most effective and engaging learning experience possible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="rounded-xl bg-sky-600 px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-sky-700 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section> */}

        {/* ===== VISION + MISSION ===== */}
        <section className="relative py-16 px-6 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold text-[#1E2D3D] mb-12"
          >
            <span className="text-blue-500">CLASSA</span>: Next-Generation Education Platform
          </motion.h2>

          {/* Mobile-only quick features - Icons only, expandable */}
          <div className="md:hidden -mt-6 mb-8">
            <div className="grid grid-cols-4 gap-3">
              {[
                {
                  id: 'ai',
                  icon: <Shield className="h-5 w-5" />,
                  title: 'AI-Driven',
                  description: 'Harness AI for personalized learning and insights.',
                  color: 'bg-sky-100',
                  textColor: 'text-sky-600'
                },
                {
                  id: 'auto',
                  icon: <Cog className="h-5 w-5" />,
                  title: 'Automation',
                  description: 'Automate workflows to save time and reduce effort.',
                  color: 'bg-amber-100',
                  textColor: 'text-amber-600'
                },
                {
                  id: 'smart',
                  icon: <Crosshair className="h-5 w-5" />,
                  title: 'Smart',
                  description: 'Adaptive systems tailored to each learner.',
                  color: 'bg-emerald-100',
                  textColor: 'text-emerald-600'
                },
                {
                  id: 'innovate',
                  icon: <Lightbulb className="h-5 w-5" />,
                  title: 'Innovation',
                  description: 'Cutting-edge tools for future-ready education.',
                  color: 'bg-violet-100',
                  textColor: 'text-violet-600'
                }
              ].map((item) => (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => {
                      const content = document.getElementById(`mobile-feature-${item.id}`);
                      if (content) {
                        content.classList.toggle('hidden');
                      }
                    }}
                    className={`w-full aspect-square flex items-center justify-center rounded-xl ${item.color} ${item.textColor} hover:opacity-90 transition-all duration-200`}
                  >
                    {item.icon}
                  </button>
                  <div id={`mobile-feature-${item.id}`} className="hidden absolute z-10 mt-2 w-48 p-3 bg-white rounded-lg border border-gray-100 shadow-lg">
                    <p className="text-sm font-medium text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-[28px] bg-white p-6 md:p-10 shadow-md w-full lg:w-10/12"
            >
              <div className="flex flex-col gap-10">
                {/* Vision */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100">
                    <Image 
                      src="/image/vision2.png" 
                      alt="Vision" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="border border-blue-100/20 rounded-xl transition-all duration-300 ease-in-out hover:border-sky-400 hover:shadow-md hover:shadow-blue-200 hover:scale-[1.02] p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-sky-600" />
                      <h3 className="text-2xl font-semibold text-sky-600">Vision</h3>
                    </div>
                    <p className="text-[15px] leading-7 text-[#64748B]">
                      Revolutionize education with AI-driven learning and automation. Enhance accessibility through smart platforms. Optimize school operations with seamless automation.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100">
                    <Image 
                      src="/image/mission.png" 
                      alt="Mission" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="border border-blue-100/20 rounded-xl transition-all duration-300 ease-in-out hover:border-sky-400 hover:shadow-md hover:shadow-blue-200 hover:scale-[1.02] p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <BadgeCheck className="h-5 w-5 text-sky-600" />
                      <h3 className="text-2xl font-semibold text-sky-600">Mission</h3>
                    </div>
                    <p className="text-[15px] leading-7 text-[#64748B]">
                      Transform education through adaptive learning, smart assessments, automated management, and seamless collaboration—powered by innovation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features Pill */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:flex flex-col justify-between rounded-2xl bg-sky-600 p-8 text-white shadow-lg w-[280px] flex-shrink-0 relative group"
            >
              {[
                { 
                  icon: Shield, 
                  label: 'AI-Driven',
                  description: 'Harness the power of artificial intelligence to deliver personalized learning experiences and intelligent insights.'
                }, 
                { 
                  icon: Cog, 
                  label: 'Automation',
                  description: 'Streamline educational processes with smart automation, reducing manual work and increasing efficiency.'
                }, 
                { 
                  icon: Crosshair, 
                  label: 'Smart',
                  description: 'Intelligent systems that adapt to individual learning styles and provide targeted educational content.'
                }, 
                { 
                  icon: Lightbulb, 
                  label: 'Innovation',
                  description: 'Cutting-edge solutions that transform traditional education into an engaging, future-ready experience.'
                }
              ].map(({ icon: Icon, label, description }, i) => (
                <React.Fragment key={label}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col items-center gap-3 py-3 w-full group"
                    animate={{ opacity: 1 }}
                  >
                    <div className="relative flex items-center">
                      <div className="flex flex-col items-center gap-3 p-3 rounded-lg transition-all duration-300 group-hover:bg-white/10">
                        <Icon className="h-7 w-7" />
                        <div className="flex items-center gap-2">
                          <span className="text-[15px]">{label}</span>
                          <motion.span 
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              repeat: Infinity, 
                              repeatType: 'reverse',
                              duration: 1.5
                            }}
                            className="text-xs opacity-70"
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                        whileHover={{ opacity: 1, x: 20, scale: 1 }}
                        className="absolute left-full ml-2 z-10 w-64 p-4 text-sm bg-white rounded-lg shadow-lg text-gray-700"
                        style={{ pointerEvents: 'none' }}
                      >
                        <p>{description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/#contact"
              className="rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-sky-700 transition"
            >
              Know More About Us
            </Link>
          </div>
        </section>

        {/* ===== BENTO GRID ===== */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 ">
          <div className="sticky top-6 z-30 -mt-16 pt-16 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 ">
              What <span className="text-sky-600">CLASSA</span> Solves
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-7 [grid-auto-rows:minmax(180px,auto)]">
            {problems.map((p, index) => {
              const Icon = p.icon;
              return (
                <TiltCard
                  key={p.id}
                  delay={index * 0.06}
                  className={`relative col-span-1 ${p.span} rounded-3xl overflow-hidden ${pastelGlass}`}
                >
                  {/* pastel wash */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />

                  <div className="relative z-10 p-6 flex h-full flex-col">
                    <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 backdrop-blur ring-2 ${p.bubbleRing}`}>
                      <Icon className={`h-6 w-6 ${p.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                    <p className="mt-2 text-gray-700 text-[0.95rem]">{p.desc}</p>
                  </div>

                  {p.id === 1 && (
                    <div className="hidden md:flex absolute inset-0 z-20 items-center justify-center translate-y-20">
                      <Folder
                        color="#3B82F6"
                        size={1.5}
                        openOnHover
                        items={[
                          <ClipboardCheck key="as" className="h-5 w-5 text-amber-600" />,
                          <GraduationCap key="ac" className="h-5 w-5 text-sky-700" />,
                          <Building2 key="ad" className="h-5 w-5 text-indigo-700" />,
                        ]}
                      />
                    </div>
                  )}
                </TiltCard>
              );
            })}
          </div>

          <div className="flex justify-center mt-10 mb-10">
            <Link href="/classa#modules">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-2xl px-8 py-3 text-base shadow-md bg-sky-600 text-white hover:bg-sky-700"
              >
                Explore Modules
              </motion.button>
            </Link>
          </div>
        </section>

        {/* ===== MEET THE TEAM ===== */}
        {/* <MeetTheTeam /> */}

        {/* Feature Detail Modal */}
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-sky-100 p-4 rounded-full mb-4">
                    <selectedFeature.Icon className="h-10 w-10 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedFeature.label}
                  </h3>
                  <p className="text-gray-600">
                    {selectedFeature.description}
                  </p>
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="mt-6 px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors"
                  >
                    Got it
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
          </div>
        </section>
    //   </div>
    // </section>

  );

};

export default AboutUs;
