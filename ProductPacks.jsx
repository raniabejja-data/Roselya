{/* --- SECTION DES PACKS ROYAUX (Composant n°3: ProductPacks.jsx) --- */}
<section className="py-24 px-10 bg-[#F9F9F9]">
  <div className="max-w-7xl mx-auto">
    
    {/* Titre de prestige */}
    <div className="flex flex-col items-center mb-16 text-center">
      <h2 className="text-[#D4AF37] text-sm tracking-[0.5em] uppercase mb-4">Les Collections Exclusive</h2>
      <p className="text-4xl font-light text-gray-900 italic">Nos Coffrets Royaux</p>
      <div className="w-24 h-[1px] bg-[#D4AF37] mt-6"></div>
    </div>

    {/* Grille des 4 Packs à 320 DH */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Pack 1: Signature Royale */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="relative group bg-white p-8 border border-gray-100 shadow-sm"
      >
        <div className="overflow-hidden mb-6">
          <img src="/images/packs/signature-royale.png" alt="Pack Signature Royale" className="w-full h-[400px] object-cover transition duration-1000 group-hover:scale-105" />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl tracking-widest text-gray-800">SIGNATURE ROYALE</h3>
            <p className="text-sm text-gray-500 italic mt-1">Amber • Musk Blanc • Fleur</p>
          </div>
          <p className="text-xl font-semibold text-[#D4AF37]">320 DH</p>
        </div>
        <button className="w-full mt-8 py-4 bg-[#D4AF37] text-white tracking-[0.3em] text-xs uppercase hover:bg-black transition-colors duration-500">
          Offrir ce Coffret
        </button>
      </motion.div>

      {/* Pack 2: Douceur Gourmande */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="relative group bg-white p-8 border border-gray-100 shadow-sm"
      >
        <div className="overflow-hidden mb-6">
          <img src="/images/packs/douceur-gourmande.png" alt="Pack Douceur Gourmande" className="w-full h-[400px] object-cover transition duration-1000 group-hover:scale-105" />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl tracking-widest text-gray-800">DOUCEUR GOURMANDE</h3>
            <p className="text-sm text-gray-500 italic mt-1">Vanille • Caramel • Chocolat</p>
          </div>
          <p className="text-xl font-semibold text-[#D4AF37]">320 DH</p>
        </div>
        <button className="w-full mt-8 py-4 bg-[#D4AF37] text-white tracking-[0.3em] text-xs uppercase hover:bg-black transition-colors duration-500">
          Offrir ce Coffret
        </button>
      </motion.div>

      {/* Pack 3: L'Escale Exotique */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="relative group bg-white p-8 border border-gray-100 shadow-sm"
      >
        <div className="overflow-hidden mb-6">
          <img src="/images/packs/escale-exotique.png" alt="L'Escale Exotique" className="w-full h-[400px] object-cover transition duration-1000 group-hover:scale-105" />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl tracking-widest text-gray-800">L'ESCALE EXOTIQUE</h3>
            <p className="text-sm text-gray-500 italic mt-1">Exotic Garden • Coco • Fruitier</p>
          </div>
          <p className="text-xl font-semibold text-[#D4AF37]">320 DH</p>
        </div>
        <button className="w-full mt-8 py-4 bg-[#D4AF37] text-white tracking-[0.3em] text-xs uppercase hover:bg-black transition-colors duration-500">
          Offrir ce Coffret
        </button>
      </motion.div>

      {/* Pack 4: Bien-être */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="relative group bg-white p-8 border border-gray-100 shadow-sm"
      >
        <div className="overflow-hidden mb-6">
          <img src="/images/packs/bien-etre.png" alt="Pack Bien-être" className="w-full h-[400px] object-cover transition duration-1000 group-hover:scale-105" />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl tracking-widest text-gray-800">BIEN-ÊTRE</h3>
            <p className="text-sm text-gray-500 italic mt-1">Honey • Coco • Musk Blanc</p>
          </div>
          <p className="text-xl font-semibold text-[#D4AF37]">320 DH</p>
        </div>
        <button className="w-full mt-8 py-4 bg-[#D4AF37] text-white tracking-[0.3em] text-xs uppercase hover:bg-black transition-colors duration-500">
          Offrir ce Coffret
        </button>
      </motion.div>

    </div>
  </div>
</section>
