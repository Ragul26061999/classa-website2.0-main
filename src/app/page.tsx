import HeroSection from '@/components/HeroSection';
import ResponsiveWhyChooseSection from '@/components/ResponsiveWhyChooseSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import NextGenLearn from '@/components/NextGenLearn';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      <HeroSection />
      <ResponsiveWhyChooseSection />
      <NextGenLearn />
      <ContactSection />
      {/* <CardsSection/> */}
    </main>
  );
}
