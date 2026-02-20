import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EssenceWizard = () => {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState(null);

  const questions = [
    {
      question: "Quelle est votre humeur aujourd'hui ?",
      options: [
        { label: "Royale & Assurance", value: "Ambre Gold" },
        { label: "Douce & Pure", value: "Musk Blanc" },
        { label: "Exotique & Évasion", value: "Exotic Garden" },
        { label: "Gourmande & Sucrée", value: "Vanille" }
      ]
    }
  ];

  const finishWizard = (val) => {
    setChoice(val);
    setStep(1);
  };

  return (
    <section className="py-24 px-10 bg-[#FDFBFB]">
      <div className="max-w-4xl mx-auto border border-[#D4AF37]/30 p-12 bg-white shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-[#D4AF37] text-sm tracking-[0.5em] uppercase mb-2">Service Personnalisé</h2>
          <p className="text-3xl font-light text-gray-800">Créez votre Essence</p>
        </div>

        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div 
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <p className="text-xl mb-8 text-gray-600">{questions[0].question}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[0].options.map((opt) => (
                  <button 
                    key={opt.label}
                    onClick={() => finishWizard(opt.value)}
                    className="py-4 px-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:bg-[#F9F9F9] transition-all duration-500 text-gray-700 tracking-widest text-sm uppercase"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <p className="text-[#D4AF37] tracking-widest mb-2">NOTRE RECOMMANDATION ROYALE</p>
              <h3 className="text-4xl font-serif mb-6 uppercase tracking-tighter">{choice}</h3>
              <p className="text-gray-500 italic mb-8">"Cette essence a été sélectionnée pour s'harmoniser avec votre aura."</p>
              <button 
                onClick={() => setStep(0)}
                className="text-xs border-b border-gray-400 pb-1 text-gray-400 hover:text-[#D4AF37] uppercase tracking-widest"
              >
                Recommencer le diagnostic
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EssenceWizard;
