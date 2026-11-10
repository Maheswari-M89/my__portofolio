import React, { useState } from 'react';
import { Camera, Filter, ZoomIn, Sparkles } from 'lucide-react';
import { galleryPhotos } from '../data/portfolioData';

export default function Gallery({ onOpenImage }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Projects & Prototypes',
    'Hackathons & Presentations',
    'NSS & Campus Life'
  ];

  const filteredPhotos = activeCategory === 'All'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-plum-950/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-plum-800/80 text-gold-300 border border-gold-400/20 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Chronicles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Moments from My Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-3">
            Authentic moments captured across field visits, hardware circuit prototypes, hackathon stages, presentations, and NSS camp life.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-lavender-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-plum-950 font-semibold shadow-md shadow-gold-500/15'
                  : 'glass-panel text-slate-300 hover:text-gold-200 hover:bg-plum-800/60 border-plum-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenImage(photo)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-plum-900 border border-plum-700/60 hover:border-gold-400/50 cursor-pointer shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-plum-950/80"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/95 via-plum-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-300 bg-plum-900/90 px-2 py-0.5 rounded-full border border-gold-400/20">
                    {photo.category}
                  </span>
                  <div className="p-1 rounded-full bg-gold-400/20 text-gold-300">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-serif text-sm font-semibold text-slate-100 line-clamp-1 mb-1">
                  {photo.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed italic">
                  "{photo.caption}"
                </p>
              </div>

              {/* Subtle category chip always visible at top corner */}
              <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-0 transition-opacity">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-plum-950/80 text-gold-300 border border-plum-700/60 backdrop-blur-sm">
                  {photo.category.split('&')[0].trim()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>All gallery photos are real, authentic captures from my college projects, hackathons, and NSS activities.</span>
        </div>
      </div>
    </section>
  );
}

