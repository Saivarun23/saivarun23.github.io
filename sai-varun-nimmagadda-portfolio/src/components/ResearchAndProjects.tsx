import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FlaskConical, FileText } from 'lucide-react';
import { resumeData } from '../data';

const ProjectCard: React.FC<{ project: typeof resumeData.projects[0], index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:bg-slate-100 transition-all group shadow-sm"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-2xl bg-accent-muted flex items-center justify-center text-accent">
          <FlaskConical size={24} />
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.dates}</span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-accent/80 text-sm font-medium mb-6">{project.institution}</p>

      <ul className="space-y-3 mb-8">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item, i) => (
          <span key={i} className="px-2 py-1 bg-accent-muted border border-accent-border rounded text-[10px] text-accent font-mono">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const PublicationCard: React.FC<{ pub: typeof resumeData.publications[0], index: number }> = ({ pub, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:bg-slate-100 transition-all group shadow-sm"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent-muted flex items-center justify-center text-accent">
          <FileText size={20} />
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IEEE Publication</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
        {pub.title}
      </h3>
      <p className="text-accent/80 text-xs font-medium mb-4 leading-relaxed">{pub.conference}</p>
      <p className="text-slate-500 text-sm leading-relaxed">{pub.summary}</p>
    </motion.div>
  );
};

const ResearchAndProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Projects Column */}
        <div>
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-accent mb-4"
            >
              <FlaskConical size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Applied Science</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter"
            >
              Key Projects
            </motion.h2>
          </div>
          <div className="space-y-6">
            {resumeData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Publications Column */}
        <div>
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-accent mb-4"
            >
              <BookOpen size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Research Output</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter"
            >
              Publications
            </motion.h2>
          </div>
          <div className="space-y-6">
            {resumeData.publications.map((pub, index) => (
              <PublicationCard key={index} pub={pub} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAndProjects;
