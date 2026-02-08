import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PathNavigation from '@/components/PathNavigation';
import ServicesOverview from '@/components/ServicesOverview';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="w-full overflow-hidden">
        <Hero />
        <PathNavigation />
        <ServicesOverview />
      </main>
    </>
  );
}
