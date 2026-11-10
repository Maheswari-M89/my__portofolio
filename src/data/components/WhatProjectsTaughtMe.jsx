import React from 'react';
import { 
  HeartHandshake, 
  Cpu, 
  Wrench, 
  Users, 
  Clock, 
  Presentation, 
  Sparkles,
  Compass
} from 'lucide-react';
import { projectLessons } from '../data/portfolioData';

export default function WhatProjectsTaughtMe() {
  const iconMap = {
    Cpu: Cpu,
    Wrench: Wrench,
    Users: Users,
    Clock: Clock,
    Presentation: Presentation,
    Sparkles: Sparkles
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-plum-800/80 text-gold-300 border border-gold-400/20 mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Growth Reflections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            More Than Just Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-3">
            Building hardware and developing code taught me lessons that extend far beyond equations and technical syntax.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-lavender-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Elegant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectLessons.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-plum-700/60 hover:border-gold-400/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-gold-500/10 transition-colors" />

                <div className="w-11 h-11 rounded-xl bg-plum-800/90 text-gold-400 border border-gold-400/20 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-gold-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-base font-bold text-slate-100 group-hover:text-gold-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

