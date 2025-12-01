"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Globe2, BarChart3, Users2, MessageSquareHeart, ChevronDown, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI That Works for You",
    description: "Adaptive learning paths, question generation, and feedback tuned to each learner — not just a chatbot.",
    gradient: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-50"
  },
  {
    icon: Globe2,
    title: "Built for India",
    description: "Covers CBSE/State boards with multilingual support and low-bandwidth optimizations.",
    gradient: "from-emerald-500 to-teal-400",
    bgLight: "bg-emerald-50"
  },
  {
    icon: BarChart3,
    title: "Boost Results",
    description: "Track mastery and growth with live dashboards and evidence-based interventions.",
    gradient: "from-amber-500 to-orange-400",
    bgLight: "bg-amber-50"
  },
  {
    icon: Users2,
    title: "Teachers Love It",
    description: "Save hours with auto-generated lesson plans, worksheets, and analytics you'll actually use.",
    gradient: "from-purple-500 to-pink-400",
    bgLight: "bg-purple-50"
  },
  {
    icon: MessageSquareHeart,
    title: "Parents Stay Connected",
    description: "Simple progress reports and alerts keep families informed without extra work.",
    gradient: "from-rose-500 to-red-400",
    bgLight: "bg-rose-50"
  }
];

export default function MobileWhyChooseSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="lg:hidden py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 -right-20 w-60 h-60 bg-purple-100 rounded-full blur-3xl opacity-40" />
      </div>
      
      <div className="max-w-lg mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-700">Why CLASSA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Why Schools Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">CLASSA</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Smarter learning powered by AI, built for India&apos;s curriculum.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`bg-white rounded-2xl shadow-sm overflow-hidden border transition-all duration-300 ${
                expandedIndex === index 
                  ? 'border-blue-200 shadow-lg shadow-blue-500/5' 
                  : 'border-gray-100'
              }`}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full px-5 py-4 flex items-center justify-between focus:outline-none"
                aria-expanded={expandedIndex === index}
                aria-controls={`mobile-feature-${index}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                    <feature.icon size={20} />
                  </div>
                  <span className={`font-semibold text-left text-sm sm:text-base transition-colors ${
                    expandedIndex === index ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {feature.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    expandedIndex === index ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'
                  }`}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    id={`mobile-feature-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className={`px-5 pb-5 pt-1`}>
                      <div className={`p-4 rounded-xl ${feature.bgLight}`}>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
