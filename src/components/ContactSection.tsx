"use client";

import React from "react";
import { Phone, MapPin, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  
  return (
    <section id="contact" className="w-full bg-white text-zinc-900 overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-24 lg:min-h-[80vh] flex flex-col lg:items-start lg:justify-center relative">
        {/* Heading */}
        <motion.div
          className="w-full lg:max-w-4xl mx-auto lg:mx-0 text-center lg:text-left lg:pl-8 xl:pl-12 2xl:pl-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight bg-gradient-to-r from-[#9333ea] to-[#6b21a8] via-[#c084fc] text-transparent bg-clip-text">Easy to Reach</h2>
          <p className="mt-1 text-2xl sm:text-4xl font-light bg-gradient-to-r from-[#a855f7] to-[#818cf8] via-[#60a5fa] text-transparent bg-clip-text lg:ml-0 sm:ml-20">Ready to Help</p>
          <p className="mt-6 text-zinc-600 pb-5">Get in Touch with the CLASSA Team</p>
        </motion.div>

        {/* Content Row */}
        <div className="relative w-full">
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
                src="/image/contactus.png"
                alt="Classroom chairs"
                className="h-60 sm:h-[520px] lg:h-[600px] w-full object-cover object-[12%_50%] sm:object-[10%_50%] md:object-[8%_50%] xl:object-[6%_50%] saturate-[0.9] contrast-[0.98] brightness-[1.02]"
              />
              {/* Subtle bottom gradient to improve legibility of overlay cards, mimicking the sample */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/25" />
            </div>

            {/* Overlay: Challenge/Idea card */}
            <motion.div
              className="mt-4 lg:absolute lg:left-8 lg:-bottom-20 w-full lg:w-[520px] px-2 lg:px-0"
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
                      <p>Techmatrix AI Private Limited</p>
                      <p className="text-sm text-zinc-600">169, Nanjundapuram Road</p>
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
            className="relative lg:absolute lg:right-30 lg:top-1/2 lg:-translate-y-1/2 mt-16 lg:mt-0 w-full lg:max-w-md mx-auto "
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
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                  })
                  .then(response => response.json())
                  .then(data => {
                    if (data.success) {
                      alert('Thank you for your message! We will get back to you soon.');
                      form.reset();
                    } else {
                      alert('There was an error sending your message. Please try again.');
                    }
                  })
                  .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error sending your message. Please try again.');
                  });
                }}
              >
                <input type="hidden" name="access_key" value="ec90b4b1-01be-44fb-bbbd-0bba140312de" />
                <input type="hidden" name="subject" value="New Contact Form Submission" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                <Field label="Full Name" name="name" placeholder="Your name" required />
                <Field label="Email" type="email" name="email" placeholder="you@example.com" required />
                <Field label="Phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                <Field label="School Name" name="school" placeholder="Your school" required />
                <Field label="Address" name="address" placeholder="Street, City, Pincode" required />

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
  required?: boolean;
}

function Field({ label, name, placeholder, type = "text", required = false }: FieldProps) {
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
        required={required}
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