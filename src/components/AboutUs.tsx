'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronRight,
  ChevronLeft,
  X,
} from 'lucide-react';
import Folder from './Folder';
import CardSwap, { Card } from './CardSwap';
import Link from 'next/link';

import MeetTheTeam from './MeetTheTeam';

const AboutUs = () => {
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
    <section className="min-h-screen bg-[radial-gradient(60%_80%_at_10%_10%,#dbeafe_0%,#ffffff_50%)]">
      <div className="max-w-7xl mx-auto">
        {/* ===== HERO WITH CARDS ===== */}
        <section className="relative min-h-[70vh] md:min-h-screen flex items-center px-6">
          <div className="relative w-full grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-700 via-sky-600 to-indigo-700"
              >
                Who We Are
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 text-[1.05rem] text-gray-600 leading-relaxed"
              >
                CLASSA is a next-generation education technology platform designed to
                streamline academic delivery, student support, and school management with one unified AI-driven system.
              </motion.p>
            </div>

            <div className="order-1 md:order-2 flex items-center justify-center md:justify-end mt-20 md:mt-40">
              <CardSwap
                width={400}
                height={300}
                cardDistance={50}
                verticalDistance={60}
                delay={4600}
                pauseOnHover
                easing="elastic"
              >
                {/* Cards */}
                <Card customClass="bg-gradient-to-br from-sky-50 to-indigo-100">
                  <div className="relative h-full w-full p-6">
                    <h4 className="text-xl font-semibold text-slate-900">AI-Driven Platform</h4>
                    <p className="mt-2 text-slate-600 text-sm max-w-[70%]">
                      Unified system for academics, assessments and admin.
                    </p>
                    <Brain className="absolute bottom-4 right-4 h-16 w-16 text-sky-500/60" />
                  </div>
                </Card>

                <Card customClass="bg-gradient-to-br from-violet-50 to-sky-100">
                  <div className="relative h-full w-full p-6">
                    <h4 className="text-xl font-semibold text-slate-900">Modular & Extensible</h4>
                    <p className="mt-2 text-slate-600 text-sm max-w-[70%]">
                      Choose the modules you need, scale as you grow.
                    </p>
                    <Puzzle className="absolute bottom-4 right-4 h-16 w-16 text-violet-500/60" />
                  </div>
                </Card>

                <Card customClass="bg-gradient-to-br from-amber-50 to-rose-100">
                  <div className="relative h-full w-full p-6">
                    <h4 className="text-xl font-semibold text-slate-900">Delightful Experience</h4>
                    <p className="mt-2 text-slate-600 text-sm max-w-[70%]">
                      Fast, modern UI for teachers, students and admins.
                    </p>
                    <Stars className="absolute bottom-4 right-4 h-16 w-16 text-rose-500/60" />
                  </div>
                </Card>

                <Card customClass="bg-gradient-to-br from-emerald-50 to-teal-100">
                  <div className="relative h-full w-full p-6">
                    <h4 className="text-xl font-semibold text-slate-900">Data you can trust</h4>
                    <p className="mt-2 text-slate-600 text-sm max-w-[70%]">
                      Privacy-first and robust access controls.
                    </p>
                    <ShieldCheck className="absolute bottom-4 right-4 h-16 w-16 text-teal-500/60" />
                  </div>
                </Card>

                <Card customClass="bg-gradient-to-br from-fuchsia-50 to-pink-100">
                  <div className="relative h-full w-full p-6">
                    <h4 className="text-xl font-semibold text-slate-900">Smart Reports</h4>
                    <p className="mt-2 text-slate-600 text-sm max-w-[70%]">
                      Real-time dashboards with actionable insights.
                    </p>
                    <BarChart3 className="absolute bottom-4 right-4 h-16 w-16 text-pink-500/60" />
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </section>

        {/* ===== VISION + MISSION ===== */}
        <section className="relative py-16 px-6 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold text-[#1E2D3D] mb-12"
          >
            CLASSA: Next-Generation Education Platform
          </motion.h2>

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
                    <img src="/image/vision.png" alt="Vision" className="h-full w-full object-cover" />
                  </div>
                  <div>
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
                    <img src="/image/mission.png" alt="Mission" className="h-full w-full object-cover" />
                  </div>
                  <div>
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
                    onClick={() => setSelectedFeature({ Icon, label, description })}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="relative flex flex-col items-center gap-3 py-3 w-full cursor-pointer hover:bg-sky-500/20 rounded-lg transition-all duration-300 group-hover:opacity-100"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    whileHover={{
                      scale: 1.05,
                      x: 4,
                      transition: { type: 'spring', stiffness: 400, damping: 10 }
                    }}
                  >
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
                  </motion.div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/about"
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
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl px-8 py-3 text-base shadow-md bg-sky-600 text-white hover:bg-sky-700"
            >
              Explore Modules
            </motion.button>
          </div>
        </section>

        {/* ===== MEET THE TEAM ===== */}
        <MeetTheTeam />

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

  );

};

export default AboutUs;
