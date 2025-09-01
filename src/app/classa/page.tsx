'use client';
import Navbar from "@/components/Navbar";
import HeroSection_copy from "@/components/HeroSection_copy";
import { Check, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import type React from "react";

type Bullet = { text: string; colorClass: string };
 type Module = {
  title: string | React.ReactNode;
  description: string;
  bullets: Bullet[];
  image: { src: string; alt: string };
  accent: {
    ring: string; // ring color class, can be arbitrary like ring-[#EDC531]
    ringSoft?: string; // softer ring for image panel, e.g. ring-[#EDC531]/70
    dot: string; // bullet icon bg, e.g. bg-[#EDC531]
    gradient: string; // e.g. from-blue-50 to-sky-50
  };
};

// Role-specific images for the sticky left panel
const ROLE_IMAGES: { src: string; alt: string }[] = [
  {
    src: "/image/principle.png",
    alt: "Open office with meeting rooms representing administration and planning",
  },
  {
    src: "/teacher.png",
    alt: "Teacher in front of a classroom",
  },
  {
    src: "/student.png",
    alt: "Students studying together in a modern classroom",
  },
  {
    src: "/parent.jpeg",
    alt: "Parents with child reviewing progress at home",
  },
];

// CLASSA Educational Management Systems
const MODULES: Module[] = [
  {
    title: <span className="bg-[#007DC6] text-white px-2 py-1 rounded-md">Content Management System</span>,
    description: "Upload, organize, and distribute lesson plans, videos, and notes → Teachers can seamlessly share learning materials in one centralized platform.",
    bullets: [
      { text: "Enable subject/class-specific content access with role-based permissions → Only the right students and staff see the right content at the right time.", colorClass: "bg-[#3B82F6]" },
      { text: "Maintain content integrity with version control → Updates are tracked, so the latest and most accurate resources are always available.", colorClass: "bg-[#3B82F6]" },
      { text: "Access Edueron’s NCERT-aligned digital content library → Schools get ready-to-use curriculum resources mapped to NCERT standards.", colorClass: "bg-[#3B82F6]" },
      // { text: "Customize content for local needs → Tailor resources to meet regional standards and cultural contexts.", colorClass: "bg-[#3B82F6]" }
    ],
    image: {
      src: "/image/Cms.png",
      alt: "Content Management System"
    },
    accent: { ring: "ring-[#007DC6]", ringSoft: "ring-[#007DC6]/70", dot: "bg-[#007DC6]", gradient: "from-blue-50 to-sky-50" }
  },
  {
    title: <span className="bg-[#EDC531] text-white px-2 py-1 rounded-md">Learning Management System</span>,
    description: "Auto-generate class schedules and timetables → Saves time by creating optimized timetables instantly.",
    bullets: [
      { text: "Assign, evaluate, and track student tasks → Teachers can manage homework and assignments with real-time progress tracking.", colorClass: "bg-[#EDC531]" },
      { text: "Monitor attendance and generate performance summaries → Attendance data is auto-captured and linked to student performance.", colorClass: "bg-[#EDC531]" },
      { text: "Provide student-centric dashboards with deadlines and alerts → Students get personalized views of their schedules, tasks, and reminders.", colorClass: "bg-[#EDC531]" },
      // { text: "Generate reports and insights → Comprehensive analytics tools provide insights into student performance and trends.", colorClass: "bg-[#EDC531]" }
    ],
    image: {
      src: "/image/Lms.png",
      alt: "Learning Management System"
    },
    accent: { ring: "ring-[#EDC531]", ringSoft: "ring-[#EDC531]/70", dot: "bg-[#EDC531]", gradient: "from-yellow-50 to-amber-50" }
  },
  {
    title: <span className="bg-[#12881F] text-white px-2 py-1 rounded-md">Assessment Management System</span>,
    description: "Design AI-supported or manual evaluations → Teachers can create tests quickly with AI assistance or set them manually.",
    bullets: [
      { text: "Tag questions by Bloom’s taxonomy and difficulty level → Assessments are structured for deeper learning and progressive challenge.", colorClass: "bg-[#12881F]" },
      { text: "Tap into Edueron’s expansive NCERT-aligned question bank → A rich repository of curriculum-based questions is readily available.", colorClass: "bg-[#12881F]" },
      { text: "Deliver performance-driven analytics and detailed reports → Results provide insights on strengths, gaps, and growth areas.", colorClass: "bg-[#12881F]" },
      // { text: "Insightful scorecards", colorClass: "bg-[#12881F]" }
    ],
    image: {
      src: "/image/Ams.png",
      alt: "Assessment Management System"
    },
    accent: { ring: "ring-[#12881F]", ringSoft: "ring-[#12881F]/70", dot: "bg-[#12881F]", gradient: "from-emerald-50 to-green-50" }
  },
  {
    title: <span className="bg-[#A422D0] text-white px-2 py-1 rounded-md">SenseAI – Learning Intelligence</span>,
    description: "AI that adapts to each learner and gives teachers superpowers.",
    bullets: [
      { text: "Adaptive learning paths", colorClass: "bg-[#A422D0]" },
      { text: "Auto content suggestions", colorClass: "bg-[#A422D0]" },
      { text: "Realtime insights", colorClass: "bg-[#A422D0]" },
      { text: "Multilingual support", colorClass: "bg-[#A422D0]" }
    ],
    image: {
      src: "/image/Sims.png",
      alt: "SenseAI preview"
    },
    accent: { ring: "ring-[#A422D0]", ringSoft: "ring-[#A422D0]/70", dot: "bg-[#A422D0]", gradient: "from-purple-50 to-fuchsia-50" }
  },
  {
    title: <span className="bg-[#F29553] text-white px-2 py-1 rounded-md">School Management System</span>,
    description: "Manage admissions, fees, transport, and staff records → Automates core administrative processes for efficiency.",
    bullets: [
      { text: "Integrate RFID or biometric attendance tracking → Ensures accurate, real-time student and staff presence records.", colorClass: "bg-[#F29553]" },
      { text: "Enable communication with parents via messages and notices → Strengthens parent-school engagement with instant updates.", colorClass: "bg-[#F29553]" },
      { text: "Generate financial, operational, and compliance reports → Provides leaders with complete visibility for smarter decisions.", colorClass: "bg-[#F29553]" },
      { text: "Staff & inventory", colorClass: "bg-[#F29553]" }
    ],
    image: {
      src: "/image/Sms.png",
      alt: "School Management System"
    },
    accent: { ring: "ring-[#F29553]", ringSoft: "ring-[#F29553]/70", dot: "bg-[#F29553]", gradient: "from-orange-50 to-amber-50" }
  },
  {
    title: <span className="bg-[#E75C5C] text-white px-2 py-1 rounded-md">Admission Management System</span>,
    description: "Enable online applications with document uploads → Simplifies admissions by moving the entire process online.",
    bullets: [
      { text: "Track applicant status and communication in real-time → Keeps parents and schools updated at every step of the process.", colorClass: "bg-[#E75C5C]" },
      { text: "Integrate with CRM/ERP systems for seamless data flow → Ensures smooth connectivity with back-office systems.", colorClass: "bg-[#E75C5C]" },
      { text: "Provide dashboards for admissions insights and forecasts → Helps management plan seat availability and resource allocation.", colorClass: "bg-[#E75C5C]" },
      // { text: "Offer letters & onboarding", colorClass: "bg-[#E75C5C]" }
    ],
    image: {
      src: "/adms.png",
      alt: "Admission management preview"
    },
    accent: { ring: "ring-[#E75C5C]", ringSoft: "ring-[#E75C5C]/70", dot: "bg-[#E75C5C]", gradient: "from-rose-50 to-red-50" }
  } 
];

 const ROLES: { icon: string; title: string; text: string }[] = [
  {
    icon: "🧑‍💼",
    title: "🧑‍💼 Principals & Admins",
    text:
      "Comprehensive dashboards consolidate critical data into accessible insights, while robust analytics tools deliver real-time performance trends for optimized resource allocation and strategic decision-making.",
  },
  {
    icon: "👩‍🏫",
    title: "👩‍🏫 Teachers",
    text:
      "Quickly create customized lessons and tests with automated grading, deliver precise feedback to boost performance, and seamlessly organize plans while tracking progress and managing class content.",
  },
  {
    icon: "🧑‍🎓",
    title: "🧑‍🎓 Students",
    text:
      "Personalized learning journeys adapt to individual styles and pace, supported by interactive tools like flashcards, summaries, mnemonics, and quizzes—plus immediate feedback to highlight strengths.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "👨‍👩‍👧 Parents",
    text:
      "Clear, timely updates keep parents informed about progress and deadlines, with secure communication channels that foster active engagement and support at home.",
  },
];

export default function ClassaPage() {
  const [activeRole, setActiveRole] = useState(-1);
  const [activeModule, setActiveModule] = useState<number>(0);
  const modulesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: modulesRef,
    offset: ["start start", "end end"]
  });

  const activeModuleIndex = useTransform(scrollYProgress, [0, 1], [0, MODULES.length - 0.5]);

  useEffect(() => {
    return activeModuleIndex.onChange((latest) => {
      setActiveModule(Math.floor(latest));
    });
  }, [activeModuleIndex]);
  const currentIndex = activeRole === -1 ? 0 : activeRole;
  // Keyboard nav: roving tabindex and refs for tabs
  const [focusedIdx, setFocusedIdx] = useState<number>(0);
  const mobileTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const desktopTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const imageAreaRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // When a tab opens, ensure the image/panel is in view and focus the panel for accessibility
  useEffect(() => {
    if (activeRole !== -1) {
      if (imageAreaRef.current) {
        imageAreaRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      // Move focus shortly after animation starts
      const t = setTimeout(() => {
        panelRef.current?.focus();
      }, 150);
      return () => clearTimeout(t);
    }
  }, [activeRole]);

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
    orientation: 'horizontal' | 'vertical',
    scope: 'mobile' | 'desktop'
  ) {
    const key = e.key;
    const last = ROLES.length - 1;
    let next = idx;
    const refs = scope === 'mobile' ? mobileTabRefs.current : desktopTabRefs.current;

    const go = (n: number) => {
      setFocusedIdx(n);
      const target = refs[n];
      if (target) requestAnimationFrame(() => target.focus());
    };

    if (orientation === 'horizontal') {
      if (key === 'ArrowRight') { e.preventDefault(); next = idx === last ? 0 : idx + 1; go(next); return; }
      if (key === 'ArrowLeft')  { e.preventDefault(); next = idx === 0 ? last : idx - 1; go(next); return; }
    } else {
      if (key === 'ArrowDown') { e.preventDefault(); next = idx === last ? 0 : idx + 1; go(next); return; }
      if (key === 'ArrowUp')   { e.preventDefault(); next = idx === 0 ? last : idx - 1; go(next); return; }
    }
    if (key === 'Home') { e.preventDefault(); go(0); return; }
    if (key === 'End')  { e.preventDefault(); go(last); return; }
    if (key === 'Enter' || key === ' ') {
      e.preventDefault();
      setActiveRole(prev => (prev === idx ? -1 : idx));
      return;
    }
  }
  return (
    <main className="min-h-screen bg-white  ">
      <Navbar />

      {/* Hero */}
      <HeroSection_copy />

      {/* Modules */}
      <section ref={modulesRef} aria-labelledby="modules" className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 pt-35">Our Modules</h2>
            
            {/* CLASSA Buttons */}
            <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap">
              {['C', 'L', 'A', 'S', 'S', 'A'].map((letter, index) => {
                const color = [
                  'bg-[#007DC6]', // C - Blue
                  'bg-[#EDC531]', // L - Yellow
                  'bg-[#12881F]', // A - Green
                  'bg-[#A422D0]', // S - Purple
                  'bg-[#F29553]', // S - Orange
                  'bg-[#E75C5C]'  // A - Red
                ][index];
                
                return (
                  <motion.button
                    key={index}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold ${
                      activeModule === index 
                        ? `text-white shadow-2xl ${color}`
                        : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                    }`}
                    aria-label={`Show ${MODULES[index].title}`}
                    animate={{
                      scale: activeModule === index ? 1.15 : 1,
                      y: activeModule === index ? -8 : 0,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                  >
                    <motion.span>{letter}</motion.span>
                  </motion.button>
                );
              })}
            </div>

            {/* Module Display */}
            <div className="relative min-h-[500px]">
              <AnimatePresence mode="wait">
                  <motion.div
                    key={activeModule}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1] 
                      } 
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -20,
                      transition: { 
                        duration: 0.3,
                        ease: [0.5, 0, 1, 1] 
                      } 
                    }}
                    className="grid md:grid-cols-5 gap-8 py-6"
                  >
                    <motion.div className="md:col-span-3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {MODULES[activeModule].title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {MODULES[activeModule].description}
                      </p>
                      <ul className="space-y-3">
                        {MODULES[activeModule].bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${MODULES[activeModule].accent.dot} text-white shadow-sm`}>
                              <Check size={14} strokeWidth={3} />
                            </span>
                            <span>{bullet.text}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    <div className="md:col-span-2 rounded-2xl overflow-hidden">
                      <div className={`relative h-64 md:h-full overflow-hidden rounded-2xl ring-2 ${MODULES[activeModule].accent.ringSoft || MODULES[activeModule].accent.ring} bg-gradient-to-br ${MODULES[activeModule].accent.gradient}`}>
                        <motion.img
                          src={MODULES[activeModule].image.src}
                          alt={MODULES[activeModule].image.alt}
                          loading="lazy"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.6 } }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored for Every Role */}
      <section aria-labelledby="roles" className="relative py-2 mt-4 min-h-[80vh]">
        <div className="mx-auto px-4 lg:px-6">
          <header className="max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 ml-5">
              Tailored for Every Role
              <span className="block font-normal">in Your Institution</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm md:text-base">
              <span className="text-sky-600 font-semibold ml-5">CLASSA</span> offers specialized features for each member of your educational community—streamlining collaboration and boosting productivity.
            </p>
          </header>

          {/* Tabs (mobile): horizontal chips */}
          <div className="mt-8 flex flex-wrap gap-3 lg:hidden" role="tablist" aria-label="Roles tabs (mobile)">
            {ROLES.map((r, idx) => {
              const isActive = activeRole === idx;
              return (
                <button
                  key={r.title}
                  id={`role-tab-${idx}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-expanded={isActive}
                  aria-controls={`role-panel-${idx}`}
                  onClick={() => setActiveRole(prev => prev === idx ? -1 : idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx, 'horizontal', 'mobile')}
                  tabIndex={focusedIdx === idx ? 0 : -1}
                  ref={(el) => { mobileTabRefs.current[idx] = el; }}
                  className={
                    `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ` +
                    (isActive ? "bg-sky-600 text-white border-sky-600" : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200")
                  }
                >
                  <span className="text-base">{r.icon}</span>
                  <span className="font-medium">{r.title}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-10">
            {/* Left: image with frosted glass content overlay (smaller) */}
            <div className="relative lg:col-span-7 self-start mx-auto w-full max-w-4xl" ref={imageAreaRef}>
              <div className="relative overflow-hidden rounded-2xl ring-2 ring-sky-300 shadow-lg shadow-sky-100">
                <div className="aspect-[16/9] w-full lg:aspect-auto lg:h-[380px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={ROLE_IMAGES[currentIndex]?.src}
                      alt={ROLE_IMAGES[currentIndex]?.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </AnimatePresence>
                </div>
                {/* Frosted glass overlay with active content */}
                <AnimatePresence mode="wait">
                  {activeRole !== -1 && (
                    <motion.div
                      key={`panel-${currentIndex}`}
                      role="tabpanel"
                      id={`role-panel-${currentIndex}`}
                      aria-labelledby={`role-tab-${currentIndex}`}
                      tabIndex={-1}
                      ref={panelRef}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 lg:bottom-10 lg:left-10 lg:right-10 rounded-2xl bg-white/60 backdrop-blur-md ring-1 ring-white/50 shadow-xl p-6 md:p-8"
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                        {ROLES[currentIndex].title}
                      </h3>
                      <p className="mt-2 text-slate-700 text-sm md:text-base lg:text-lg">
                        {ROLES[currentIndex].text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right: vertical tabs with straight labels (desktop) */}
            <div className="lg:col-span-3 mb-8 lg:mb-0 hidden lg:flex lg:self-stretch lg:h-[380px]">
              <div className="flex flex-col w-full h-full items-stretch justify-start divide-y divide-slate-200" role="tablist" aria-orientation="vertical" aria-label="Roles tabs (desktop)">
                {ROLES.map((r, idx) => {
                  const isActive = activeRole === idx;
                  return (
                    <button
                      key={r.title}
                      id={`role-tab-${idx}`}
                      role="tab"
                      aria-selected={isActive}
                      aria-expanded={isActive}
                      aria-controls={`role-panel-${idx}`}
                      onClick={() => setActiveRole(prev => prev === idx ? -1 : idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx, 'vertical', 'desktop')}
                      tabIndex={focusedIdx === idx ? 0 : -1}
                      ref={(el) => { desktopTabRefs.current[idx] = el; }}
                      className={`relative group w-full border-l-4 border-transparent hover:border-sky-400 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 px-6 py-4 text-left flex-1 flex transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg ${isActive ? 'border-l-sky-500 bg-gradient-to-r from-sky-100 to-blue-100 shadow-md scale-[1.01]' : 'hover:translate-x-1'}`}
                      title={r.title}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-sky-400 to-sky-600 rounded-r-full shadow-sm" />
                      )}
                      <span className="flex items-center justify-between gap-4 w-full relative z-10">
                        <span className={`text-lg font-semibold tracking-tight transition-colors duration-200 ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>{r.title}</span>
                        <div className={`transition-all duration-300 ease-out ${isActive ? 'rotate-180 scale-110' : 'group-hover:scale-110 group-hover:rotate-90'}`}>
                          {isActive ? (
                            <Minus className="text-sky-600 drop-shadow-sm" size={26} strokeWidth={2.5} />
                          ) : (
                            <div className="flex items-center gap-1">
                              <Plus className="text-slate-400 group-hover:text-sky-500 transition-colors duration-200 flex-shrink-0" size={26} strokeWidth={2.5} />
                              
                            </div>
                            
                          )}
                        </div>
                        <>
                          <span className="text-[10px] font-medium text-slate-400 group-hover:text-sky-500 transition-colors duration-200 writing-vertical-rl uppercase tracking-wider">
                                Click me
                          </span>
                          </>
                      </span>
                    </button>
                  );
                })}
                {/* Right edge divider removed; using internal divide-y lines */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// (Removed old RoleCard component in favor of the new, image+list layout)