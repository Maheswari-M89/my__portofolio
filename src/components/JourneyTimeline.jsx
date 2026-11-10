import React, { useState } from 'react';
import { Milestone, BookOpen, Award, Code, Cpu, Sparkles, ChevronRight } from 'lucide-react';
import { timelineMilestones } from '../data/portfolioData';

export default function JourneyTimeline() {
  const [activeNode, setActiveNode] = useState(5); // default highlight on 2nd rank or latest

  const iconMap = {
    1: BookOpen,
    2: BookOpen,
    3: Cpu,
    4: Code,
    5: Award,
    6: Sparkles
  };

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-plum-950/60">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-plum-800/80 text-gold-300 border border-gold-400/20 mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Path of Growth</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            My Journey Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-3">
            Milestones from government school foundations to engineering achievements and practical exploration.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-lavender-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central stem line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-plum-700 via-gold-500/40 to-plum-700 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {timelineMilestones.map((item, idx) => {
              const IconComponent = iconMap[item.id] || Sparkles;
              const isEven = idx % 2 === 0;
              const isSelected = activeNode === item.id;
              const isSpecialAchievement = item.id === 5;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveNode(item.id)}
                  className={`relative flex flex-col sm:flex-row items-start cursor-pointer transition-all duration-300 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card Side */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                    <div
                      className={`glass-panel rounded-2xl p-5 sm:p-6 transition-all duration-300 group hover:-translate-y-1 ${
                        isSelected
                          ? 'border-gold-400/50 shadow-lg shadow-gold-500/10 bg-plum-850'
                          : 'border-plum-700/50 hover:border-gold-400/30'
                      } ${isSpecialAchievement ? 'bg-gradient-to-br from-plum-850 to-plum-900 border-gold-400/40' : ''}`}
                    >
                      {/* Top metadata */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-plum-800 text-gold-300 border border-gold-400/20">
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`font-serif text-base sm:text-lg font-bold mb-2 transition-colors ${
                        isSelected || isSpecialAchievement ? 'text-gold-300' : 'text-slate-100 group-hover:text-gold-200'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Takeaway / Reflection */}
                      <div className="pt-2.5 border-t border-plum-700/60 flex items-start gap-2 text-xs text-lavender-300">
                        <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="italic">{item.takeaway}</span>
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                        isSelected
                          ? 'bg-gradient-to-tr from-gold-400 to-amber-500 text-plum-950 scale-110 ring-4 ring-gold-400/20'
                          : isSpecialAchievement
                          ? 'bg-gold-500 text-plum-950 ring-2 ring-gold-400/30'
                          : 'bg-plum-900 text-gold-300 border border-gold-400/30'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Empty Spacer Side on Desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

