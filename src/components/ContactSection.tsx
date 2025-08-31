"use client";

import React from "react";
import { Phone, MapPin, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  
  return (
    <section id="contact" className="w-full bg-white text-zinc-900 overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 md:pb-50">
        {/* Heading */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold tracking-tight leading-tight bg-gradient-to-r from-[#70A5F9] to-[#1169F9] via-[#2A7AF9] text-transparent bg-clip-text">Easy to Reach</h2>
          <p className="mt-1 text-4xl font-light bg-gradient-to-r from-[#70A5F9] to-[#1169F9] via-[#2A7AF9] text-transparent bg-clip-text">Ready to Help</p>
          <p className="mt-6 text-zinc-600">Get in Touch with the CLASSA Team</p>
        </motion.div>

        {/* Content Row */}
        <div className="relative">
          {/* Left: Image + Info cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-200 hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/m-monk-E813FON0wDQ-unsplash.jpg"
                alt="Classroom chairs"
                className="h-[520px] w-full object-cover object-[12%_50%] sm:object-[10%_50%] md:object-[8%_50%] xl:object-[6%_50%] saturate-[0.9] contrast-[0.98] brightness-[1.02]"
              />
              {/* Subtle bottom gradient to improve legibility of overlay cards, mimicking the sample */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/25" />
            </div>

            {/* Overlay: Challenge/Idea card */}
            <motion.div
              className="absolute left-8 -bottom-40 w-[520px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-zinc-200 hover:shadow-xl transition-all duration-500">
                <div className="p-6">
                  <p className="text-lg font-semibold">Have a Challenge or an Idea?</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    Fill out the form, and let's talk about how we can support your business with tailored solutions.
                  </p>
                </div>
              </div>

              {/* Contact & Address cards */}
              <div className="mt-4 grid grid-cols-1 gap-4">
                <InfoCard icon={<Phone className="h-5 w-5" />} title="Call us at:" value="+91 84899 18000" />
                <InfoCard
                  icon={<MapPin className="h-5 w-5" />}
                  title="Visit us at:"
                  value={
                    <>
                      <p>Techmatrix AI Pvt Ltd</p>
                      <p className="text-sm text-zinc-600">173, Nanjundapuram Road</p>
                      <p className="text-sm text-zinc-600">Ramanathapuram,</p>
                      <p className="text-sm text-zinc-600">Coimbatore-641045</p>
                      <p className="text-sm text-zinc-600">Tamil Nadu, India</p>
                    </>
                  }
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form Card */}
          <motion.div
            className="relative md:absolute md:right-6 md:top-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-[560px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-zinc-200">
              {/* Card header */}
              <div className="relative bg-[#4aa8ff]">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3 text-white">
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                    >
                      <Sparkles className="h-4 w-4" />
                    </motion.span>
                    <div className="font-semibold tracking-wide">CLASSA</div>
                    <span className="opacity-70">|</span>
                    <div className="opacity-95">Schedule a Demo</div>
                  </div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                    <Send className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Form */}
              <form
                className="bg-white px-6 pt-6 pb-8" 
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

                <div className="mt-4 border-t border-zinc-200 pt-6">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 focus:ring-2 focus:ring-[#4aa8ff] focus:outline-none"
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
        className="block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-[#4aa8ff] focus:border-[#4aa8ff] transition"
      />
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode | string;
}

function InfoCard({ icon, title, value }: InfoCardProps) {
  return (
    <motion.div
      className="rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 hover:shadow-md transition-all duration-500"
      whileHover={{ scale: 1.03 }}
    >
      <div className="p-5 flex items-start gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100">
          {icon}
        </span>
        <div>
          <p className="text-sm text-zinc-500">{title}</p>
          <div className="mt-1 font-medium">{value}</div>
        </div>
      </div>
    </motion.div>
  );
}