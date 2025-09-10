"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (href: string) =>
    isActive(href)
      ? "text-[#0070F3] font-bold"
      : `text-${isScrolled ? 'gray-700' : 'blue-700'} hover:text-[#3DA9FC] transition-colors`;

  // Override link colors contextually: when over HeroSection (#home is in view),
  // use white text with blue hover; otherwise, use default scheme.
  const contextualLinkClass = (href: string) => {
    const base = "text-lg font-bold transition-colors";
    if (!isScrolled) {
      return isActive(href) ? `text-white ${base}` : `text-white hover:text-[#3DA9FC] ${base}`;
    }
    return isActive(href) ? "text-[#0070F3] font-bold" : "text-gray-700 hover:text-[#3DA9FC] transition-colors";
  };

  useEffect(() => {
    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= 100 && // 100px from top of viewport
        rect.bottom >= 0
      );
    };

    const handleScroll = () => {
      const hero = document.querySelector('#home');
      if (!hero) {
        // No hero section on this page -> default to dark scheme
        setIsScrolled(true);
        return;
      }
      
      const scrollPosition = window.scrollY;
      // Add glassy effect when scrolled past 100px or when not over hero
      setIsScrolled(scrollPosition > 100 || !isElementInViewport(hero));
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]); // Add pathname as a dependency since it's used in the effect

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-lg shadow-lg border-b border-white/20 transition-all duration-300"
      style={{
        transform: 'var(--navbar-hidden, none)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
        {/* Left: Logo + brand */}
        <Link href="/#home" className="flex items-center gap-3">
          <Image
            src="/image/classa logo.png"
            alt="CLASSA logo"
            width={160}
            height={160}
            // className="rounded-md ring-1 ring-black/5"
            priority
          />
        </Link>
        {/* Center: Nav links (desktop) */}
        <nav className="hidden gap-8 md:flex py-2">
          <Link href="/" className={`${contextualLinkClass("/#home")}`}>Home</Link>
          <Link href="/about" className={`${contextualLinkClass("/about")}`}>
            About Us
          </Link>
          <Link href="/classa" className={`${contextualLinkClass("/classa")}`}>
            Our School Suite
          </Link>
        </nav>

        {/* Right: CTA (desktop) */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 shadow-sm hover:bg-[#3DA9FC] hover:text-white hover:ring-transparent hover:shadow-md transition-all duration-200"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 ring-1 ring-gray-200 bg-white/90 text-gray-700 hover:bg-[#3DA9FC] hover:text-white transition-all duration-200"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden mx-auto w-full max-w-6xl px-4 pb-4">
          <div className="rounded-2xl bg-white/95 ring-1 ring-gray-200 shadow-lg p-4 backdrop-blur">
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-gray-800 hover:text-[#0070F3] font-semibold" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-[#0070F3] font-semibold" onClick={() => setMobileOpen(false)}>
                About Us
              </Link>
              <Link href="/classa" className="text-gray-800 hover:text-[#0070F3] font-semibold" onClick={() => setMobileOpen(false)}>
                Our School Suite
              </Link>
              <Link
                href="/#contact"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#3DA9FC] px-5 py-3 text-sm font-semibold text-white ring-1 ring-transparent shadow-sm hover:bg-[#2d93e2] transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
