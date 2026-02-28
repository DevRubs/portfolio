'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BootSequence({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 300);
    const timer2 = setTimeout(() => setStage(2), 800);
    const timer3 = setTimeout(() => setStage(3), 1200);
    const timer4 = setTimeout(() => onComplete(), 2200);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0a] z-50 flex flex-col items-center justify-center p-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-mono text-sm md:text-base max-w-md w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 0 ? 1 : 0 }}
          className="text-[#00ff9d]"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 1 ? 1 : 0 }}
          className="text-[#666666] mt-1"
        >
          Setting things up...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 2 ? 1 : 0 }}
          className="text-[#666666] mt-1"
        >
          Loading content...
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 2 ? 1 : 0 }}
          className="mt-4"
        >
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-[#1a1a1a] rounded overflow-hidden">
              <motion.div
                className="h-full bg-[#00ff9d]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                style={{ boxShadow: '0 0 10px rgba(0, 255, 157, 0.5)' }}
              />
            </div>
            <span className="text-[#00ff9d] text-xs w-12">{progress}%</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 3 ? 1 : 0 }}
          className="text-[#00ff9d] mt-4"
        >
          Ready to explore!
        </motion.p>
      </div>

      <button
        onClick={onComplete}
        className="absolute bottom-8 text-[#666666] text-xs hover:text-[#00ff9d] transition-colors"
      >
        Skip
      </button>
    </motion.div>
  );
}