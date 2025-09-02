'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';
import Folder from './Folder';
import CardSwap, { Card } from './CardSwap';
import Link from 'next/link';

// import MeetTheTeam from './MeetTheTeam';

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
        <section className="relative min-h-[70vh] md:min-h-screen flex items-center px-6 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0 opacity-70">
            <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
              {/* Plane 1: Original Path & Trail */}
              <path id="motionPath1" fill="none" stroke="none" 
                    d="M-50,450 C 250,250 550,550 850,450 S 1150,250 1490,400" />
              <path fill="none" stroke="#cbd5e1" strokeWidth="2" 
                    strokeDasharray="2000" strokeDashoffset="2000"
                    d="M-50,450 C 250,250 550,550 850,450 S 1150,250 1490,400">
                <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" from="2000" to="0" calcMode="spline" keySplines="0.4, 0, 0.2, 1" />
              </path>
              <path fill="none" stroke="#94a3b8" strokeWidth="3" 
                    strokeDasharray="80 2000" strokeDashoffset="2080"
                    d="M-50,450 C 250,250 550,550 850,450 S 1150,250 1490,400">
                <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" from="2080" to="0" calcMode="spline" keySplines="0.4, 0, 0.2, 1" />
              </path>

              {/* Plane 2: New Path & Dashed Trail */}
              <path id="motionPath2" fill="none" stroke="none" 
                    d="M-50,750 C 300,500 600,200 900,300 S 1200,600 1490,500" />
              <path fill="none" stroke="#a5b4fc" strokeWidth="2"
                    strokeDasharray="10 15 2000 2000" strokeDashoffset="4045"
                    d="M-50,750 C 300,500 600,200 900,300 S 1200,600 1490,500">
                   <animate attributeName="stroke-dashoffset" dur="14s" begin="4s" repeatCount="indefinite" from="4045" to="0" calcMode="spline" keySplines="0.4, 0, 0.2, 1" />
              </path>

              {/* Plane 3: Another New Path & Thinner Trail */}
              <path id="motionPath3" fill="none" stroke="none" 
                    d="M-50,200 C 400,600 800,100 1490,300" />
              <path fill="none" stroke="#fca5a5" strokeWidth="1" 
                    strokeDasharray="2000" strokeDashoffset="2000"
                    d="M-50,200 C 400,600 800,100 1490,300">
                <animate attributeName="stroke-dashoffset" dur="10s" begin="2s" repeatCount="indefinite" from="2000" to="0" calcMode="spline" keySplines="0.4, 0, 0.2, 1" />
              </path>
              <path fill="none" stroke="#ef4444" strokeWidth="2" 
                    strokeDasharray="60 2000" strokeDashoffset="2060"
                    d="M-50,200 C 400,600 800,100 1490,300">
                <animate attributeName="stroke-dashoffset" dur="10s" begin="2s" repeatCount="indefinite" from="2060" to="0" calcMode="spline" keySplines="0.4, 0, 0.2, 1" />
              </path>

              {/* Paper Plane 1 Group */}
              <g id="paper-plane-group" transform="scale(5)">
                  <g id="paper-plane-1">
                    <path d="M2.2,16.5l19.5-8.5L2.2,0.1L2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z" fill="#38bdf8"/>
                    <path d="M2.2,16.5l19.5-8.5L2.2,0.1l0,0C2.2,0.1,2.2,7,2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z" fill="#0ea5e9"/>
                  </g>
                  <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4, 0, 0.2, 1">
                      <mpath href="#motionPath1" />
                  </animateMotion>
              </g>

              {/* Paper Plane 2 Group */}
              <g id="paper-plane-group-2" transform="scale(5)">
                  <g id="paper-plane-2">
                    <path d="M2.2,16.5l19.5-8.5L2.2,0.1L2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z" fill="#818cf8"/>
                    <path d="M2.2,16.5l19.5-8.5L2.2,0.1l0,0C2.2,0.1,2.2,7,2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z" fill="#6366f1"/>
                  </g>
                  <animateMotion dur="14s" begin="4s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4, 0, 0.2, 1">
                      <mpath href="#motionPath2" />
                  </animateMotion>
              </g>

              {/* Paper Plane 3 Group */}
              <g id="paper-plane-group-3" transform="scale(5)">
                  <g id="paper-plane-3">
                    <path d="M2.2,16.5l19.5-8.5L2.2,0.1L2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z" fill="#f87171"/>
                    <path d="M2.2,16.5l19.5-8.5L2.2,0.1l0,0C2.2,0.1,2.2,7,2.2,7l13.6,1.4L2.2,9.9L2.2,16.5z" fill="#dc2626"/>
                  </g>
                  <animateMotion dur="10s" begin="2s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4, 0, 0.2, 1">
                      <mpath href="#motionPath3" />
                  </animateMotion>
              </g>
            </svg>
          </div>

          <div className="relative w-full grid md:grid-cols-2 gap-10 items-center z-10">
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
                CLASSA is a Next-Generation education technology platform designed to
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
                    <Image 
                      src="/image/vision.png" 
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
                    <div className="relative">
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
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        whileHover={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute z-10 w-64 p-4 mt-2 text-sm bg-white rounded-lg shadow-lg text-gray-700"
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

  );

};

export default AboutUs;
