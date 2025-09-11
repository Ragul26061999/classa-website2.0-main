"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      <div className="mx-4 md:mx-10 lg:mx-20 flex max-w-6xl items-center justify-between px-4 py-4">
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

        {/* Center: Nav links - Desktop */}
        <nav className="hidden gap-8 md:flex py-2">
          <Link href="/" className={`${contextualLinkClass("/#home")}`}>Home</Link>
          <Link href="/about" className={`${contextualLinkClass("/about")}`}>
            About Us
          </Link>
          <Link href="/classa" className={`${contextualLinkClass("/classa")}`}>
            Our School Suite
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#3DA9FC] transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Right: CTA */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 shadow-sm hover:bg-[#3DA9FC] hover:text-white hover:ring-transparent hover:shadow-md transition-all duration-200"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              className={`${contextualLinkClass("/#home")} py-2 text-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${contextualLinkClass("/about")} py-2 text-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/classa"
              className={`${contextualLinkClass("/classa")} py-2 text-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our School Suite
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#3DA9FC] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0070F3] transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
