'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.scrollTo(0, { immediate: true });

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Check if it's a hash link or a link to the current page with a hash
      const isHash = href.startsWith('#');
      const isCurrentPageHash = href.startsWith(pathname + '#');

      if ((isHash && href !== '#') || isCurrentPageHash) {
        // Extract the hash part
        const hash = href.includes('#') ? '#' + href.split('#')[1] : href;
        const element = document.querySelector(hash) as HTMLElement;
        
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return null;
}
