import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#D4AF37]/20 pt-16 pb-8 px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION DES ENGAGEMENTS --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16 text-center border-b border-gray-50 pb-16">
          <div>
            <h4 className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-3">Origine</h4>
            <p className="text-sm font-light text-gray-600">Fait avec passion au Maroc</p>
          </div>
          <div>
            <h4 className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-3">Pureté</h4>
            <p className="text-sm font-light text-gray-600">100% Naturel & Sans Alcool</p>
          </div>
          <div>
            <h4 className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-3">Expédition</h4>
            <p className="text-sm font-light text-gray-600">Livraison partout (20 DH)</p>
          </div>
          <div>
            <h4 className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-3">Attention</h4>
            <p className="text-sm font-light text-gray-600">Carte de remerciement incluse</p>
          </div>
        </div>

        {/* --- NAVIGATION & CONTACT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Colonne 1: La Marque */}
          <div>
            <h3 className="text-xl tracking-[0.3em] font-bold text-[#D4AF37] mb-6">ROSÉLYA</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              L'élégance d'une essence pure, la noblesse d'un rituel ancestral. 
              Redécouvrez votre signature olfactive.
            </p>
          </div>

          {/* Colonne 2: Liens Utiles */}
          <div className="flex flex-col space-y-4 text-sm tracking-widest uppercase text-gray-600">
            <a href="#" className="hover:text-[#D4AF37] transition">La Collection</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Nos Packs</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Suivre ma commande</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Mentions Légales</a>
          </div>

          {/* Colonne 3: Contact Royal */}
          <div className="space-y-4">
            <h4 className="text-sm tracking-widest uppercase mb-4">Conciergerie</h4>
            <p className="text-sm text-gray-500 flex items-center">
              <span className="mr-3">✉️</span> contact@rosélya.com
            </p>
            <a href="https://wa.me/212616256878" className="text-sm text-gray-500 flex items-center hover:text-[#D4AF37]">
              <span className="mr-3">📱</span> +212 616 25 68 78
            </a>
            <div className="flex space-x-6 pt-4">
              <a href="https://instagram.com/_Rosélya_" className="text-[#D4AF37] hover:opacity-70 transition">
                Instagram
              </a>
              <a href="#" className="text-[#D4AF37] hover:opacity-70 transition">
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="text-center pt-8 border-t border-gray-50">
          <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">
            © 2024 Rosélya. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
