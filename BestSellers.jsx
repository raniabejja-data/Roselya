{/* --- SECTION BEST-SELLERS (Composant n°2) --- */}
<section className="py-24 px-10 bg-white">
  <div className="max-w-7xl mx-auto">
    
    {/* Titre de la section */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-2">Sélection de Prestige</h2>
      <p className="text-3xl font-light tracking-wide text-gray-800">Nos Best-Sellers</p>
    </motion.div>

    {/* Grille des 3 Huiles */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      
      {/* Huile 1: Musk Blanc */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="group cursor-pointer text-center"
      >
        <div className="bg-[#F9F9F9] p-10 mb-6 overflow-hidden relative">
          <img src="/images/products/musk-blanc.png" alt="Musk Blanc" className="w-full h-auto transform group-hover:scale-105 transition duration-700" />
          <div className="absolute top-4 right-4 text-[10px] tracking-widest text-[#D4AF37] border border-[#D4AF37] px-2 py-1">ESSENCE PURE</div>
        </div>
        <h3 className="text-xl tracking-widest text-gray-800 mb-1">MUSK BLANC</h3>
        <p className="text-[#D4AF37] font-medium">120 DH</p>
        <button className="mt-4 text-xs tracking-[0.2em] uppercase border-b border-gray-300 pb-1 hover:border-[#D4AF37] transition">Ajouter au panier</button>
      </motion.div>

      {/* Huile 2: Noix de Coco */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="group cursor-pointer text-center"
      >
        <div className="bg-[#F9F9F9] p-10 mb-6 overflow-hidden relative">
          <img src="/images/products/noix-de-coco.png" alt="Noix de Coco" className="w-full h-auto transform group-hover:scale-105 transition duration-700" />
        </div>
        <h3 className="text-xl tracking-widest text-gray-800 mb-1">NOIX DE COCO</h3>
        <p className="text-[#D4AF37] font-medium">120 DH</p>
        <button className="mt-4 text-xs tracking-[0.2em] uppercase border-b border-gray-300 pb-1 hover:border-[#D4AF37] transition">Ajouter au panier</button>
      </motion.div>

      {/* Huile 3: Fleur */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="group cursor-pointer text-center"
      >
        <div className="bg-[#F9F9F9] p-10 mb-6 overflow-hidden relative">
          <img src="/images/products/fleur.png" alt="Fleur" className="w-full h-auto transform group-hover:scale-105 transition duration-700" />
        </div>
        <h3 className="text-xl tracking-widest text-gray-800 mb-1">FLEUR</h3>
        <p className="text-[#D4AF37] font-medium">120 DH</p>
        <button className="mt-4 text-xs tracking-[0.2em] uppercase border-b border-gray-300 pb-1 hover:border-[#D4AF37] transition">Ajouter au panier</button>
      </motion.div>

    </div>
  </div>
</section>
