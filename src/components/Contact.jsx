import React, { useState } from 'react';
import { Mail, Send, MessageSquare, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate student connect submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-plum-800/80 text-gold-300 border border-gold-400/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Let's Learn, Build & Connect
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mt-3">
            I'm always learning and exploring new opportunities, projects, and technologies. Feel free to connect with me.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-lavender-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-gold-400/20 space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-100 mb-2">
                Say Hello!
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you're a fellow engineering student, a mentor, or someone passionate about electronics, agriculture tech, or open-source exploration, I'd love to connect and exchange ideas.
              </p>
            </div>

            {/* Quick Details */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-plum-900/60 border border-plum-700/50 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-plum-800 text-gold-400 border border-gold-400/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">KSIT Campus • Bengaluru, India</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-plum-900/60 border border-plum-700/50 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-plum-800 text-gold-400 border border-gold-400/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-medium text-gold-300 hover:underline break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social / Professional Profiles */}
            <div className="pt-3 border-t border-plum-700/60">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                Professional & Code Profiles
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-gold-300 hover:border-gold-400/40 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-gold-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-gold-300 hover:border-gold-400/40 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-lavender-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Message Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-gold-400/20 relative">
            <h3 className="font-serif text-xl font-bold text-slate-100 mb-1">
              Send a Note
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Drop an encouraging note, project feedback, or inquiry.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-slate-100">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Your message has been captured. I appreciate you stopping by my portfolio!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh or Sarah"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-plum-900/80 border border-plum-700/60 focus:border-gold-400/60 focus:outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-plum-900/80 border border-plum-700/60 focus:border-gold-400/60 focus:outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your thoughts, suggestions, or words of encouragement..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-plum-900/80 border border-plum-700/60 focus:border-gold-400/60 focus:outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-plum-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:brightness-110 shadow-lg shadow-gold-500/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
