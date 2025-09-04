"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (href: string) =>
    isActive(href)
      ? "text-[#0070F3] font-bold"
      : `text-${isScrolled ? 'gray-700' : 'white'} hover:text-[#3DA9FC] transition-colors`;

  const mobileNavLinkClass = (href: string) =>
    isActive(href)
      ? "block px-4 py-2 text-lg font-medium text-[#0070F3] bg-blue-50 rounded-lg"
      : "block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      if (!hero) return;
      
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/image/classa logo.png"
                alt="CLASSA logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${navLinkClass('/')}`}>
                Home
              </Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${navLinkClass('/about')}`}>
                About Us
              </Link>
              <Link href="/classa" className={`px-3 py-2 rounded-md text-sm font-medium ${navLinkClass('/classa')}`}>
                Unified Platform
              </Link>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className={mobileNavLinkClass('/')}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={mobileNavLinkClass('/about')}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/classa" 
              className={mobileNavLinkClass('/classa')}
              onClick={() => setIsMenuOpen(false)}
            >
              Unified Platform
            </Link>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
