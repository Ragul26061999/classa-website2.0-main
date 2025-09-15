"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Globe2, BarChart3, Users2, MessageSquareHeart, ChevronDown } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI That Works for You",
    description: "Adaptive learning paths, question generation, and feedback tuned to each learner — not just a chatbot.",
    color: "bg-gradient-to-r from-rose-400 to-pink-300"
  },
  {
    icon: Globe2,
    title: "Built for India",
    description: "Covers CBSE/State boards with multilingual support and low-bandwidth optimizations.",
    color: "bg-gradient-to-r from-sky-400 to-cyan-300"
  },
  {
    icon: BarChart3,
    title: "Boost Results",
    description: "Track mastery and growth with live dashboards and evidence-based interventions.",
    color: "bg-gradient-to-r from-amber-400 to-orange-300"
  },
  {
    icon: Users2,
    title: "Teachers Love It",
    description: "Save hours with auto-generated lesson plans, worksheets, and analytics you'll actually use.",
    color: "bg-gradient-to-r from-emerald-400 to-teal-300"
  },
  {
    icon: MessageSquareHeart,
    title: "Parents Stay Connected",
    description: "Simple progress reports and alerts keep families informed without extra work.",
    color: "bg-gradient-to-r from-violet-400 to-fuchsia-300"
  }
];

export default function MobileWhyChooseSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="lg:hidden py-12 bg-[#F7FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-600 backdrop-blur mb-4">
            <span className="text-blue-500">★</span> Modern AI for Learning
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">CLASSA</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Smarter learning powered by AI, built for India's curriculum. Clear insights for teachers. Real results for students.
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                aria-expanded={expandedIndex === index}
                aria-controls={`mobile-feature-${index}`}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${feature.color} text-white`}>
                    <feature.icon size={20} />
                  </div>
                  <span className="font-medium text-left">{feature.title}</span>
                </div>
                <motion.span
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-gray-400" />
                </motion.span>
              </button>
              
              <motion.div
                id={`mobile-feature-${index}`}
                initial={false}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0.8,
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 pt-0 text-gray-600">
                  {feature.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
