"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Brain, Sparkles, BarChart3, Users2, MessageSquareHeart, Globe2, LucideIcon } from "lucide-react";

// ---- Utility ----
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" } })
};

// ---- Feature Card ----
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  index: number;
}

function FeatureCard({ icon: Icon, title, children, index }: FeatureCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg max-w-lg mx-auto lg:sticky lg:top-[calc(50vh+3rem)] lg:-translate-y-1/2"
      style={{ zIndex: 20 + index, marginTop: index === 0 ? 0 : "10rem" } as React.CSSProperties}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-sky-200 to-blue-200 opacity-60 blur-2xl" />
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md">
          <Icon size={22} />
        </div>
        <h4 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h4>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{children}</p>
      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-600 to-sky-400 transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}

// ---- Mock visual (left column) ----
function HeroVisual() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-8 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur-sm"
      >
        {/* Top bar */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles size={16} /> Smart Dashboard
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Progress card */}
          <div className="col-span-5 rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs text-slate-500">Class Performance</p>
            <h5 className="mt-1 text-2xl font-semibold text-slate-800">+18.6%</h5>
            <div className="mt-3 space-y-2">
              {[62, 54, 72, 80, 66, 78, 90].map((v, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-10 text-[10px] text-slate-400">W{i + 1}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded bg-slate-100">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${v}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-600 to-sky-400" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learners card */}
          <div className="col-span-7 grid gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">Personalized Paths</p>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {["Beginner", "Core", "Advanced"].map((tier) => (
                  <motion.div 
                    key={tier} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-[11px] text-slate-600"
                  >
                    {tier}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">Realtime Insights</p>
              <div className="mt-2 grid grid-cols-4 gap-3 text-center">
                {["Accuracy", "Speed", "Mastery", "Engagement"].map((k, i) => (
                  <motion.div 
                    key={k} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-3"
                  >
                    <div className="text-xl font-semibold text-slate-800">{[92, 1.3, 87, 76][i]}{i === 1 ? "x" : "%"}</div>
                    <div className="mt-1 text-[11px] text-slate-500">{k}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating badge */}
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
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
  return (
    <section id="classa" className="relative isolate w-full py-20 scroll-mt-24 bg-[#F7FAFC]">
      {/* background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[conic-gradient(at_20%_10%,#e0f2fe,transparent_30%)]" />
      <div className="mx-auto max-w-6xl px-8">
      <div className="relative lg:min-h-[500vh]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 lg:sticky lg:top-24 lg:z-[80] lg:bg-[#F7FAFC]/80 lg:backdrop-blur-sm lg:py-2"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-600 backdrop-blur">
          <Sparkles size={16} /> Modern AI for Learning
        </div>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          Why Schools & Students Choose <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">CLASSA</span>
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Smarter learning powered by AI, built for India's curriculum. Clear insights for teachers. Real results for students.
        </p>
      </motion.div>

      {/* content */}
      <div className="grid grid-cols-12 items-start gap-10">
        <div className="col-span-6 lg:sticky lg:top-[calc(50vh+3rem)] lg:-translate-y-1/2 lg:self-start">
          <HeroVisual />
        </div>
        <div className="col-span-6">
          <div className="relative lg:min-h-[500vh]">
            <FeatureCard index={0} icon={Brain} title="AI That Works for You">
              Adaptive learning paths, question generation, and feedback tuned to each learner — not just a chatbot.
            </FeatureCard>
            <FeatureCard index={1} icon={Globe2} title="Built for India">
              Covers CBSE/State boards with multilingual support and low-bandwidth optimizations.
            </FeatureCard>
            <FeatureCard index={2} icon={BarChart3} title="Boost Results">
              Track mastery and growth with live dashboards and evidence-based interventions.
            </FeatureCard>
            <FeatureCard index={3} icon={Users2} title="Teachers Love It">
              Save hours with auto-generated lesson plans, worksheets, and analytics you'll actually use.
            </FeatureCard>
            <FeatureCard index={4} icon={MessageSquareHeart} title="Parents Stay Connected">
              Simple progress reports and alerts keep families informed without extra work.
            </FeatureCard>
          </div>
        </div>
      </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-14 flex items-center gap-4"
      >
        <motion.a
          href="#demo"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-2xl bg-gradient-to-r from-blue-700 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform"
        >
          Book a live demo
        </motion.a>
        <motion.a
          href="#docs"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
        >
          Explore features
        </motion.a>
      </motion.div>
      </div>
    </section>
  );
}