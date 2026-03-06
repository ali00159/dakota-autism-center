'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[var(--color-bg-primary)] overflow-hidden relative">
      <div className="container-narrow relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Text */}
          <div className="relative inline-block mb-8">
            <h1 className="text-[120px] md:text-[180px] font-bold text-[var(--color-primary)] leading-none tracking-tighter select-none">
              4
              <span className="text-[var(--color-secondary)] inline-block">0</span>
              4
            </h1>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute top-0 -right-4 md:-right-8 bg-[var(--color-accent)] text-white text-sm font-bold px-3 py-1 rounded-full rotate-12 shadow-lg"
            >
              Oops!
            </motion.div>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="btn-find-center w-full sm:w-auto group"
            >
              Return Home
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/20">
                <Home className="w-6 h-6" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Footer decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-tertiary)] opacity-30" />
    </main>
  );
}
