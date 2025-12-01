"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, BarChart3, Users2, MessageSquareHeart, Globe2, LucideIcon, ChevronRight } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  lightBg: string;
  stats: { value: string; label: string }[];
}

const features: Feature[] = [
  {
    icon: Brain,
    title: "AI That Works for You",
    description: "Adaptive learning paths, question generation, and feedback tuned to each learner — not just a chatbot.",
    gradient: "from-blue-500 to-cyan-400",
    lightBg: "bg-blue-50",
    stats: [
      { value: "92%", label: "Accuracy" },
      { value: "1.3x", label: "Speed" },
      { value: "87%", label: "Mastery" },
    ],
  },
  {
    icon: Globe2,
    title: "Built for India",
    description: "Covers CBSE/State boards with multilingual support and low-bandwidth optimizations.",
    gradient: "from-emerald-500 to-teal-400",
    lightBg: "bg-emerald-50",
    stats: [
      { value: "15+", label: "Languages" },
      { value: "All", label: "Boards" },
      { value: "2G", label: "Compatible" },
    ],
  },
  {
    icon: BarChart3,
    title: "Boost Results",
    description: "Track mastery and growth with live dashboards and evidence-based interventions.",
    gradient: "from-amber-500 to-orange-400",
    lightBg: "bg-amber-50",
    stats: [
      { value: "+23%", label: "Scores" },
      { value: "Real-time", label: "Analytics" },
      { value: "Smart", label: "Insights" },
    ],
  },
  {
    icon: Users2,
    title: "Teachers Love It",
    description: "Save hours with auto-generated lesson plans, worksheets, and analytics you'll actually use.",
    gradient: "from-purple-500 to-pink-400",
    lightBg: "bg-purple-50",
    stats: [
      { value: "2.5h", label: "Saved/Week" },
      { value: "Auto", label: "Lesson Plans" },
      { value: "Easy", label: "Reports" },
    ],
  },
  {
    icon: MessageSquareHeart,
    title: "Parents Stay Connected",
    description: "Simple progress reports and alerts keep families informed without extra work.",
    gradient: "from-rose-500 to-red-400",
    lightBg: "bg-rose-50",
    stats: [
      { value: "Daily", label: "Updates" },
      { value: "Instant", label: "Alerts" },
      { value: "Clear", label: "Reports" },
    ],
  },
];

export function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeFeature = features[activeIndex];

  return (
    <section id="classa" className="relative py-20 lg:py-28 bg-white overflow-hidden hidden lg:block">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose CLASSA
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Smarter Learning,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Better Results
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            AI-powered education built for India&apos;s curriculum. Clear insights for teachers, real results for students.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Feature selector */}
          <div className="space-y-3">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;
              const Icon = feature.icon;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 group ${
                    isActive 
                      ? 'bg-white shadow-xl shadow-gray-200/50 border border-gray-100' 
                      : 'bg-transparent hover:bg-gray-50 border border-transparent'
                  }`}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-br ${feature.gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                    }`}>
                      <Icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-800'
                        }`}>
                          {feature.title}
                        </h3>
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                          isActive 
                            ? 'text-blue-500 translate-x-0 opacity-100' 
                            : 'text-gray-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        }`} />
                      </div>
                      <p className={`mt-1 text-sm transition-colors duration-300 line-clamp-2 ${
                        isActive ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress bar for active item */}
                  {isActive && (
                    <motion.div 
                      className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${feature.gradient}`}
                        initial={{ width: "0%" }}
                        animate={{ width: isAutoPlaying ? "100%" : "100%" }}
                        transition={{ 
                          duration: isAutoPlaying ? 5 : 0.3,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Feature display */}
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`relative p-8 lg:p-10 rounded-3xl ${activeFeature.lightBg} border border-gray-100`}
            >
              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${activeFeature.gradient} rounded-full blur-3xl opacity-20`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${activeFeature.gradient} text-white shadow-xl mb-6`}>
                  <activeFeature.icon size={28} />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {activeFeature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {activeFeature.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {activeFeature.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="text-center p-4 bg-white rounded-xl shadow-sm"
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${activeFeature.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
