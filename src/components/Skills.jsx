import React from 'react';
import { Wrench, Terminal, Cpu, Users, Sparkles, BookOpen } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const categoryIcons = {
    "Programming": Terminal,
    "Emerging Technology": Sparkles,
    "Core Engineering": Cpu,
    "Professional & Life Skills": Users
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Building Foundations':
        return 'bg-gold-500/15 text-gold-300 border-gold-400/30';
      case 'Learning':
        return 'bg-lavender-500/15 text-lavender-300 border-lavender-400/30';
      case 'Exploring':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30';
      case 'Practiced':
        return 'bg-amber-500/15 text-amber-200 border-amber-400/30';
      default:
        return 'bg-plum-800 text-slate-300 border-plum-700';
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-plum-800/80 text-gold-300 border border-gold-400/20 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Growth & Capability</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Skills I'm Building
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-3">
            An honest reflection of the engineering competencies, programming tools, and professional habits I am actively developing through coursework, labs, and hackathons.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-lavender-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Legend / Transparency Note */}
        <div className="mb-10 p-4 rounded-2xl glass-panel-subtle border border-gold-400/15 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            <span className="font-medium">Progress Philosophy:</span>
            <span className="text-slate-400">No fabricated percentages — just authentic milestones of growth.</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-gold-500/15 text-gold-300 border border-gold-400/30">
              Building Foundations
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-lavender-500/15 text-lavender-300 border border-lavender-400/30">
              Learning
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
              Exploring
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => {
            const Icon = categoryIcons[category.category] || Wrench;
            return (
              <div 
                key={category.category}
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-plum-700/60 hover:border-gold-400/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-plum-700/50">
                    <div className="p-2.5 rounded-xl bg-plum-800 text-gold-400 border border-gold-400/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-100">
                        {category.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.items.length} {category.items.length === 1 ? 'area' : 'areas'} of active practice
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {category.items.map((skill) => (
                      <div 
                        key={skill.name}
                        className="p-3.5 rounded-xl bg-plum-900/60 border border-plum-700/40 hover:border-gold-400/20 transition-all group"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-sm font-semibold text-slate-200 group-hover:text-gold-200 transition-colors">
                            {skill.name}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono border ${getStatusBadgeClass(skill.status)}`}>
                            {skill.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

