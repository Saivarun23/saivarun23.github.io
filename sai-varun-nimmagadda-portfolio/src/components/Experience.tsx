import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { resumeData } from '../data';

const ExperienceCard: React.FC<{ exp: typeof resumeData.experience[0], index: number }> = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
      </div>

      <div
        className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 cursor-pointer hover:bg-slate-100 transition-all shadow-sm"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors">
              {exp.role}
            </h3>
            <p className="text-accent/80 font-medium flex items-center gap-2">
              <Briefcase size={14} />
              {exp.company}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {exp.dates}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              {exp.location}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {exp.metrics.map((metric, i) => (
            <span key={i} className="px-3 py-1 bg-accent-muted border border-accent-border rounded-full text-[10px] font-bold text-accent uppercase tracking-wider">
              {metric}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <ul className="space-y-3 mt-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex justify-center text-slate-300">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-accent mb-4"
        >
          <Sparkles size={20} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Professional Journey</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter"
        >
          Work Experience
        </motion.h2>
      </div>

      <div className="space-y-4">
        {resumeData.experience.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>

      {/* Impact Highlights Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-8 bg-gradient-to-br from-accent-muted to-blue-500/5 border border-slate-200 rounded-3xl backdrop-blur-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <Sparkles className="text-accent" />
          Impact Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.experience.flatMap(e => e.bullets).filter(b => b.includes('%') || b.includes('+') || b.includes('accuracy')).slice(0, 4).map((highlight, i) => (
            <div key={i} className="p-4 bg-white rounded-xl border border-slate-100 hover:border-accent-border transition-colors shadow-sm">
              <p className="text-slate-600 text-sm leading-relaxed italic">"{highlight}"</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
