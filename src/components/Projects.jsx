import React, { useState } from 'react';
import { 
  FolderGit2, 
  Award, 
  Cpu, 
  CheckCircle2, 
  ExternalLink, 
  User, 
  Users, 
  Clock, 
  Layers, 
  Zap, 
  Eye, 
  Plus, 
  Minus, 
  RotateCcw 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

// Interactive Simulation for Project 3: Smart Parking System using 4-Bit Synchronous Counter
function SmartParkingSimulator() {
  const [occupiedCount, setOccupiedCount] = useState(6);
  const totalSlots = 15; // 4-bit counter maximum capacity (0 to 15)

  const handleEntry = () => {
    if (occupiedCount < totalSlots) {
      setOccupiedCount(prev => prev + 1);
    }
  };

  const handleExit = () => {
    if (occupiedCount > 0) {
      setOccupiedCount(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setOccupiedCount(0);
  };

  const availableSlots = totalSlots - occupiedCount;
  const binaryRepresentation = occupiedCount.toString(2).padStart(4, '0');
  const isFull = occupiedCount === totalSlots;
  const isEmpty = occupiedCount === 0;

  return (
    <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-plum-950/80 border border-gold-400/25">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-plum-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-gold-300 font-medium">Verilog HDL Simulation Model</span>
        </div>
        <span className="text-slate-400 font-mono text-[11px]">4-Bit Synchronous Up/Down Counter</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 text-center">
        {/* Occupied Count */}
        <div className="p-3 rounded-xl bg-plum-900/70 border border-plum-700/60">
          <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400">Occupied Slots</span>
          <span className="text-2xl font-bold font-mono text-gold-300 mt-1 block">
            {occupiedCount}
          </span>
        </div>

        {/* Available Slots */}
        <div className="p-3 rounded-xl bg-plum-900/70 border border-plum-700/60">
          <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400">Available Slots</span>
          <span className="text-2xl font-bold font-mono text-emerald-400 mt-1 block">
            {availableSlots}
          </span>
        </div>

        {/* 4-Bit Binary Register */}
        <div className="p-3 rounded-xl bg-plum-900/70 border border-plum-700/60">
          <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400">4-Bit Q[3:0]</span>
          <span className="text-xl font-bold font-mono text-lavender-300 mt-1 block tracking-widest">
            {binaryRepresentation}
          </span>
        </div>

        {/* System Status Flag */}
        <div className="p-3 rounded-xl bg-plum-900/70 border border-plum-700/60">
          <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400">Status Flag</span>
          <span className={`text-xs font-mono font-bold mt-2.5 block uppercase tracking-wider ${
            isFull ? 'text-rose-400' : isEmpty ? 'text-slate-400' : 'text-emerald-300'
          }`}>
            {isFull ? 'PARKING FULL' : isEmpty ? 'ALL EMPTY' : 'AVAILABLE'}
          </span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleEntry}
            disabled={isFull}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gold-500/20 text-gold-300 border border-gold-400/40 hover:bg-gold-500/30 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Vehicle Entry (Up-Count)</span>
          </button>

          <button
            onClick={handleExit}
            disabled={isEmpty}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-lavender-500/20 text-lavender-300 border border-lavender-400/40 hover:bg-lavender-500/30 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <Minus className="w-3.5 h-3.5" />
            <span>Vehicle Exit (Down-Count)</span>
          </button>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-slate-200 hover:bg-plum-800 transition-colors"
          title="Reset counter"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Visual Slot Grid */}
      <div className="mt-4 pt-3 border-t border-plum-800/60">
        <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
          Live Slot Grid Representation ({occupiedCount}/15 Occupied)
        </span>
        <div className="grid grid-cols-5 sm:grid-cols-15 gap-1.5">
          {Array.from({ length: totalSlots }).map((_, i) => {
            const isSlotOccupied = i < occupiedCount;
            return (
              <div
                key={i}
                className={`h-7 rounded flex items-center justify-center text-[10px] font-mono transition-all duration-200 ${
                  isSlotOccupied
                    ? 'bg-rose-500/25 border border-rose-500/40 text-rose-300'
                    : 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                }`}
                title={`Slot ${i + 1}: ${isSlotOccupied ? 'Occupied' : 'Free'}`}
              >
                P{i + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ onOpenImage }) {
  const [selectedProject, setSelectedProject] = useState('arecanut-detection');

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-plum-950/70">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-plum-800/80 text-gold-300 border border-gold-400/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Engineering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Projects Built with Purpose
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-3">
            Real engineering challenges explored through hardware prototypes, sensor integration, digital logic, and hackathons.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-lavender-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedProject === project.id
                  ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-plum-950 font-semibold shadow-md shadow-gold-500/15'
                  : 'glass-panel text-slate-300 hover:text-gold-200 hover:bg-plum-800/70 border-plum-700/60'
              }`}
            >
              {project.isIndividual ? <User className="w-3.5 h-3.5" /> : <Users className="w-3.5 h-3.5" />}
              <span>{project.title}</span>
              {project.awardBadge && (
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-gold-400" />
              )}
            </button>
          ))}
        </div>

        {/* Detailed Active Project Display */}
        {projectsData.map((project) => {
          if (project.id !== selectedProject) return null;

          return (
            <div
              key={project.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-gold-400/25 shadow-2xl relative overflow-hidden transition-all duration-300"
            >
              {/* Top Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-plum-700/60">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-plum-800 text-gold-300 border border-gold-400/20">
                    {project.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-plum-900/80 border border-plum-700/60 flex items-center gap-1.5">
                    {project.isIndividual ? <User className="w-3 h-3 text-gold-400" /> : <Users className="w-3 h-3 text-lavender-400" />}
                    {project.type}
                  </span>
                </div>

                {project.awardBadge && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-500/20 to-amber-500/10 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold shadow-sm">
                    <span>{project.awardBadge}</span>
                  </div>
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="mt-6 mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gold-300/90 font-light">
                  {project.subtitle}
                </p>
              </div>

              {/* Overview */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {project.overview}
              </p>

              {/* Photos Gallery for Hardware Projects */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-gold-300 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Real Project Photographs & Demonstration</span>
                    </h4>
                    <span className="text-xs text-slate-400">Click any photo to enlarge</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {project.gallery.map((photo, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={() => onOpenImage(photo)}
                        className="group relative rounded-xl overflow-hidden aspect-video bg-plum-900 border border-plum-700/60 hover:border-gold-400/50 cursor-pointer shadow-sm transition-all duration-300"
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex items-end">
                          <p className="text-[11px] text-slate-200 line-clamp-2 leading-tight">
                            {photo.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Verilog Simulator for Project 3 */}
              {project.isIndividual && (
                <div className="mb-10">
                  <SmartParkingSimulator />
                </div>
              )}

              {/* Two Column Grid: Hardware / Tools Stack & Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Hardware & Tools Stack */}
                <div className="p-5 rounded-2xl bg-plum-900/60 border border-plum-700/50">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-gold-400" />
                    <span>Components & Technology Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.hardwareStack.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-plum-800 text-slate-200 border border-gold-400/15"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="p-5 rounded-2xl bg-plum-900/60 border border-plum-700/50">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-gold-400" />
                    <span>Key System Features</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What I Learned Section */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-plum-900/90 to-plum-850 border border-gold-400/25">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-lg bg-gold-400/15 text-gold-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-slate-100">
                    What I Learned
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  {project.whatILearned.map((learning, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-plum-950/40 border border-plum-800/60">
                      <span className="text-gold-400 font-bold font-mono text-xs mt-0.5">0{idx + 1}.</span>
                      <span className="leading-relaxed">{learning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

