import Hero from '@/components/Hero';
import PathNavigation from '@/components/PathNavigation';
import ServicesOverview from '@/components/ServicesOverview';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <main id="main-content" className="w-full overflow-hidden">
        <Hero />
        <PathNavigation />
        <ServicesOverview />
        <AboutSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
    </>
  );
}
