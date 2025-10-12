'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const catchphrases = [
  'Optimizing the Optimization of Optimized Outcomes',
  'Localizing Globalization. Globalizing Localization.',
  'Synergizing Synergy Through Strategic Synergy',
  'Disrupting Disruption Disruptively',
  'Scaling Scalability at Scale',
  'Pivoting Pivots Pivot-First',
  'Innovating Innovation Innovatively',
  'Leveraging Leverage to Leverage More Leverage',
];

export function CorporateCatchphrases() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % catchphrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-32 sm:h-24 flex items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-sm">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent opacity-50" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center px-8"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 tracking-tight font-[family-name:var(--font-geist-sans)]">
              {catchphrases[currentIndex]}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {catchphrases.map((_, index) => (
            <motion.div
              key={index}
              className="h-1.5 rounded-full bg-gray-300"
              animate={{
                width: index === currentIndex ? 24 : 6,
                backgroundColor: index === currentIndex ? '#000' : '#d1d5db',
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

