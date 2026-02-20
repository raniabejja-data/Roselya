import React from 'react';
import { motion } from 'framer-motion';

const RoselyaHome = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-screen font-serif">
      
      {/* --- MENU ROYAL --- */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="text-2xl tracking-[0.2em] font-bold text-[#D4AF37]">ROSÉLYA</div>
        
        <div className="hidden md:flex space-x-10 text-sm uppercase tracking-widest text-gray-700">
          <a href="#" className="hover:text-[#D4AF37] transition">Nos Huiles Parfumées</a>
          <a href="#" className="hover:text-[#D4AF37] transition">Nos Packs</a>
          <a href="#" className="font-semibold text-[#D4AF37] border-b border-[#D4AF37]">Créez votre essence</a>
        </div>

        <div className="flex items-center space-x-5">
          <button className="text-[#D4AF37]">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="relative text-[#D4AF37]">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
             <span className="absolute -top-1 -right-2 bg-[#FADADD] text-[#D4AF37] text-[10px] rounded-full px-1">0</span>
          </button>
        </div>
      </nav>

      {/* --- SECTION VIDÉO HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vidéo de fond */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/videos/hero-roselya.mp4" type="video/mp4" />
          {/* Firefly Cinematic close-up of the elegant woman */}
        </video>

        {/* Overlay pour l'élégance */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Texte et Slogan */}
        <div className="relative z-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-5xl md:text-7xl tracking-[0.3em] mb-4 font-light"
          >
            ROSÉLYA
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="text-lg md:text-xl tracking-[0.5em] uppercase font-extralight italic"
          >
            Votre Essence Royale
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-10 px-10 py-4 border border-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest uppercase text-xs"
          >
            Découvrir la Collection
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default RoselyaHome;
