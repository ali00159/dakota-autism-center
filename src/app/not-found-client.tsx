'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFoundClient() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-(--color-bg-primary)">
      <div className="container-narrow relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-8 inline-block">
            <h1 className="select-none text-[120px] leading-none font-bold tracking-tighter text-(--color-primary) md:text-[180px]">
              4
              <span className="inline-block text-(--color-secondary)">0</span>
              4
            </h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute top-0 -right-4 rotate-12 rounded-full bg-(--color-accent) px-3 py-1 text-sm font-bold text-white shadow-lg md:-right-8"
            >
              Oops!
            </motion.div>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-(--color-dark) md:text-4xl">
            Page Not Found
          </h2>
          <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-(--color-text-secondary)">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className="btn-find-center group w-full sm:w-auto">
              Return Home
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                <Home className="h-6 w-6" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-2 w-full bg-linear-to-r from-(--color-primary) via-(--color-secondary) to-(--color-tertiary) opacity-30" />
    </main>
  );
}
