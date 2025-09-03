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
      : "text-blue-400 hover:text-blue-400 transition-colors";

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
  // Apply transform based on --navbar-hidden CSS variable
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const navbar = document.querySelector('header');
        if (navbar) {
          const hiddenValue = getComputedStyle(document.documentElement)
            .getPropertyValue('--navbar-hidden')
            .trim();
          navbar.style.transform = hiddenValue ? `translateY(${hiddenValue})` : '';
        }
      };
      
      // Initial check
      handleScroll();
      
      // Add scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        overHero
          ? "bg-transparent border-transparent backdrop-blur-0"
          : "bg-transparent backdrop-blur-sm border-transparent shadow-sm"
      }`}
      style={{
        transform: 'var(--navbar-hidden, none)',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out'
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Left: Logo + brand */}
        <Link href="/#home" className="flex items-center gap-3 -ml-20">
          <Image
            src="/image/classa logo.png"
            alt="CLASSA logo"
            width={160}
            height={160}
            // className="rounded-md ring-1 ring-black/5"
            priority
          />
        </Link>

        {/* Center: Nav links */}
        <nav className="hidden gap-8 md:flex py-2">
          <Link href="/" className={`${navLinkClass("/")} text-lg`}>Home</Link>
          <Link href="/about" className={`${navLinkClass("/about")} text-lg`}>
            About Us
          </Link>
          <Link href="/classa" className={`${navLinkClass("/classa")} text-lg`}>
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
