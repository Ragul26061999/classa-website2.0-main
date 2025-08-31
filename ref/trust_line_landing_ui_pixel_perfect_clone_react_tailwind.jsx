import React from "react";

/**
 * Updated per request:
 * 1) Main card shows Roles (Admin, Teacher, Student, Parents) with icons.
 * 2) Bottom-left card shows Tools: Daily Diary, Assignment, Assessment, Report.
 * 3) Bottom-right card becomes senseAI with an auto-moving emoji marquee:
 *    - Click to Clarify, Paper to OPixel, Question to Clarity
 *
 * Also preserves the soft blue/teal glow theme and keeps smoke tests.
 */

// ---- Helpers --------------------------------------------------------------
export function buildHeroGradient() {
  const background = [
    "radial-gradient(600px 300px at 10% 10%, rgba(59,130,246,0.20), transparent 60%)", // blue top-left
    "radial-gradient(520px 320px at 90% 15%, rgba(103,232,249,0.25), transparent 60%)", // teal top-right
    "radial-gradient(720px 420px at 50% 60%, rgba(99,102,241,0.15), transparent 60%)",   // indigo center
  ].join(", ");
  return { background };
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Dot({ className = "" }) {
  return <span className={`h-1.5 w-1.5 rounded-full bg-slate-400 ${className}`} />;
}

function Avatar({ initials }) {
  return (
    <div className="size-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 ring-1 ring-slate-300 grid place-items-center text-[11px] font-semibold text-slate-700 shadow">
      {initials}
    </div>
  );
}

const Logo = () => (
  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
    <div className="grid place-items-center size-6 rounded-full bg-blue-600 text-white text-[11px] font-bold">SM</div>
    <span className="text-[13px] font-semibold tracking-tight text-slate-800">SchoolMate</span>
  </div>
);

// ---- Page -----------------------------------------------------------------
export default function SchoolMateClone() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 text-slate-900">
      {/* Background glow layer & marquee keyframes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={buildHeroGradient()} />
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>

      {/* Nav */}
      <header className="relative z-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-5">
            <Logo />
            <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Features</a>
              <a href="#" className="hover:text-slate-900">Plans</a>
              <a href="#" className="hover:text-slate-900">About</a>
              <a href="#" className="hover:text-slate-900">Help</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="hidden md:inline-flex h-9 items-center rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">Login</button>
              <button className="inline-flex h-9 items-center rounded-xl bg-blue-600 px-3.5 text-sm font-semibold text-white shadow hover:bg-blue-700">Request Demo</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-0">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-20">
          <div className="text-center">
            <h1 className="mx-auto max-w-3xl text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Empowering Institutions with
              <br className="hidden md:block" />
              Smart School Management
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">
              A next-generation EdTech ecosystem that integrates classrooms, management, and personalized learning to elevate outcomes.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button className="inline-flex h-10 items-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow hover:bg-blue-700">Book a Demo</button>
              <button className="inline-flex h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
                Explore Modules
              </button>
            </div>
          </div>

          {/* Canvas */}
          <div className="relative mt-14 grid place-items-center">
            <div className="relative w-full rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-md backdrop-blur">
              <div className="grid place-items-center">
                <div className="relative mx-auto grid w-full max-w-lg place-items-center rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 shadow">
                  <Badge>Roles</Badge>
                  <div className="mt-6 grid grid-cols-4 gap-4">
                    {/* Admin */}
                    <div className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <span className="text-lg" role="img" aria-label="admin">🛠️</span>
                      <p className="mt-2 text-xs text-slate-600">Admin</p>
                    </div>
                    {/* Teacher */}
                    <div className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <span className="text-lg" role="img" aria-label="teacher">🧑‍🏫</span>
                      <p className="mt-2 text-xs text-slate-600">Teacher</p>
                    </div>
                    {/* Student */}
                    <div className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <span className="text-lg" role="img" aria-label="student">🎓</span>
                      <p className="mt-2 text-xs text-slate-600">Student</p>
                    </div>
                    {/* Parents */}
                    <div className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <span className="text-lg" role="img" aria-label="parents">👨‍👩‍👧</span>
                      <p className="mt-2 text-xs text-slate-600">Parents</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating left: student performance */}
              <div className="absolute -left-4 top-8 md:-left-16">
                <div className="w-44 rounded-2xl border border-slate-200 bg-white p-3 shadow">
                  <p className="text-[11px] text-slate-600">Student Progress</p>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="font-bold text-slate-900">Math</span>
                    <span className="text-slate-600">85%</span>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="font-bold text-slate-900">Science</span>
                    <span className="text-slate-600">78%</span>
                  </div>
                </div>
              </div>

              {/* floating bottom-left: tools */}
              <div className="absolute -left-2 bottom-[-34px] md:-left-16 md:bottom-[-40px]">
                <div className="w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow">
                  <p className="text-[11px] font-semibold text-slate-700">Tools</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-2 text-[12px] text-slate-700 shadow-sm"><span role="img" aria-label="diary">📔</span> Daily Diary</div>
                    <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-2 text-[12px] text-slate-700 shadow-sm"><span role="img" aria-label="assignment">📝</span> Assignment</div>
                    <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-2 text-[12px] text-slate-700 shadow-sm"><span role="img" aria-label="assessment">🧪</span> Assessment</div>
                    <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-2 text-[12px] text-slate-700 shadow-sm"><span role="img" aria-label="report">📊</span> Report</div>
                  </div>
                </div>
              </div>

              {/* floating right: teacher tools */}
              <div className="absolute -right-4 top-6 md:-right-16">
                <div className="w-48 rounded-2xl border border-slate-200 bg-white p-4 shadow">
                  <p className="text-sm font-semibold text-slate-700">Teacher Tools</p>
                  <ul className="mt-2 text-[12px] text-slate-600 space-y-1">
                    <li>• Lesson Planner</li>
                    <li>• Attendance</li>
                    <li>• Gradebook</li>
                  </ul>
                </div>
              </div>

              {/* floating bottom-right: senseAI marquee */}
              <div className="absolute -right-2 bottom-[-38px] md:-right-16 md:bottom-[-44px]">
                <div className="w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow">
                  <div className="mx-auto -mt-6 mb-2 w-max rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600 shadow-sm">
                    senseAI
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex gap-3 whitespace-nowrap will-change-transform" style={{ animation: "marquee 12s linear infinite" }}>
                      {[
                        {label: "Click to Clarify", icon: "🖱️➡️💡"},
                        {label: "Paper to OPixel", icon: "📄➡️🖼️"},
                        {label: "Question to Clarity", icon: "❓➡️✨"},
                      ].concat([
                        {label: "Click to Clarify", icon: "🖱️➡️💡"},
                        {label: "Paper to OPixel", icon: "📄➡️🖼️"},
                        {label: "Question to Clarity", icon: "❓➡️✨"},
                      ]).map((item, i) => (
                        <div key={i} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[12px] text-slate-700 shadow-sm">
                          <span className="text-base" aria-hidden>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ---- Lightweight self-tests (run in browser dev only) --------------------
function runSelfTests() {
  const g = buildHeroGradient();
  console.assert(typeof g.background === "string", "gradient.background should be a string");
  console.assert((g.background.match(/radial-gradient/g) || []).length === 3, "should have 3 radial-gradients");

  const badge = Badge({ children: "X" });
  console.assert(!!badge, "Badge should return a JSX element");

  const a = Avatar({ initials: "TT" });
  console.assert(a.props.children === "TT", "Avatar should render initials");

  console.log("UI smoke tests passed ✓");
}

if (typeof window !== "undefined") {
  try { runSelfTests(); } catch (e) { console.warn("Self-tests failed", e); }
}
