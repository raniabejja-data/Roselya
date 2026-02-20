import React from 'react';
import { motion } from 'framer-motion';

const CartDrawer = ({ isOpen, onClose, cartItems = [] }) => {
  // Calcul du sous-total (Exemple avec tes prix : 120dh ou 320dh)
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 20; // Livraison fixe Maroc
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay sombre derrière le panier */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm" onClick={onClose} />
      )}

      {/* Panier Coulissant */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
      >
        {/* Header du Panier */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm font-semibold">Votre Écrin</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Liste des Produits (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center mt-20">
              <p className="text-gray-400 italic">Votre écrin est vide...</p>
              <button onClick={onClose} className="mt-4 text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]">Commencer mon rituel</button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex space-x-4 border-b border-gray-50 pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover bg-[#F9F9F9]" />
                <div className="flex-1">
                  <h3 className="text-sm tracking-widest uppercase">{item.name}</h3>
                  <p className="text-[#D4AF37] text-sm mt-1">{item.price} DH</p>
                  <button className="text-[10px] text-gray-400 uppercase mt-2">Supprimer</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Résumé et Paiement */}
        <div className="p-6 bg-[#FDFBFB] border-t border-gray-100">
          <div className="space-y-2 mb-6 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Sous-total</span>
              <span>{subtotal} DH</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Livraison (Partout au Maroc)</span>
              <span>{shipping} DH</span>
            </div>
            <div className="flex justify-between text-lg font-medium border-t border-gray-100 pt-4">
              <span className="text-gray-800">Total</span>
              <span className="text-[#D4AF37]">{total} DH</span>
            </div>
          </div>

          <button className="w-full py-5 bg-[#D4AF37] text-white tracking-[0.3em] text-xs uppercase hover:bg-black transition-all duration-500 shadow-lg">
            Finaliser ma commande royale
          </button>
          
          <p className="text-center text-[10px] text-gray-400 mt-4 tracking-widest">
            PAIEMENT 100% SÉCURISÉ • LIVRAISON EN 48H
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default CartDrawer;
