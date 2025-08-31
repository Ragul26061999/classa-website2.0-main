import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Star,
  LayoutGrid,
  ClipboardCheck,
  FileSearch,
  BarChart3,
  Users,
} from "lucide-react";

// Pastel glass palette helpers
const pastelGlass =
  "bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.06)]";

const problems = [
  {
    id: 1,
    title: "Fragmented Systems",
    desc: "Unify academics, assessments, and administration into a single platform.",
    icon: LayoutGrid,
    accent: "from-sky-200/70 to-indigo-200/70",
    iconColor: "text-sky-700",
    bubbleRing: "ring-sky-200/70",
    span: "lg:col-span-5 lg:row-span-2 md:col-span-6",
  },
  {
    id: 2,
    title: "Manual Administrative Overhead",
    desc: "Automate workflows like attendance, communication, and scheduling.",
    icon: ClipboardCheck,
    accent: "from-emerald-200/70 to-teal-200/70",
    iconColor: "text-emerald-700",
    bubbleRing: "ring-emerald-200/70",
    span: "lg:col-span-3 md:col-span-6",
  },
  {
    id: 3,
    title: "Ineffective Assessments",
    desc: "Generate intelligent tests and insightful feedback with SenseAI.",
    icon: FileSearch,
    accent: "from-amber-200/70 to-orange-200/70",
    iconColor: "text-amber-700",
    bubbleRing: "ring-amber-200/70",
    span: "lg:col-span-4 md:col-span-6",
  },
  {
    id: 4,
    title: "Poor Data Visibility",
    desc: "Access real-time dashboards for student, teacher, and operational performance.",
    icon: BarChart3,
    accent: "from-fuchsia-200/70 to-pink-200/70",
    iconColor: "text-fuchsia-700",
    bubbleRing: "ring-fuchsia-200/70",
    span: "lg:col-span-4 md:col-span-6",
  },
  {
    id: 5,
    title: "Limited Parent Involvement",
    desc: "Engage parents with updates, reports and two-way messaging.",
    icon: Users,
    accent: "from-purple-200/70 to-sky-200/70",
    iconColor: "text-purple-700",
    bubbleRing: "ring-purple-200/70",
    span: "lg:col-span-3 md:col-span-6",
  },
];

// Subtle parallax tilt wrapper
function TiltCard({ children, className, delay = 0.06 }) {
  const ref = React.useRef(null);
  const [transform, setTransform] = React.useState("perspective(1000px)");

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateX = (0.5 - y) * 8; // max 8deg
    const rotateY = (x - 0.5) * 8;
    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.01)`
    );
  };
  const handleLeave = () => setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay }}
      style={{ transform, willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_80%_at_10%_10%,#dbeafe_0%,#ffffff_50%)]">
      {/* Header Section */}
      <section className="relative text-center py-28 px-6">
        {/* soft blobs */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute -top-16 -right-10 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl"/>
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl"/>

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
          className="mt-8 max-w-3xl mx-auto text-[1.05rem] text-gray-600 leading-relaxed"
        >
          CLASSA is a next-generation education technology platform designed to streamline academic delivery, student support, and school management with one unified AI-driven system.
        </motion.p>
        <Star className="w-7 h-7 text-sky-500 mx-auto mt-7" />
      </section>

      {/* Bento Grid Section */}
      <section className="py-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14 tracking-tight">
          What <span className="text-sky-600">CLASSA</span> Solves
        </h2>

        {/* Proper Bento: 12-column grid, consistent row height; large card spans 2 rows. */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-7 [grid-auto-rows:minmax(240px,auto)]">
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

                <div className="relative z-10 p-8 flex h-full flex-col">
                  {/* icon bubble with accent ring */}
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 backdrop-blur ring-2 ${p.bubbleRing} shadow-sm`}>
                    <Icon className={`h-6 w-6 ${p.iconColor}`} />
                  </div>
                  <h3 className="text-[1.0625rem] md:text-[1.125rem] font-semibold text-gray-900 tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-gray-700/95 text-[0.95rem] leading-relaxed">{p.desc}</p>
                </div>

                {/* subtle top sheen */}
                <div className="pointer-events-none absolute left-0 right-0 -top-1 h-20 bg-gradient-to-b from-white/55 to-transparent" />
              </TiltCard>
            );
          })}
        </div>

        <div className="flex justify-center mt-18">
          <Button size="lg" className="rounded-2xl px-8 py-6 text-base shadow-md">
            Explore Modules
          </Button>
        </div>
      </section>
    </div>
  );
}
