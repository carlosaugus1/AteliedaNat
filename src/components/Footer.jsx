import React from 'react';
import { Heart, Smartphone, CreditCard } from 'lucide-react';
import { IconeInstagram, IconeQrCode, IconeDinheiro } from './icons';
import { PapelRasgadoTopo } from './efeitos/PapelRasgado';
import { CONFIG } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="relative bg-stone-900 text-stone-400 pt-20 pb-12 text-center mt-20">
      <PapelRasgadoTopo />
      <div className="relative max-w-4xl mx-auto px-4 z-10">
        <Heart className="w-8 h-8 text-rose-500 fill-rose-500 mx-auto mb-4" />
        <h3 className="text-2xl font-serif text-white mb-2">{CONFIG.NOME_ATELIE}</h3>
        <p className="mb-8 max-w-md mx-auto text-sm">Feito à mão, com o coração. Transformando sentimentos em presentes inesquecíveis.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 border-y border-stone-800 py-8">
          <div className="flex flex-col items-center">
            <h4 className="text-stone-200 font-medium mb-4 uppercase tracking-wider text-xs">Fale Conosco & Acompanhe</h4>
            <div className="flex gap-4">
              <a href={`https://wa.me/${CONFIG.NUMERO_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-green-600/20 hover:text-green-400 text-stone-300 rounded-full transition-colors border border-stone-700 hover:border-green-500 active:scale-95">
                <Smartphone className="w-4 h-4" /> <span className="text-sm font-medium">WhatsApp</span>
              </a>
              <a href="https://instagram.com/_ateliedanat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-pink-600/20 hover:text-pink-400 text-stone-300 rounded-full transition-colors border border-stone-700 hover:border-pink-400 active:scale-95">
                <IconeInstagram /> <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:border-l md:border-stone-800 md:pl-8">
            <h4 className="text-stone-200 font-medium mb-4 uppercase tracking-wider text-xs">Formas de Pagamento Aceitas</h4>
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 rounded-lg border border-stone-700 text-stone-300"><IconeQrCode /> <span className="text-xs font-medium">Pix</span></div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 rounded-lg border border-stone-700 text-stone-300"><CreditCard className="w-4 h-4 text-rose-400" /> <span className="text-xs font-medium">Crédito</span></div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 rounded-lg border border-stone-700 text-stone-300"><CreditCard className="w-4 h-4 text-blue-400" /> <span className="text-xs font-medium">Débito</span></div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 rounded-lg border border-stone-700 text-stone-300"><IconeDinheiro /> <span className="text-xs font-medium">Dinheiro</span></div>
            </div>
          </div>
        </div>
        
        <div className="text-sm flex flex-col items-center gap-2 mt-4 pt-4">
          <span>© {new Date().getFullYear()} {CONFIG.NOME_ATELIE}. Todos os direitos reservados.</span>
          <span className="text-xs text-stone-500 flex items-center gap-1">
            Desenvolvido por 
            <a href="[https://www.instagram.com/carlosaugus1/](https://www.instagram.com/carlosaugus1/)" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-rose-400 transition-colors font-medium tracking-wide">
              @carlosaugus1
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
