import { Shield, Cog, Crosshair, Lightbulb, Eye, BadgeCheck } from "lucide-react";

export default function AboutSectionReplica() {
  return (
    <section className="relative min-h-screen w-full bg-[#F7FAFC] text-[#1B1B1B] overflow-hidden">
      {/* Soft Blue Blur Spots */}
      <div className="pointer-events-none absolute top-10 left-10 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-56 w-56 rounded-full bg-blue-200/30 blur-2xl" />

      {/* Container */}
      <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
        {/* Eyebrow */}
        <p className="mb-3 text-center text-xs font-medium tracking-[0.2em] text-[#8A9BAE] uppercase">About Us</p>

        {/* Title */}
        <h1 className="mx-auto max-w-3xl text-center text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1E2D3D]">
          CLASSA: Next-Generation Education Platform
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-[15px] leading-relaxed text-[#64748B]">
          CLASSA is a next-generation education technology platform designed to streamline academic delivery, student support, and school management with one unified AI-driven system.
        </p>

        {/* Pill Feature Card */}
        <div className="relative z-10 mx-auto mt-10 w-full max-w-3xl rounded-3xl bg-[#3B82F6] px-6 py-8 shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-y-0">
            {/* Safety */}
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="flex h-10 w-10 items-center justify-center"><Shield className="h-7 w-7" strokeWidth={2.2} /></div>
              <span className="text-[15px]">AI-Driven</span>
            </div>
            {/* Efficient */}
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="flex h-10 w-10 items-center justify-center"><Cog className="h-7 w-7" strokeWidth={2.2} /></div>
              <span className="text-[15px]">Automation</span>
            </div>
            {/* Precision */}
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="flex h-10 w-10 items-center justify-center"><Crosshair className="h-7 w-7" strokeWidth={2.2} /></div>
              <span className="text-[15px]">Smart</span>
            </div>
            {/* Innovation */}
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="flex h-10 w-10 items-center justify-center"><Lightbulb className="h-7 w-7" strokeWidth={2.2} /></div>
              <span className="text-[15px]">Innovation</span>
            </div>
          </div>
        </div>

        {/* White Card */}
        <div className="relative -mt-8 rounded-[28px] bg-white p-6 pt-14 shadow-[0_20px_40px_rgba(0,0,0,0.06)] md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-6">
            {/* Vision */}
            <div className="flex flex-col items-start">
              <div className="mb-2 flex items-center gap-2">
                <Eye className="h-5 w-5 text-[#3B82F6]" />
                <h3 className="text-2xl font-semibold text-[#3B82F6]">Vision</h3>
              </div>
              <p className="max-w-sm text-[15px] leading-7 text-[#64748B]">
                Revolutionize education with AI-driven learning and automation. Enhance accessibility through smart digital platforms. Optimize school operations with seamless automation.
              </p>
            </div>

            {/* Divider (visible on md+) */}
            <div className="hidden md:block" aria-hidden>
              <div className="mx-auto h-full w-px bg-[#E2E8F0]" />
            </div>

            {/* Mission */}
            <div className="md:col-start-2">
              <div className="mb-2 flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-[#3B82F6]" />
                <h3 className="text-2xl font-semibold text-[#3B82F6]">Mission</h3>
              </div>
              <p className="max-w-sm text-[15px] leading-7 text-[#64748B]">
                To transform education through adaptive learning, smart assessments, automated school management, and seamless collaboration—powered by innovation and technology.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <button className="rounded-xl bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_10px_rgba(59,130,246,0.25)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]">
              Know More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
