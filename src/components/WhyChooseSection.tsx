"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, BarChart3, Users2, MessageSquareHeart, Globe2, LucideIcon } from "lucide-react";

// ---- Utility ----
const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 16,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  show: (i: number = 0) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.08 * i, 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  })
};

// ---- Color schemes (pastel) ----
interface Scheme {
  iconFrom: string;
  iconTo: string;
  border: string;
  underlineFrom: string;
  underlineTo: string;
  blobFrom: string;
  blobTo: string;
  text: string;
}

const pastelSchemes: Scheme[] = [
  // 0 - AI That Works for You
  {
    iconFrom: "from-rose-400",
    iconTo: "to-pink-300",
    border: "border-rose-200",
    underlineFrom: "from-rose-400",
    underlineTo: "to-pink-300",
    blobFrom: "from-rose-200",
    blobTo: "to-pink-200",
    text: "text-rose-500",
  },
  // 1 - Built for India
  {
    iconFrom: "from-sky-400",
    iconTo: "to-cyan-300",
    border: "border-sky-200",
    underlineFrom: "from-sky-400",
    underlineTo: "to-cyan-300",
    blobFrom: "from-sky-200",
    blobTo: "to-cyan-200",
    text: "text-sky-500",
  },
  // 2 - Boost Results
  {
    iconFrom: "from-amber-400",
    iconTo: "to-orange-300",
    border: "border-amber-200",
    underlineFrom: "from-amber-400",
    underlineTo: "to-orange-300",
    blobFrom: "from-amber-200",
    blobTo: "to-orange-200",
    text: "text-amber-500",
  },
  // 3 - Teachers Love It
  {
    iconFrom: "from-emerald-400",
    iconTo: "to-teal-300",
    border: "border-emerald-200",
    underlineFrom: "from-emerald-400",
    underlineTo: "to-teal-300",
    blobFrom: "from-emerald-200",
    blobTo: "to-teal-200",
    text: "text-emerald-500",
  },
  // 4 - Parents Stay Connected
  {
    iconFrom: "from-violet-400",
    iconTo: "to-fuchsia-300",
    border: "border-violet-200",
    underlineFrom: "from-violet-400",
    underlineTo: "to-fuchsia-300",
    blobFrom: "from-violet-200",
    blobTo: "to-fuchsia-200",
    text: "text-violet-500",
  },
];

// ---- Feature Card ----
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  index: number;
  onInView: (index: number) => void;
  scheme: Scheme;
}

function FeatureCard({ icon: Icon, title, children, index, onInView, scheme }: FeatureCardProps) {
  const [isActive, setIsActive] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <motion.div
      custom={{ index, direction: scrollDirection }}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      viewport={{
        amount: 0.4,
        margin: "-20% 0px -20% 0px",
        once: false
      }}
      onViewportEnter={(entry) => {
        if (entry) {
          setIsActive(true);
          onInView(index);
        }
      }}
      onViewportLeave={(entry) => {
        if (entry && scrollDirection === 'up') {
          // When scrolling up and leaving viewport, activate previous card
          const prevIndex = Math.max(0, index - 1);
          onInView(prevIndex);
        }
      }}
      variants={{
        hidden: (custom) => ({
          opacity: 0.6,
          y: custom.direction === 'down' ? 40 : -40,
          scale: 0.95,
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        }),
        show: (custom) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: custom.index * 0.08,
            ease: [0.4, 0, 0.2, 1],
            y: {
              type: 'spring',
              stiffness: 120,
              damping: 20,
              mass: 0.8
            }
          }
        })
      }}
      className={`group relative overflow-hidden rounded-2xl border bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg max-w-lg mx-auto lg:sticky lg:top-[calc(50vh+3rem)] lg:-translate-y-1/2 ${scheme.border}`}
      style={{
        zIndex: 20 + index,
        marginTop: index === 0 ? 0 : "8rem",
        opacity: isActive ? 1 : 0.7,
        scale: isActive ? 1 : 0.96,
        transform: isActive ? 'translateY(0)' : (scrollDirection === 'down' ? 'translateY(20px)' : 'translateY(-20px)'),
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      } as React.CSSProperties}
    >
      <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-60 blur-2xl ${scheme.blobFrom} ${scheme.blobTo}`} />
      <div className="flex items-center gap-3">
        <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-md ${scheme.iconFrom} ${scheme.iconTo}`}>
          <Icon size={22} />
        </div>
        <h4 className={`text-lg font-semibold tracking-tight ${scheme.text}`}>{title}</h4>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{children}</p>
      <div className={`mt-4 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${scheme.underlineFrom} ${scheme.underlineTo}`} />
    </motion.div>
  );
}

// Track scroll direction
const useScrollDirection = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setDirection(currentScrollY > lastScrollY ? 'down' : 'up');
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return direction;
};

// ---- Mock visual (left column) ----
function HeroVisual({ active, scheme }: { active: number; scheme: Scheme }) {
  const scrollDirection = useScrollDirection();
  const [visibleCard, setVisibleCard] = useState<number | null>(null);
  
  useEffect(() => {
    // Only update visible card after a small delay to prevent flickering
    const timer = setTimeout(() => {
      setVisibleCard(active);
    }, 50);
    return () => clearTimeout(timer);
  }, [active]);
  
  const getAnimationVariant = (i: number): Variants => ({
    hidden: (custom: { isScrollingDown: boolean }) => ({
      opacity: 0,
      y: custom.isScrollingDown ? 30 : -30,
      transition: { 
        duration: 0.3, 
        ease: [0.4, 0, 0.2, 1]
      }
    }),
    show: (custom: { isScrollingDown: boolean }) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: i * 0.1,
        ease: [0.4, 0, 0.2, 1],
        y: { 
          type: 'spring',
          stiffness: 100,
          damping: 15,
          mass: 0.5
        }
      }
    })
  });

  return (
    <div className="relative mt-16 -mb-16">
      {/* glow */}
      <div className="absolute -inset-8 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-60 blur-3xl bg-gradient-to-br ${scheme.blobFrom} ${scheme.blobTo}`} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`rounded-3xl border bg-white/80 p-6 shadow-xl backdrop-blur-sm ${scheme.border}`}
      >
        {/* Top bar */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles size={16} className={scheme.text} /> {[
              "Smart Dashboard",
              "India-Ready",
              "Results Tracker",
              "Teacher Tools",
              "Parent Updates",
            ][active]}
          </div>
        </div>

        {/* Visual content per feature */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            custom={{ direction: scrollDirection }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: (custom) => ({
                opacity: 0,
                y: custom.direction === 'down' ? 50 : -50,
                scale: 0.98
              }),
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }
              },
              exit: (custom) => ({
                opacity: 0,
                y: custom.direction === 'down' ? -50 : 50,
                scale: 0.98,
                transition: {
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }
              })
            }}
            style={{
              position: 'relative',
              zIndex: 10 - (visibleCard !== null ? Math.abs(visibleCard - active) : 0)
            }}
          >
            {active === 0 && (
              <div className="grid grid-cols-12 gap-4">
                {/* Progress card */}
                <div className={`col-span-5 rounded-xl border bg-white p-4 ${scheme.border}`}>
                  <p className="text-xs font-semibold text-slate-500">Class Performance</p>
                  <h5 className="mt-1 text-2xl font-bold text-slate-800">+18.6%</h5>
                  <div className="mt-3 space-y-2">
                    {[62, 54, 72, 80, 66, 78, 90].map((v, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-10 text-[10px] font-semibold text-slate-400">W{i + 1}</span>
                        <div className="h-2 flex-1 overflow-hidden rounded bg-slate-100">
                          <motion.div
                            custom={{ isScrollingDown: scrollDirection === 'down' }}
                            initial="hidden"
                            animate="show"
                            variants={getAnimationVariant(i)}
                            key={`${active}-${i}`}
                            className={`h-full bg-gradient-to-r ${scheme.iconFrom} ${scheme.iconTo}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learners card */}
                <div className="col-span-7 grid gap-4">
                  <div className={`rounded-xl border bg-white p-4 ${scheme.border}`}>
                    <p className="text-xs font-bold text-slate-500">Personalized Paths</p>
                    <div className="mt-2 grid grid-cols-3 gap-3">
                      {["Beginner", "Core", "Advanced"].map((tier) => (
                        <motion.div
                          key={tier}
                          custom={{ isScrollingDown: scrollDirection === 'down' }}
                          initial="hidden"
                          animate="show"
                          variants={getAnimationVariant(0.2)}
                          className={`rounded-lg border bg-slate-50 px-3 py-2 text-center text-[11px] font-semibold text-slate-600 ${scheme.border}`}
                        >
                          {tier}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className={`rounded-xl border bg-white p-4 ${scheme.border}`}>
                    <p className="text-xs font-semibold text-slate-500">Realtime Insights</p>
                    <div className="mt-2 grid grid-cols-4 gap-3 text-center">
                      {["Accuracy", "Speed", "Mastery", "Engagement"].map((k, i) => (
                        <motion.div
                          key={k}
                          custom={{ isScrollingDown: scrollDirection === 'down' }}
                          initial="hidden"
                          animate="show"
                          variants={getAnimationVariant(i * 0.1)}
                          className={`rounded-lg border bg-slate-50 px-2 py-3 font-semibold ${scheme.border}`}
                        >
                          <div className={`text-xl font-bold ${scheme.text}`}>{[92, 1.3, 87, 76][i]}{i === 1 ? "x" : "%"}</div>
                          <div className="mt-1 text-[11px] font-semibold text-slate-500">{k}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {active === 1 && (
              <div className="grid grid-cols-12 gap-4">
                <div className={`col-span-7 rounded-xl border bg-white p-4 ${scheme.border}`}>
                  <p className="text-xs font-semibold text-slate-500">Curriculum Coverage</p>
                  <div className="mt-2 grid grid-cols-2 gap-3 text-[12px] text-slate-700">
                    {[
                      "CBSE • State Boards",
                      "NEP-aligned",
                      "regionally available",
                      "Low-bandwidth mode",
                    ].map((t, i) => (
                      <div key={t} className={`rounded-lg border bg-slate-50 p-3 font-semibold ${scheme.border}`}>{t}</div>
                    ))}
                  </div>
                </div>
                <div className={`col-span-5 grid place-items-center rounded-xl border bg-white p-4 text-slate-700 ${scheme.border}`}>
                  <Globe2 className={scheme.text} />
                  <p className="mt-2 text-sm font-semibold">Built for India</p>
                </div>
              </div>
            )}

            {active === 2 && (
              <div className="grid grid-cols-12 gap-4">
                <div className={`col-span-6 rounded-xl border bg-white p-4 ${scheme.border}`}>
                  <p className="text-xs font-semibold text-slate-500">Mastery Progress</p>
                  <div className="mt-3 space-y-3">
                    {[
                      { k: "Math", v: 84 },
                      { k: "Science", v: 78 },
                      { k: "English", v: 91 },
                    ].map(({ k, v }) => (
                      <div key={k}>
                        <div className="mb-1 flex items-center justify-between text-[12px] font-semibold text-slate-600">
                          <span>{k}</span><span>{v}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded bg-slate-100">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${v}%` }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${scheme.iconFrom} ${scheme.iconTo}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`col-span-6 grid place-items-center rounded-xl border bg-white p-4 text-slate-700 ${scheme.border}`}>
                  <BarChart3 className={scheme.text} />
                  <p className="mt-2 text-sm font-semibold">Results trending up</p>
                </div>
              </div>
            )}

            {active === 3 && (
              <div className="grid grid-cols-12 gap-4">
                <div className={`col-span-7 rounded-xl border bg-white p-4 ${scheme.border}`}>
                  <p className="text-xs font-semibold text-slate-500">Auto-generated</p>
                  <ul className="mt-2 space-y-2 text-[13px] text-slate-700">
                    {[
                      "Lesson plan for Algebra",
                      "Worksheet: Fractions (20 Qs)",
                      "Quiz: Photosynthesis (MCQ)",
                    ].map((t, i) => (
                      <motion.li
                        key={t}
                        custom={{ isScrollingDown: scrollDirection === 'down' }}
                        initial="hidden"
                        animate="show"
                        variants={getAnimationVariant(i * 0.05)}
                        className={`flex items-center gap-2 rounded-lg border bg-slate-50 p-2 font-semibold ${scheme.border}`}
                      >
                        <Users2 size={16} className={scheme.text} /> {t}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className={`col-span-5 grid place-items-center rounded-xl border bg-white p-4 text-slate-700 ${scheme.border}`}>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${scheme.text}`}>2.5h</div>
                    <div className="text-xs font-semibold text-slate-500">saved per week</div>
                  </div>
                </div>
              </div>
            )}

            {active === 4 && (
              <div className="grid grid-cols-12 gap-4">
                <div className={`col-span-6 rounded-xl border ${scheme.border} bg-white p-4`}>
                  <p className="text-xs font-semibold text-slate-500">Parent Notifications</p>
                  <div className="mt-2 space-y-2 text-[13px] text-slate-700">
                    {[
                      "Weekly report sent to +2 guardians",
                      "Attendance alert: 1 day absent",
                      "New message from teacher",
                    ].map((msg, i) => (
                      <motion.div
                        key={msg}
                        custom={{ isScrollingDown: scrollDirection === 'down' }}
                        initial="hidden"
                        animate="show"
                        variants={getAnimationVariant(i * 0.08)}
                        className={`flex items-center gap-2 rounded-lg border ${scheme.border} bg-slate-50 p-2 font-semibold`}
                      >
                        <MessageSquareHeart size={16} className={scheme.text} /> {msg}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className={`col-span-6 grid place-items-center rounded-xl border ${scheme.border} bg-white p-4 text-slate-700`}>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${scheme.text}`}>On track</div>
                    <div className="text-xs font-semibold text-slate-500">No action needed</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* floating badge */}
      {/* <motion.div
{{ ... }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="pointer-events-none absolute -right-6 -top-6 flex items-center gap-2 rounded-2xl border border-blue-200 bg-white/90 px-3 py-2 text-xs text-blue-700 shadow-lg backdrop-blur"
      >
        <ShieldIcon /> Trusted by 200+ schools
      </motion.div> */}
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

// ---- Main Section ----
export default function WhyChooseSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="classa" className="relative isolate w-full py-20 scroll-mt-24 bg-[#F7FAFC]">

      {/* background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[conic-gradient(at_20%_10%,#e0f2fe,transparent_30%)]" />
      <div className="mx-auto max-w-6xl px-8">
      <div className="relative lg:min-h-[250vh] -pb-2">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 lg:sticky lg:top-24 lg:z-[80] lg:bg-[#F7FAFC]/80 lg:backdrop-blur-sm lg:py-2 mb-"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-600 backdrop-blur">
          <Sparkles size={16} /> Modern AI for Learning
        </div>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          Why Schools & Students Choose <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">CLASSA</span>
        </h2>
        <p className="mt-3  max-w-2xl text-slate-600">
          Smarter learning powered by AI, built for India's curriculum. Clear insights for teachers. Real results for students.
        </p>
      </motion.div>

      {/* content */}
      <div className="grid grid-cols-12 items-start gap-10 mt-">
        <div className="col-span-6 lg:sticky lg:top-[calc(50vh+3rem)] lg:-translate-y-1/2 lg:self-start mt-16">
          <HeroVisual active={active} scheme={pastelSchemes[active]} />
        </div>
        <div className="col-span-6">
          <div className="relative lg:min-h-[300vh]">
            <FeatureCard index={0} icon={Brain} title="AI That Works for You" onInView={setActive} scheme={pastelSchemes[0]}>
              Adaptive learning paths, question generation, and feedback tuned to each learner — not just a chatbot.
            </FeatureCard>
            <FeatureCard index={1} icon={Globe2} title="Built for India" onInView={setActive} scheme={pastelSchemes[1]}>
              Covers CBSE/State boards with multilingual support and low-bandwidth optimizations.
            </FeatureCard>
            <FeatureCard index={2} icon={BarChart3} title="Boost Results" onInView={setActive} scheme={pastelSchemes[2]}>
              Track mastery and growth with live dashboards and evidence-based interventions.
            </FeatureCard>
            <FeatureCard index={3} icon={Users2} title="Teachers Love It" onInView={setActive} scheme={pastelSchemes[3]}>
              Save hours with auto-generated lesson plans, worksheets, and analytics you'll actually use.
            </FeatureCard>
            <FeatureCard index={4} icon={MessageSquareHeart} title="Parents Stay Connected" onInView={setActive} scheme={pastelSchemes[4]}>
              Simple progress reports and alerts keep families informed without extra work.
            </FeatureCard>
          </div>
        </div>
      </div>

      </div>

      </div>
    </section>
  );
}