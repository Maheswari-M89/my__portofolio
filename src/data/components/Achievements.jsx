import React from 'react';
import { Award, Trophy, Sparkles, CheckCircle, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements({ onOpenImage }) {
  return (
    <section id="experiences" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-plum-950/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-plum-800/80 text-gold-300 border border-gold-400/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Recognitions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Hackathons & Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-3">
            Meaningful milestones earned through academic dedication and continuous team sprint problem-solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-lavender-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Achievement 1: 2nd Rank in 1st Year */}
          <div className="glass-panel rounded-3xl p-7 border border-gold-400/30 relative overflow-hidden flex flex-col justify-between hover:border-gold-400/50 transition-all duration-300 shadow-xl group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-gold-400/15 transition-colors" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-3xl sm:text-4xl">🥈</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gold-500/20 text-gold-300 border border-gold-400/30">
                  Academic Excellence
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-100 group-hover:text-gold-300 transition-colors mb-2">
                2nd Rank in 1st-Year Engineering
              </h3>

              <div className="space-y-1 text-xs text-slate-400 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>K.S. Institute of Technology (KSIT), Bengaluru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-lavender-400" />
                  <span>Foundational First-Year Curriculum</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Secured the second rank across the department during the foundational first year of engineering. This achievement reflects consistent study dedication, analytical problem-solving, and a genuine passion for understanding core mathematics, circuit analysis, and foundational science principles.
              </p>
            </div>

            <div className="pt-4 border-t border-plum-700/60 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-gold-300">Verified Department Rank</span>
              <span className="text-[11px] italic">KSIT Academic Merit</span>
            </div>
          </div>

          {/* Achievement 2: 3rd Place Parivarthana Hackathon */}
          <div className="glass-panel rounded-3xl p-7 border border-gold-400/30 relative overflow-hidden flex flex-col justify-between hover:border-gold-400/50 transition-all duration-300 shadow-xl group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/15 transition-colors" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-3xl sm:text-4xl">🥉</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  24-Hour Hackathon Win
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-100 group-hover:text-gold-300 transition-colors mb-2">
                3rd Place — Parivarthana Hackathon
              </h3>

              <div className="space-y-1 text-xs text-slate-400 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Vidyavardhaka College of Engineering (VVCE), Mysuru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span className="text-slate-300 font-medium">Early Disease Detection System for Arecanut Farmers</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Our team conceived, wired, programmed, and demonstrated a working hardware prototype within an intense 24-hour hackathon. The system monitors soil moisture, ambient humidity, and temperature for yellow leaf and fruit rot disease prevention in arecanut plantations.
              </p>
            </div>

            <div className="pt-4 border-t border-plum-700/60 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-gold-300">Trophy & Merit Certificates</span>
              <span className="text-[11px] italic">Team Innovation Award</span>
            </div>
          </div>
        </div>

        {/* Real Hackathon Photo Showcase Row */}
        <div className="glass-panel-subtle rounded-3xl p-6 border border-gold-400/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-gold-300 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Moments from Parivarthana Hackathon</span>
            </h4>
            <span className="text-xs text-slate-400">Click to view</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                url: "/images/hackathon_award_stage.jpg",
                title: "Stage Award Ceremony",
                caption: "Receiving the 3rd Place trophy and certificates on the Parivarthana Hackathon stage at VVCE"
              },
              {
                url: "/images/hackathon_team_trophy.jpg",
                title: "Team Trophy Photo",
                caption: "Our team proudly holding the 3rd Place trophy and certificates at VVCE"
              },
              {
                url: "/images/hackathon_principal_felicitation.jpg",
                title: "KSIT Principal Felicitation",
                caption: "Honored by the Principal of KSIT for our collegiate hackathon achievement"
              },
              {
                url: "/images/hackathon_judges_pitch.jpg",
                title: "Presentation to Evaluators",
                caption: "Pitching our hardware prototype and sensor readings live to the evaluation panel"
              }
            ].map((pic, idx) => (
              <div
                key={idx}
                onClick={() => onOpenImage(pic)}
                className="group relative rounded-xl overflow-hidden aspect-video bg-plum-900 border border-plum-700/60 hover:border-gold-400/50 cursor-pointer shadow-sm transition-all"
              >
                <img
                  src={pic.url}
                  alt={pic.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
                  <p className="text-[11px] text-slate-200 line-clamp-1">
                    {pic.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

