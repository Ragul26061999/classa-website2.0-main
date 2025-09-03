import HeroSection from '@/components/HeroSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import NextGenLearn from '@/components/NextGenLearn';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection hideNavbar />
      <WhyChooseSection />
      <NextGenLearn />
      <ContactSection />
      {/* <CardsSection/> */}
    </main>
  );
}
