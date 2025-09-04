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
    title: <span className="bg-whitle text-[#007DC6] px-2 py-1 rounded-md">Content Management System</span>,
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
    title: <span className="bg-white text-[#EDC531] px-2 py-1 rounded-md">Learning Management System</span>,
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
    title: <span className="bg-white text-[#12881F] px-2 py-1 rounded-md">Assessment Management System</span>,
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
    title: <span className="bg-white text-[#A422D0] px-2 py-1 rounded-md">SenseAI – Learning Intelligence</span>,
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
    title: <span className="bg-white text-[#F29553] px-2 py-1 rounded-md">School Management System</span>,
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
    title: <span className="bg-white text-[#E75C5C] px-2 py-1 rounded-md">Admission Management System</span>,
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
    title: "🧑‍💼Leader",
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
    title: "🧑 Students",
    text:
      "Personalized learning journeys adapt to individual styles and pace, supported by interactive tools like flashcards, summaries, mnemonics, and quizzes—plus immediate feedback to highlight strengths.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "👨‍👩 Parents",
    text:
      "Clear, timely updates keep parents informed about progress and deadlines, with secure communication channels that foster active engagement and support at home.",
  },
];

function ClassaPage() {
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

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
    direction: 'horizontal' | 'vertical',
    refs: React.MutableRefObject<(HTMLButtonElement | null)[]>
  ) => {
    const key = e.key;
    const last = ROLES.length - 1;
    const go = (to: number) => {
      setActiveRole(to);
      refs.current[to]?.focus();
    };

    if (key === 'ArrowDown' || (direction === 'vertical' && key === 'ArrowRight')) {
      e.preventDefault();
      const next = (idx + 1) % ROLES.length;
      go(next);
      return;
    }
    if (key === 'ArrowUp' || (direction === 'vertical' && key === 'ArrowLeft')) {
      e.preventDefault();
      const prev = (idx - 1 + ROLES.length) % ROLES.length;
      go(prev);
      return;
    }
    if (key === 'Home') { e.preventDefault(); go(0); return; }
    if (key === 'End') { e.preventDefault(); go(ROLES.length - 1); return; }
    if (key === 'Enter' || key === ' ') {
      e.preventDefault();
      setActiveRole(prev => (prev === idx ? -1 : idx));
      return;
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection_copy />
      
      {/* Role Selection */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12 px-2">
            Designed for Every Role in Education
          </h2>
          
          {/* Mobile accordion */}
          <div className="lg:hidden space-y-4">
            {ROLES.map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  ref={el => { if (el) mobileTabRefs.current[index] = el; }}
                  onClick={() => setActiveRole(activeRole === index ? -1 : index)}
                  onKeyDown={(e) => handleKeyDown(e, index, 'horizontal', mobileTabRefs)}
                  className={`w-full p-4 sm:p-6 text-left flex justify-between items-center ${activeRole === index ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                  aria-expanded={activeRole === index}
                  aria-controls={`role-panel-${index}`}
                >
                  <h3 className="text-lg sm:text-xl font-semibold">{role.title}</h3>
                  {activeRole === index ? (
                    <Minus className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {activeRole === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-6 pt-0 sm:pt-0 text-gray-600 text-sm sm:text-base">
                        {role.text}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          {/* Desktop grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {ROLES.map((role, index) => {
              const isActive = activeRole === index;
              return (
                <button
                  key={index}
                  ref={(el: HTMLButtonElement | null) => { 
                    if (el) desktopTabRefs.current[index] = el; 
                  }}
                  onClick={() => setActiveRole(isActive ? -1 : index)}
                  onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => 
                    handleKeyDown(e, index, 'horizontal', desktopTabRefs)
                  }
                  className={`p-6 rounded-xl text-left transition-all ${
                    isActive ? 'bg-blue-50 ring-2 ring-blue-500' : 'bg-white hover:bg-gray-50 shadow-sm'
                  }`}
                  aria-expanded={isActive}
                  aria-controls={`role-panel-${index}`}
                >
                  <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {role.text.length > 100 ? `${role.text.substring(0, 100)}...` : role.text}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Modules */}
      <section ref={modulesRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2">
            Comprehensive School Management Solutions
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Module List - Mobile */}
            <div className="lg:hidden relative
              after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-gradient-to-l after:from-white after:to-transparent after:pointer-events-none">
              <div className="flex space-x-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                {MODULES.map((module, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(`module-${index}`);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${activeModule === index ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {typeof module.title === 'string' ? module.title.split(' ')[0] : 'Module'}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Module List - Desktop */}
            <div className="hidden lg:block w-full lg:w-1/3 xl:w-1/4">
              <div className="sticky top-24 space-y-2">
                {MODULES.map((module, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(`module-${index}`);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all text-sm sm:text-base ${activeModule === index ? 'bg-blue-50 text-blue-700 ring-2 ring-blue-500 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {module.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Module Details */}
            <div className="w-full lg:w-2/3 xl:w-3/4 space-y-8 sm:space-y-12">
              {MODULES.map((module, index) => (
                <div key={index} id={`module-${index}`} className="scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                    transition={{ duration: 0.4 }}
                    className={`p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br ${module.accent.gradient} border border-gray-100 shadow-sm`}
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      <div className="md:w-1/2">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{module.title}</h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">{module.description}</p>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {module.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start">
                              <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 sm:mt-2.5 mr-2.5 sm:mr-3 flex-shrink-0 ${bullet.colorClass}`}></span>
                              <span className="text-sm sm:text-base text-gray-700">{bullet.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:w-1/2 flex items-center justify-center">
                        <div className={`p-0.5 sm:p-1 rounded-xl sm:rounded-2xl bg-white shadow-sm sm:shadow-md ring-1 ring-gray-100 ${module.accent.ring} overflow-hidden w-full`}>
                          <img
                            src={module.image.src}
                            alt={module.image.alt}
                            className="w-full h-auto rounded-lg sm:rounded-xl object-cover"
                            loading="lazy"
                            width={500}
                            height={300}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>  
      </section>
    </main>
  );
};

export default ClassaPage;