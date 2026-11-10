import React from 'react';
import { BookOpen, Sparkles, Compass, Lightbulb, GraduationCap, Code } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-plum-800/80 text-gold-300 border border-gold-400/20 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Story & Foundation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            About My Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-lavender-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Visual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-gold-400/20 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="flex items-center gap-3 pb-3 border-b border-plum-800">
              <div className="p-2.5 rounded-xl bg-gold-400/10 text-gold-400">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-slate-100">
                  Curiosity Rooted in Growth
                </h3>
                <p className="text-xs text-slate-400">From Government Schooling to Engineering Circuits</p>
              </div>
            </div>

            <p>
              I am currently in my <span className="text-slate-100 font-medium">2nd year of Electronics and Communication Engineering</span> at <span className="text-gold-300 font-medium">K.S. Institute of Technology (KSIT), Bengaluru</span>. My expected graduation year is approximately 2029.
            </p>

            <p>
              Before engineering, I studied PCMB (Physics, Chemistry, Mathematics, and Biology) and completed my foundational schooling in a <span className="text-slate-100 font-medium">Kannada-medium government school</span>. This experience is a cherished and defining chapter of my life — it taught me resilience, the power of active listening, and how to build a strong scientific curiosity from grounded beginnings.
            </p>

            <p>
              In 2025, I entered engineering through <span className="text-gold-300 font-medium">KCET</span>. Shortly after PUC, I set up my LinkedIn profile and began discovering how vast the technological landscape is. <span className="text-slate-100 font-medium">Python became my very first programming language</span>, sparking my excitement for logical problem-solving and software logic.
            </p>

            <p>
              Today, I find genuine joy in bridging hardware and software — whether that means assembling sensor circuits on a breadboard, simulating digital logic in Verilog, or participating in 24-hour hackathons. I am still learning every single day, developing my skills through projects, academics, hackathons, and practical experiences.
            </p>

            {/* Quote banner */}
            <div className="p-4 rounded-2xl bg-plum-900/80 border-l-4 border-gold-400 text-xs sm:text-sm text-slate-300 italic">
              "Engineering to me is not about claiming to know everything — it's about being curious enough to ask why, patient enough to troubleshoot what went wrong, and eager enough to build what helps people."
            </div>
          </div>

          {/* Key Facts & Quick Profile Card */}
          <div className="lg:col-span-5 space-y-5">
            {/* Academic Snapshot Card */}
            <div className="glass-panel rounded-3xl p-6 border border-gold-400/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-gold-400/10 text-gold-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-semibold text-slate-100">
                  Academic & Learning Profile
                </h4>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-plum-900/60 border border-plum-700/50 flex flex-col">
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider font-mono">Current Program</span>
                  <span className="font-semibold text-slate-200 mt-0.5">B.E. in Electronics & Communication</span>
                  <span className="text-slate-400 text-xs">KSIT, Bengaluru • 2nd Year (2025 - ~2029)</span>
                </div>

                <div className="p-3 rounded-xl bg-plum-900/60 border border-gold-400/30 flex flex-col relative">
                  <span className="text-gold-400 text-[11px] uppercase tracking-wider font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Academic Milestone
                  </span>
                  <span className="font-semibold text-gold-300 text-sm mt-0.5">2nd Rank in 1st-Year Engineering</span>
                  <span className="text-slate-300 text-xs">Recognized for foundational excellence across subjects</span>
                </div>

                <div className="p-3 rounded-xl bg-plum-900/60 border border-plum-700/50 flex flex-col">
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider font-mono">Foundations</span>
                  <span className="font-medium text-slate-200 mt-0.5">PCMB (Pre-University) & Kannada-Medium Schooling</span>
                  <span className="text-slate-400 text-xs">Government school background • Strong science foundation</span>
                </div>

                <div className="p-3 rounded-xl bg-plum-900/60 border border-plum-700/50 flex flex-col">
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider font-mono">First Coding Language</span>
                  <span className="font-medium text-slate-200 mt-0.5">Python</span>
                  <span className="text-slate-400 text-xs">Started post-PUC exploration into programming & technology</span>
                </div>
              </div>
            </div>

            {/* Core Values Badge Card */}
            <div className="glass-panel-subtle rounded-3xl p-5 border border-lavender-400/15">
              <h5 className="text-xs font-mono uppercase tracking-wider text-lavender-300 mb-3 flex items-center gap-2">
                <Code className="w-3.5 h-3.5" />
                <span>What Drives Me</span>
              </h5>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-plum-800/70 border border-plum-700 text-slate-300">
                  Practical Problem Solving
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-plum-800/70 border border-plum-700 text-slate-300">
                  Community Impact (NSS)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-plum-800/70 border border-plum-700 text-slate-300">
                  Continuous Curiosity
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-plum-800/70 border border-plum-700 text-slate-300">
                  Hands-on Prototyping
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

