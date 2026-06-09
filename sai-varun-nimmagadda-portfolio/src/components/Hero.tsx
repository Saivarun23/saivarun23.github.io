import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { resumeData } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-3 py-1 rounded-full bg-accent-muted border border-accent-border text-accent text-[10px] uppercase tracking-[0.2em] font-bold mb-6"
        >
          Actively Seeking New Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6 leading-tight"
        >
          {resumeData.basics.name.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-4">
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-accent/80 font-medium mb-8"
        >
          {resumeData.basics.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="group px-8 py-4 bg-accent text-white font-bold rounded-full flex items-center gap-2 hover:bg-accent-hover transition-all hover:scale-105 shadow-lg shadow-accent/20"
          >
            View Experience
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-4 bg-slate-50 text-slate-900 font-bold rounded-full border border-slate-200 flex items-center gap-2 hover:bg-slate-100 transition-all">
            <Download size={18} />
            Download Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-300"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-muted rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default Hero;
