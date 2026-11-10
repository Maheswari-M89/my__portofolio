import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import JourneyTimeline from './components/JourneyTimeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhatProjectsTaughtMe from './components/WhatProjectsTaughtMe';
import Achievements from './components/Achievements';
import NSSBeyondClassroom from './components/NSSBeyondClassroom';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

export default function App() {
  const [modalImage, setModalImage] = useState(null);

  const handleOpenImage = (image) => {
    setModalImage(image);
  };

  const handleCloseImage = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-plum-950 text-slate-100 flex flex-col font-sans selection:bg-gold-500/30 selection:text-gold-200">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero / Home Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. My Journey Timeline */}
        <JourneyTimeline />

        {/* 4. Skills I'm Building */}
        <Skills />

        {/* 5. Real Projects Showcase with Live Simulation */}
        <Projects onOpenImage={handleOpenImage} />

        {/* 6. More Than Just Projects: Key Takeaways */}
        <WhatProjectsTaughtMe />

        {/* 7. Hackathons & Genuine Achievements */}
        <Achievements onOpenImage={handleOpenImage} />

        {/* 8. Beyond the Classroom: NSS Samanvaya Camp */}
        <NSSBeyondClassroom onOpenImage={handleOpenImage} />

        {/* 9. Visual Photo Gallery with Real Images */}
        <Gallery onOpenImage={handleOpenImage} />

        {/* 10. Student-Friendly Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox / Fullscreen Image Modal */}
      {modalImage && (
        <ImageModal image={modalImage} onClose={handleCloseImage} />
      )}
    </div>
  );
}
