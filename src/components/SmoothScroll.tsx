'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const isFirstRender = useRef(true);

  // Effect 1: Create Lenis singleton on mount, destroy on unmount
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Effect 2: Scroll to top on route change, or to hash target for cross-page hash links
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const hash = window.location.hash;
    if (hash && hash !== '#') {
      const scrollToHash = () => {
        const element = document.querySelector(hash) as HTMLElement;
        if (element) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(element);
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      };
      requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
    } else {
      window.scrollTo(0, 0);
      lenisRef.current?.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  // Effect 3: Hash-link click handler
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const isHash = href.startsWith('#');
      const isCurrentPageHash = href.startsWith(pathname + '#');

      if ((isHash && href !== '#') || isCurrentPageHash) {
        const hash = href.includes('#') ? '#' + href.split('#')[1] : href;
        const element = document.querySelector(hash) as HTMLElement;

        if (element) {
          e.preventDefault();
          if (lenisRef.current) {
            lenisRef.current.scrollTo(element);
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return null;
}
