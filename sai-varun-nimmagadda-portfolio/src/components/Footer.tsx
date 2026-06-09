import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, ArrowUp } from 'lucide-react';
import { resumeData } from '../data';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-6 border-t border-slate-100 bg-slate-50/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tighter mb-6">
              SV<span className="text-accent">N</span>
            </h2>
            <p className="text-slate-500 max-w-md leading-relaxed mb-8">
              {resumeData.basics.summary}
            </p>
            <div className="flex gap-4">
              {resumeData.basics.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent-border transition-all shadow-sm"
                >
                  {link.label === 'Email' ? <Mail size={18} /> : link.label === "Sai Varun's Linkedin" ? <Linkedin size={18} /> : <Github size={18} />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Mail size={16} className="text-accent" />
                {resumeData.basics.email}
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <MapPin size={16} className="text-accent" />
                {resumeData.basics.location}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-500 text-sm hover:text-accent transition-colors">About</a></li>
              <li><a href="#experience" className="text-slate-500 text-sm hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#achievements" className="text-slate-500 text-sm hover:text-accent transition-colors">Achievements</a></li>
              <li><a href="#skills" className="text-slate-500 text-sm hover:text-accent transition-colors">Skills</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-xs tracking-widest">
            © 2026 {resumeData.basics.name}. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-all hover:scale-110 shadow-lg shadow-accent/20"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
