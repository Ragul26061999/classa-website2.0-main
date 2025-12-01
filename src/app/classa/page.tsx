'use client';

import Navbar from "@/components/Navbar";
import { Check, ArrowRight, Sparkles, ChevronRight, BarChart3, GraduationCap, Users, BookOpen, Brain, Shield, Zap, Globe, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";

// Module data
const MODULES = [
  {
    id: 'cms',
    letter: 'C',
    title: 'Content Management System',
    shortTitle: 'Content',
    description: 'Upload, organize, and distribute lesson plans, videos, and notes seamlessly.',
    features: [
      'Role-based content access permissions',
      'Version control for content integrity',
      'NCERT-aligned digital content library',
      'Centralized resource management'
    ],
    image: '/images/cms.png',
    color: '#3B82F6',
    gradient: 'from-blue-500 to-cyan-400',
    lightBg: 'bg-blue-50',
  },
  {
    id: 'lms',
    letter: 'L',
    title: 'Learning Management System',
    shortTitle: 'Learning',
    description: 'Auto-generate schedules, track assignments, and monitor student progress.',
    features: [
      'Automated timetable generation',
      'Assignment tracking & evaluation',
      'Attendance monitoring',
      'Student-centric dashboards'
    ],
    image: '/images/lms.png',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-400',
    lightBg: 'bg-amber-50',
  },
  {
    id: 'ams',
    letter: 'A',
    title: 'Assessment Management System',
    shortTitle: 'Assessment',
    description: 'Design AI-supported evaluations with comprehensive analytics.',
    features: [
      'AI-assisted test creation',
      "Bloom's taxonomy tagging",
      'NCERT question bank access',
      'Performance analytics & reports'
    ],
    image: '/images/ams.png',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-400',
    lightBg: 'bg-emerald-50',
  },
  {
    id: 'senseai',
    letter: 'S',
    title: 'SenseAI – Learning Intelligence',
    shortTitle: 'SenseAI',
    description: 'AI that adapts to each learner and gives teachers superpowers.',
    features: [
      'Adaptive learning paths',
      'Auto content suggestions',
      'Real-time insights',
      'Multilingual support'
    ],
    image: '/images/senseAI.png',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-400',
    lightBg: 'bg-purple-50',
  },
  {
    id: 'sms',
    letter: 'S',
    title: 'School Management System',
    shortTitle: 'School',
    description: 'Manage admissions, fees, transport, and staff records efficiently.',
    features: [
      'RFID/biometric attendance',
      'Parent communication portal',
      'Financial & compliance reports',
      'Staff & inventory management'
    ],
    image: '/images/sms.png',
    color: '#F97316',
    gradient: 'from-orange-500 to-red-400',
    lightBg: 'bg-orange-50',
  },
  {
    id: 'adms',
    letter: 'A',
    title: 'Admission Management System',
    shortTitle: 'Admission',
    description: 'Streamline online applications and enrollment processes.',
    features: [
      'Online application portal',
      'Real-time status tracking',
      'CRM/ERP integration',
      'Admission analytics dashboard'
    ],
    image: '/adms.png',
    color: '#EF4444',
    gradient: 'from-red-500 to-rose-400',
    lightBg: 'bg-red-50',
  }
];

const ROLES = [
  {
    id: 'leader',
    title: 'Leaders',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-400',
    description: 'Comprehensive dashboards with real-time analytics for strategic decision-making.',
    image: '/image/principle.png'
  },
  {
    id: 'teacher',
    title: 'Teachers',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-400',
    description: 'Create lessons, automate grading, and track student progress effortlessly.',
    image: '/teacher.png'
  },
  {
    id: 'student',
    title: 'Students',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-400',
    description: 'Personalized learning paths with interactive tools and instant feedback.',
    image: '/student.png'
  },
  {
    id: 'parent',
    title: 'Parents',
    icon: Users,
    color: 'from-amber-500 to-orange-400',
    description: 'Stay informed with progress updates and secure communication channels.',
    image: '/parent.jpeg'
  }
];

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/80 font-medium">Complete School Suite</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            <span className="block">Six Modules.</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              One Powerful Platform.
            </span>
          </motion.h1>

          {/* CLASSA Letters */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center gap-3 sm:gap-4 my-10"
          >
            {MODULES.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: module.color,
                    boxShadow: `0 10px 40px ${module.color}40`
                  }}
                >
                  {module.letter}
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <div className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-white/20">
                    {module.shortTitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            A comprehensive educational ecosystem designed to transform how institutions manage, teach, and learn.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </motion.div>
        </div>
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
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Modules Section - CLASSA in single line
function ModulesSection() {
  const [activeModule, setActiveModule] = useState(0);
  const currentModule = MODULES[activeModule];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-700">Our Modules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Everything You Need,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Integrated
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Click on each letter to explore our six powerful modules.
          </p>
        </motion.div>

        {/* CLASSA Letters - Single Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12"
        >
          {MODULES.map((module, index) => (
            <motion.button
              key={module.id}
              onClick={() => setActiveModule(index)}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex flex-col items-center group transition-all duration-300`}
            >
              {/* Letter Circle */}
              <div 
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl transition-all duration-300 ${
                  activeModule === index ? 'scale-110' : 'opacity-70 hover:opacity-100'
                }`}
                style={{ 
                  backgroundColor: module.color,
                  boxShadow: activeModule === index 
                    ? `0 12px 30px ${module.color}50` 
                    : `0 4px 15px ${module.color}30`
                }}
              >
                {module.letter}
              </div>
              
              {/* Module short title */}
              <span className={`mt-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeModule === index ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {module.shortTitle}
              </span>
              
              {/* Active indicator dot */}
              {activeModule === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-3 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: module.color }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Module Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            {/* Colored top bar */}
            <div 
              className="h-1.5 w-full"
              style={{ backgroundColor: currentModule.color }}
            />
            
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Badge */}
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ backgroundColor: `${currentModule.color}15` }}
                >
                  <div 
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: currentModule.color }}
                  >
                    {currentModule.letter}
                  </div>
                  <span 
                    className="text-sm font-medium"
                    style={{ color: currentModule.color }}
                  >
                    {currentModule.shortTitle} Module
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {currentModule.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {currentModule.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {currentModule.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${currentModule.color}20` }}
                      >
                        <Check className="w-3 h-3" style={{ color: currentModule.color }} />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div 
                className="relative p-6 sm:p-8 flex items-center justify-center min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]"
                style={{ backgroundColor: `${currentModule.color}08` }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentModule.image}
                    alt={currentModule.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// Roles Section
function RolesSection() {
  const [activeRole, setActiveRole] = useState(0);
  
  const roleColors = {
    leader: { bg: 'from-blue-500 to-cyan-500', light: 'bg-blue-500', shadow: 'shadow-blue-500/30' },
    teacher: { bg: 'from-emerald-500 to-teal-500', light: 'bg-emerald-500', shadow: 'shadow-emerald-500/30' },
    student: { bg: 'from-purple-500 to-pink-500', light: 'bg-purple-500', shadow: 'shadow-purple-500/30' },
    parent: { bg: 'from-amber-500 to-orange-500', light: 'bg-amber-500', shadow: 'shadow-amber-500/30' },
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Users className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-700">For Everyone</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tailored for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Every Role
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Specialized features designed for each member of your educational community.
          </p>
        </motion.div>

        {/* Role Tabs - Redesigned */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {ROLES.map((role, index) => {
            const Icon = role.icon;
            const isActive = activeRole === index;
            const colors = roleColors[role.id as keyof typeof roleColors];
            
            return (
              <motion.button
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveRole(index)}
                className={`relative flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${colors.bg} text-white shadow-lg ${colors.shadow}`
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? '' : 'text-gray-400'}`} />
                <span className="text-sm sm:text-base">{role.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Role Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={ROLES[activeRole].image}
                    alt={ROLES[activeRole].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Title overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  key={activeRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white"
                >
                  <h3 className="text-2xl font-bold mb-2">{ROLES[activeRole].title}</h3>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {(() => {
                const colors = roleColors[ROLES[activeRole].id as keyof typeof roleColors];
                const Icon = ROLES[activeRole].icon;
                
                return (
                  <motion.div
                    key={activeRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden"
                  >
                    {/* Colored top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.bg}`} />
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${colors.bg} text-white mb-5 shadow-lg ${colors.shadow}`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      For {ROLES[activeRole].title}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                      {ROLES[activeRole].description}
                    </p>

                    <Link
                      href="/#contact"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${colors.bg} text-white font-medium shadow-md ${colors.shadow} hover:shadow-lg transition-all`}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Join hundreds of schools already using CLASSA to deliver better educational outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function ClassaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ModulesSection />
      <RolesSection />
      <CTASection />
    </main>
  );
}
