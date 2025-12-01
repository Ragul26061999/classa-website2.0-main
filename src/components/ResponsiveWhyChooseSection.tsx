"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import both versions with SSR disabled
const DesktopWhyChooseSection = dynamic<{}>(
  () => import('./WhyChooseSectionNew').then(mod => mod.WhyChooseSection),
  { ssr: false, loading: () => null }
);

const MobileWhyChooseSection = dynamic(
  () => import('./MobileWhyChooseSection'),
  { ssr: false, loading: () => null }
);

export default function ResponsiveWhyChooseSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render anything until we're on the client side
  if (!mounted) {
    return null;
  }

  return isMobile ? <MobileWhyChooseSection /> : <DesktopWhyChooseSection />;
}
