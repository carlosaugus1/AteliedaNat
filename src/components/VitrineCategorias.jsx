import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { CATEGORIAS } from '../data/mockData';

export default function VitrineCategorias({ categoriaAtiva, setCategoriaAtiva }) {
  const scrollRef = useRef(null);

  const rolar = (direcao) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direcao === 'esq' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-16 relative group">
      <button 
        onClick={() => rolar('esq')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-md rounded-full items-center justify-center text-stone-500 hover:text-rose-600 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-stone-100"
        aria-label="Rolar para a esquerda"
      >
        <ChevronLeft className="w-7 h-7 -ml-1" />
      </button>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:gap-6 py-8 px-2 hide-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        <div 
          onClick={() => setCategoriaAtiva('Todas')}
          className={`relative flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 rounded-[2rem] overflow-hidden cursor-pointer snap-center transition-all duration-300 hover:scale-105 active:scale-95 ${categoriaAtiva === 'Todas' ? 'ring-4 ring-rose-400 ring-offset-4 shadow-xl scale-105' : 'opacity-90 hover:opacity-100'}`}
        >
          <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
            <span className="text-white font-bold font-serif relative z-10 text-sm sm:text-base tracking-wider">TODAS</span>
          </div>
        </div>

        {CATEGORIAS.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => setCategoriaAtiva(cat.nome)}
            className={`relative flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 rounded-[2rem] overflow-hidden cursor-pointer snap-center transition-all duration-300 hover:scale-105 active:scale-95 group ${categoriaAtiva === cat.nome ? 'ring-4 ring-rose-400 ring-offset-4 shadow-xl scale-105' : 'opacity-90 hover:opacity-100'}`}
          >
            <img 
              src={cat.imagem} 
              alt={cat.nome} 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-110 group-hover:scale-125 transition-transform duration-700"
            />
            <div className={`absolute inset-0 transition-colors duration-300 ${cat.especial ? 'bg-rose-900/40 group-hover:bg-rose-900/30' : 'bg-black/40 group-hover:bg-black/30'}`}></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-2">
              <span className="text-white font-bold font-serif text-sm sm:text-base tracking-wide drop-shadow-md z-10">{cat.nome}</span>
            </div>

            {cat.especial && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Heart className="absolute bottom-1 left-4 w-5 h-5 text-rose-300 fill-rose-300 opacity-0 animate-float-heart" />
                <Heart className="absolute bottom-2 left-1/2 w-6 h-6 text-white fill-white opacity-0 animate-float-heart delay-100" />
                <Heart className="absolute bottom-0 right-4 w-4 h-4 text-pink-200 fill-pink-200 opacity-0 animate-float-heart delay-300" />
                <Heart className="absolute bottom-3 right-8 w-5 h-5 text-rose-200 fill-rose-200 opacity-0 animate-float-heart delay-500" />
              </div>
            )}
          </div>
        ))}
      </div>

      <button 
        onClick={() => rolar('dir')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-md rounded-full items-center justify-center text-stone-500 hover:text-rose-600 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-stone-100"
        aria-label="Rolar para a direita"
      >
        <ChevronRight className="w-7 h-7 ml-1" />
      </button>
    </div>
  );
}