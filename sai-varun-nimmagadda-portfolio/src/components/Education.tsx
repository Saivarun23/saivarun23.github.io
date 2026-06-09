import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Star } from 'lucide-react';
import { resumeData } from '../data';

const EducationCard: React.FC<{ edu: typeof resumeData.education[0], index: number }> = ({ edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:bg-slate-100 transition-all group relative overflow-hidden shadow-sm"
    >
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <GraduationCap size={120} />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-accent-muted flex items-center justify-center text-accent">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{edu.degree}</h3>
            <p className="text-accent/80 font-medium">{edu.institution}</p>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1">
          <span className="flex items-center gap-2 text-slate-400 text-sm">
            <Calendar size={14} />
            {edu.dates}
          </span>
          <span className="flex items-center gap-2 text-accent font-bold">
            <Star size={14} />
            GPA: {edu.gpa}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-accent mb-4"
        >
          <GraduationCap size={16} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Academic Foundation</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter"
        >
          Education
        </motion.h2>
      </div>

      <div className="space-y-6">
        {resumeData.education.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </div>

      {/* Certifications & Leadership */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Award className="text-accent" />
            Certifications
          </h3>
          {resumeData.certifications.map((cert, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <div>
                <p className="text-slate-900 font-medium">{cert.name}</p>
                <p className="text-slate-400 text-sm">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Star className="text-accent" />
            Leadership
          </h3>
          {resumeData.leadership.map((lead, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <div>
                <p className="text-slate-900 font-medium">{lead.role}</p>
                <p className="text-slate-400 text-sm">{lead.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
