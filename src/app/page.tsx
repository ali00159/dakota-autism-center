import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PathNavigation from '@/components/PathNavigation';
import ServicesOverview from '@/components/ServicesOverview';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="w-full overflow-hidden">
        <Hero />
        <PathNavigation />
        <ServicesOverview />
        <AboutSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
