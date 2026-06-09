/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import ResearchAndProjects from './components/ResearchAndProjects';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during splash screen
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-accent selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <AnimatedBackground />
            <Navbar />
            
            <div className="relative z-10">
              <Hero />
              
              <div className="space-y-32 pb-32">
                <Experience />
                <Achievements />
                <Skills />
                <ResearchAndProjects />
                <Education />
              </div>

              <Footer />
            </div>

            {/* Sticky Progress Indicator */}
            <motion.div 
              className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              {['about', 'experience', 'achievements', 'skills', 'projects', 'education'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="group relative flex items-center justify-end"
                >
                  <span className="absolute right-8 px-2 py-1 rounded bg-accent text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {section}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-accent group-hover:scale-150 transition-all" />
                </a>
              ))}
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
