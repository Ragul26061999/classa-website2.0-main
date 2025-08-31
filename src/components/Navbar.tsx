"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [overHero, setOverHero] = useState(true);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (href: string) =>
    isActive(href)
      ? "text-blue-600 font-medium"
      : "text-slate-700 hover:text-blue-600 transition-colors";

  useEffect(() => {
    const hero = document.querySelector('#home');
    if (!hero) {
      setOverHero(false);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting);
      },
      {
        threshold: 0,
        // Trigger slightly before reaching the very top to avoid flicker
        rootMargin: "-80px 0px 0px 0px",
      }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        overHero
          ? "bg-transparent border-transparent backdrop-blur-0"
          : "bg-white/70 backdrop-blur-md border-b border-slate-200/60 supports-[backdrop-filter]:bg-white/60 shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Left: Logo + brand */}
        <Link href="/#home" className="flex items-center gap-3 -ml-20">
          <Image
            src="image/Classa logo.png"
            alt="CLASSA logo"
            width={160}
            height={160}
            // className="rounded-md ring-1 ring-black/5"
            priority
          />
        </Link>

        {/* Center: Nav links */}
        <nav className="hidden gap-8 md:flex py-2">
          <Link href="/" className={navLinkClass("/")}>Home</Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About Us
          </Link>
          <Link href="/classa" className={navLinkClass("/classa")}>
            Unified Platform
          </Link>
        </nav>

        {/* Right: CTA */}
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-[#3DA9FC] hover:text-white hover:shadow transition-colors duration-200 -mr-20"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
