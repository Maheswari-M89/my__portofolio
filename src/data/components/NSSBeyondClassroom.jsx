import React from 'react';
import { 
  Heart, 
  MapPin, 
  Users, 
  Megaphone, 
  Trees, 
  Palette, 
  UtensilsCrossed, 
  Smile, 
  Sparkles,
  Award,
  Eye
} from 'lucide-react';
import { nssCampData } from '../data/portfolioData';

export default function NSSBeyondClassroom({ onOpenImage }) {
  const iconMap = {
    Megaphone: Megaphone,
    Sparkles: Sparkles,
    Trees: Trees,
    Palette: Palette,
    UtensilsCrossed: UtensilsCrossed,
    Smile: Smile
  };

  const nssPhotos = [
    {
      url: "/images/nss_memento_award.jpg",
      title: "Valedictory Memento Presentation",
      caption: "Receiving the NSS Special Camp certificate and memento on stage at the valedictory program"
    },
    {
      url: "/images/nss_health_camp.jpg",
      title: "Community Welfare & Health Assistance",
      caption: "Interacting with and guiding village elders during the health checkup camp at Nallahalli"
    },
    {
      url: "/images/nss_village_cleaning.jpg",
      title: "Village Cleaning Drive (Swachhata)",
      caption: "Active on-ground road cleaning and waste collection along the rural pathways of Nallahalli"
    },
    {
      url: "/images/nss_awareness_drive.jpg",
      title: "Public Awareness Walk",
      caption: "Carrying awareness placards through the village promoting cleanliness and community well-being"
    },
    {
      url: "/images/nss_cultural_art.jpg",
      title: "Cultural Rangoli Art",
      caption: "Participating in creative floor art and rangoli design during college community celebrations"
    },
    {
      url: "/images/nss_group_delegation.jpg",
      title: "KSIT Student NSS Delegation",
      caption: "NSS volunteers and faculty mentors during an outdoor institutional engagement session"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-plum-800/80 text-gold-300 border border-gold-400/20 mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Community & Empathy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Beyond the Classroom — NSS
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-3">
            National Service Scheme (NSS) special camp experience at Nallahalli — learning responsibility, community connection, and humble leadership.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-lavender-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Camp Overview Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-gold-400/25 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-gold-500/20 text-gold-300 border border-gold-400/30">
                  Camp: {nssCampData.campName}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-plum-800/80 border border-plum-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Location: {nssCampData.location}</span>
                </span>
                <span className="text-xs font-mono text-lavender-300 italic">
                  "{nssCampData.motto}"
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
                Samanvaya NSS Special Camp at Nallahalli
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {nssCampData.reflection}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-lg bg-plum-900 border border-plum-700/60 text-slate-300">
                  Teamwork & Shared Duties
                </span>
                <span className="px-3 py-1 rounded-lg bg-plum-900 border border-plum-700/60 text-slate-300">
                  Community Responsibility
                </span>
                <span className="px-3 py-1 rounded-lg bg-plum-900 border border-plum-700/60 text-slate-300">
                  Ground-Level Empathy
                </span>
                <span className="px-3 py-1 rounded-lg bg-plum-900 border border-plum-700/60 text-slate-300">
                  Social Connection
                </span>
              </div>
            </div>

            {/* Stage Memento Highlight */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div 
                onClick={() => onOpenImage(nssPhotos[0])}
                className="w-full group relative rounded-2xl overflow-hidden aspect-[4/3] bg-plum-900 border border-gold-400/30 cursor-pointer shadow-lg hover:border-gold-400/60 transition-all"
              >
                <img
                  src="/images/nss_memento_award.jpg"
                  alt="Maheshwari receiving NSS memento"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/20 to-transparent p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-300 font-semibold">Special Camp Recognition</span>
                  <p className="text-xs text-slate-200 line-clamp-1">Stage Valedictory Memento Presentation</p>
                </div>
              </div>
              <span className="text-[11px] text-slate-400 mt-2 italic text-center">
                Honored at the Nallahalli NSS Valedictory Function
              </span>
            </div>
          </div>
        </div>

        {/* Camp Activities Grid */}
        <div className="mb-14">
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 mb-6 text-center">
            Key Activities Undertaken During the Camp
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nssCampData.activities.map((act, idx) => {
              const Icon = iconMap[act.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="glass-panel-subtle rounded-2xl p-5 border border-plum-700/60 hover:border-gold-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-xl bg-plum-800 text-gold-400 border border-gold-400/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h5 className="font-serif text-sm font-semibold text-slate-100">
                      {act.title}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real NSS Camp Photo Gallery */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-gold-300 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>NSS Camp Photo Chronicles (Nallahalli)</span>
            </h4>
            <span className="text-xs text-slate-400">Click any photograph</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {nssPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => onOpenImage(photo)}
                className="group relative rounded-xl overflow-hidden aspect-square bg-plum-900 border border-plum-700/60 hover:border-gold-400/50 cursor-pointer shadow-sm transition-all"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
                  <p className="text-[10px] text-slate-200 line-clamp-2 leading-tight">
                    {photo.title}
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

