"use client";

import React from "react";
import { Phone, MapPin, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  
  return (
    <section id="contact" className="w-full bg-white text-zinc-900 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Heading */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight bg-gradient-to-r from-[#9333ea] to-[#6b21a8] via-[#c084fc] text-transparent bg-clip-text">Easy to Reach</h2>
          <p className="mt-1 text-3xl sm:text-4xl font-light bg-gradient-to-r from-[#a855f7] to-[#818cf8] via-[#60a5fa] text-transparent bg-clip-text sm:ml-12 md:ml-20">Ready to Help</p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600">Get in Touch with the CLASSA Team</p>
        </motion.div>

        {/* Content Row */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Image + Info cards */}
          <motion.div
            className="relative w-full lg:flex-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl ring-1 ring-zinc-200 hover:scale-[1.01] sm:hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/image/contactus.png"
                alt="Classroom chairs"
                className="h-64 sm:h-[400px] md:h-[480px] lg:h-[520px] w-full object-cover object-center sm:object-[12%_50%] md:object-[8%_50%] xl:object-[6%_50%] saturate-[0.9] contrast-[0.98] brightness-[1.02]"
                loading="lazy"
              />
              {/* Subtle bottom gradient to improve legibility of overlay cards */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
            </div>

            {/* Overlay: Challenge/Idea card */}
            <motion.div
              className="absolute left-4 right-4 sm:left-6 sm:right-auto sm:w-[calc(100%-3rem)] md:w-[480px] lg:w-[520px] -bottom-32 sm:-bottom-40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-zinc-200 hover:shadow-xl transition-all duration-500">
                <div className="p-4 sm:p-6">
                  <p className="text-base sm:text-lg font-semibold">Have a Challenge or an Idea?</p>
                  <p className="mt-1 sm:mt-2 text-sm leading-relaxed text-zinc-600">
                    Fill out the form, and let's talk about how we can support your business with tailored solutions.
                  </p>
                </div>
              </div>

              {/* Contact & Address cards */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard 
                  icon={<Phone className="h-5 w-5" />} 
                  title="Call us at:" 
                  value="+91 84899 18000" 
                  className="sm:col-span-2"
                />
                <InfoCard
                  icon={<MapPin className="h-5 w-5" />}
                  title="Visit us at:"
                  value={
                    <>
                      <p className="text-sm sm:text-base">Techmatrix AI Private Limited</p>
                      <p className="text-xs sm:text-sm text-zinc-600">169, Nanjundapuram Road</p>
                      <p className="text-xs sm:text-sm text-zinc-600">Ramanathapuram, Coimbatore-641045</p>
                      <p className="text-xs sm:text-sm text-zinc-600">Tamil Nadu, India</p>
                    </>
                  }
                  className="sm:col-span-2"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form Card */}
          <motion.div
            className="relative w-full lg:w-[480px] xl:w-[560px] lg:sticky lg:top-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl ring-1 ring-zinc-200">
              {/* Card header */}
              <div className="relative bg-[#4aa8ff]">
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-white">
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/20"
                    >
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                    </motion.span>
                    <div className="text-sm sm:text-base font-semibold tracking-wide">CLASSA</div>
                    <span className="opacity-70 hidden sm:inline">|</span>
                    <div className="text-sm sm:text-base opacity-95">Schedule a Demo</div>
                  </div>
                  <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/20 text-white">
                    <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                  </span>
                </div>
              </div>

              {/* Form */}
              <form
                className="bg-white px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8" 
                // onSubmit={(e) => {
                //   e.preventDefault();
                //   const fd = new FormData(e.currentTarget);
                //   const payload = Object.fromEntries(fd.entries());
                //   alert(`Submitted!\n\n${JSON.stringify(payload, null, 2)}`);
                // }}
              >
                <Field label="Full Name" name="fullName" placeholder="Your name" />
                <Field label="Email" type="email" name="email" placeholder="you@example.com" />
                <Field label="Phone" name="phone" placeholder="+91 XXXXX XXXXX" />
                <Field label="School Name" name="school" placeholder="Your school" />
                <Field label="Address" name="address" placeholder="Street, City, Pincode" />

                <div className="mt-4 sm:mt-6 border-t border-zinc-200 pt-4 sm:pt-6">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-zinc-900 px-5 py-3 text-sm sm:text-base text-white hover:bg-zinc-800 focus:ring-2 focus:ring-[#4aa8ff] focus:outline-none transition-colors"
                  >
                    <span>Submit</span>
                    <Send className="h-4 w-4" />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}

function Field({ label, name, placeholder, type = "text" }: FieldProps) {
  const id = name;
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="block w-full rounded-lg sm:rounded-xl border border-zinc-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-zinc-900 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-[#4aa8ff] focus:border-[#4aa8ff] transition"
      />
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode | string;
  className?: string;
}

function InfoCard({ icon, title, value, className = '' }: InfoCardProps & { className?: string }) {
  return (
    <motion.div
      className={`rounded-xl sm:rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 hover:shadow-md transition-all duration-500 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
        <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-zinc-100 flex-shrink-0">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-zinc-500">{title}</p>
          <div className="mt-0.5 sm:mt-1 text-sm sm:text-base font-medium text-zinc-800">{value}</div>
        </div>
      </div>
    </motion.div>
  );
}