'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const catchphrases = [
  'Optimizing the Optimization of Optimized Outcomes',
  'Please Do Not Unionize',
  'Localizing Globalization. Globalizing Localization.',
  'Your Feedback Has Been Noted',
  'Synergizing Synergy Through Strategic Synergy',
  'We\'re All Family Here',
  'Disrupting Disruption Disruptively',
  'Work-Life Integration, Not Balance',
  'Scaling Scalability at Scale',
  'Empowering Synergy Through Destruction',
  'Innovating Innovation Innovatively',
  'Unlimited PTO (Usage Discouraged)',
  'Leveraging Leverage to Leverage More Leverage',
  'Redefining the Definition of Redefining',
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
    <div className="relative min-h-16 sm:min-h-12 flex items-center justify-center mb-8 px-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-center text-gray-600 italic tracking-wide font-[family-name:var(--font-geist-sans)]"
        >
          {catchphrases[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

