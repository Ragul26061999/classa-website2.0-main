import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Spacer to avoid content being hidden behind fixed navbar */}
      <div className="pt-6 md:pt-10" />
      <AboutUs />
    </main>
  );
}
