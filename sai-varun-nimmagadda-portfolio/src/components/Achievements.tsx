import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Award, Star, TrendingUp } from 'lucide-react';
import { resumeData } from '../data';

const AchievementCard: React.FC<{ achievement: typeof resumeData.achievements[0], index: number }> = ({ achievement, index }) => {
  const Icon = achievement.type === 'metric' ? Target : achievement.type === 'award' ? Award : Trophy;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative p-8 bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon size={80} />
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-accent-muted flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
          <Icon size={24} />
        </div>

        <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          {achievement.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {achievement.context}
        </p>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-accent mb-4"
          >
            <Star size={20} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Milestones & Impact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter"
          >
            Key Achievements
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 p-4 bg-slate-50 border border-slate-200 rounded-2xl backdrop-blur-md shadow-sm"
        >
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-slate-900">4.0</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Master's GPA</span>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-slate-900">95%</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Model Accuracy</span>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-slate-900">3</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">IEEE Papers</span>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.achievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} index={index} />
        ))}
      </div>

      {/* Top 3 Impact Strip */}
      <div className="mt-12 overflow-hidden py-8 border-y border-slate-100">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-12">
              <span className="text-2xl font-bold text-slate-200 flex items-center gap-4">
                <TrendingUp size={24} />
                95.09% ACCURACY IN CORN DISEASE DETECTION
              </span>
              <span className="text-2xl font-bold text-slate-200 flex items-center gap-4">
                <Award size={24} />
                PUBLISHED 3 IEEE CONFERENCE PAPERS
              </span>
              <span className="text-2xl font-bold text-slate-200 flex items-center gap-4">
                <Star size={24} />
                4.0 GPA M.S. IN DATA SCIENCE
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
