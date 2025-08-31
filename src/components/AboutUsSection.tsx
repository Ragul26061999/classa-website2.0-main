"use client";

import { Shield, Cog, Crosshair, Lightbulb, Eye, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#F7FAFC] text-[#1B1B1B] overflow-hidden scroll-mt-24 flex items-center"
    >
      {/* Soft Blue Blur Spots */}
      <div className="pointer-events-none absolute top-10 left-10 h-48 w-48 md:h-64 md:w-64 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-56 w-56 md:h-72 md:w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-40 w-40 md:h-56 md:w-56 rounded-full bg-blue-200/30 blur-2xl" />

      {/* Container */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16 flex flex-col justify-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-medium tracking-[0.2em] text-[#8A9BAE] uppercase"
        >
          About Us
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1E2D3D]"
        >
          CLASSA: Next-Generation Education Platform
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-[#64748B]"
        >
          CLASSA is a modern education platform that brings teaching, student support, and school management together in one smart AI-powered system
        </motion.p>

        <div className="relative flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
          {/* White Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mt-10 rounded-[28px] bg-white p-6 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] w-full lg:w-10/12"
          >
            <div className="flex flex-col gap-10">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6 items-center"
              >
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-[#3B82F6]" />
                    <h3 className="text-2xl font-semibold text-[#3B82F6]">Vision</h3>
                  </div>
                  <p className="text-[15px] leading-7 text-[#64748B]">
                    Revolutionize education with AI-driven learning and automation. Enhance accessibility through smart digital platforms. Optimize school operations with seamless automation.
                  </p>
                </div>
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100">
                  <Image 
                    src="/image/vision.png" 
                    alt="Vision Illustration"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6 items-center"
              >
                <div className="order-2 md:order-1">
                  <div className="mb-2 flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-[#3B82F6]" />
                    <h3 className="text-2xl font-semibold text-[#3B82F6]">Mission</h3>
                  </div>
                  <p className="text-[15px] leading-7 text-[#64748B]">
                    To transform education through adaptive learning, smart assessments, automated school management, and seamless collaboration—powered by innovation and technology.
                  </p>
                </div>
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100 order-1 md:order-2">
                  <Image 
                    src="/image/mission.png" 
                    alt="Mission Illustration"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Pill - Now outside and to the right of the white card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col justify-center gap-4 rounded-2xl bg-[#3B82F6] p-6 shadow-[0_12px_24px_rgba(0,0,0,0.12)] self-stretch my-10 w-[280px] flex-shrink-0"
          >
            {[
              { icon: Shield, label: "AI-Driven" },
              { icon: Cog, label: "Automation" },
              { icon: Crosshair, label: "Smart" },
              { icon: Lightbulb, label: "Innovation" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center">
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <span className="text-[15px]">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center w-full"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
            <Link
              href="/about"
              className="rounded-xl bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_10px_rgba(59,130,246,0.25)] transition-colors duration-200 hover:bg-[#3776ea]"
            >
              Know More About Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
