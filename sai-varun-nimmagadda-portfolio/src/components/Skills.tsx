import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Globe, Layout, Terminal } from 'lucide-react';
import { resumeData } from '../data';

const categoryIcons: Record<string, any> = {
  "Languages": Terminal,
  "ML / DL": Cpu,
  "NLP / LLMs": Globe,
  "Big Data": Database,
  "Cloud & DB": Database,
  "Viz & Tools": Layout
};

const SkillCategory: React.FC<{ category: typeof resumeData.skills[0], index: number }> = ({ category, index }) => {
  const Icon = categoryIcons[category.category] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 transition-all group shadow-sm"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent-muted flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">{category.category}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.items.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 hover:text-accent hover:border-accent-border transition-all cursor-default shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-accent mb-4"
        >
          <Code size={16} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Technical Arsenal</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter"
        >
          Skills & Expertise
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.skills.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
