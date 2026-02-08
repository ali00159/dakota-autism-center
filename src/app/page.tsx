import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ContentNavigation from '@/components/ContentNavigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="w-full overflow-hidden">
        <Hero />
        <ContentNavigation />
      </main>
    </>
  );
}
