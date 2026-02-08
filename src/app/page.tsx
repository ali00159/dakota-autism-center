import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PathNavigation from '@/components/PathNavigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="w-full overflow-hidden">
        <Hero />
        <PathNavigation />
      </main>
    </>
  );
}
