import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { CATEGORIAS } from '../data/mockData';

export default function VitrineCategorias({ categoriaAtiva, setCategoriaAtiva }) {
  const scrollRef = useRef(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragged, setDragged] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const rolar = (direcao) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direcao === 'esq' ? -300 : 300, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragged(false); 
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); 
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    
    if (Math.abs(walk) > 10) setDragged(true); 
    
    scrollRef.current.style.scrollBehavior = 'auto';
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    scrollRef.current.style.scrollBehavior = 'smooth';
  };

  const handleCategoryClick = (nome) => {
    if (dragged) return; 
    setCategoriaAtiva(nome);
  };

  return (
    <div className="mb-12 relative group w-full mx-auto">
      <button 
        onClick={() => rolar('esq')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-md rounded-full items-center justify-center text-stone-500 hover:text-rose-600 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-stone-100"
        aria-label="Rolar para a esquerda"
      >
        <ChevronLeft className="w-7 h-7 -ml-1" />
      </button>

      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        // Espaçamento (py-6) reduzido para acabar com o espaço vazio, mas protegendo o efeito de escala
        className={`flex overflow-x-auto gap-3 sm:gap-5 py-6 px-4 md:px-8 hide-scrollbar scroll-smooth w-full md:justify-center ${
          isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
        }`}
      >
        <div 
          onClick={() => handleCategoryClick('Todas')}
          className={`relative flex-shrink-0 w-28 h-20 sm:w-36 sm:h-24 rounded-2xl sm:rounded-[2rem] overflow-hidden snap-center transition-all duration-300 hover:scale-105 active:scale-95 ${categoriaAtiva === 'Todas' ? 'ring-4 ring-rose-400 ring-offset-2 shadow-xl scale-105' : 'opacity-90 hover:opacity-100'}`}
        >
          <div className="absolute inset-0 bg-stone-800 flex items-center justify-center pointer-events-none">
            <span className="text-white font-bold font-serif relative z-10 text-sm sm:text-base tracking-wider pointer-events-none">TODAS</span>
          </div>
        </div>

        {CATEGORIAS.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => handleCategoryClick(cat.nome)}
            className={`relative flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 rounded-2xl sm:rounded-[2rem] overflow-hidden snap-center transition-all duration-300 hover:scale-105 active:scale-95 group ${categoriaAtiva === cat.nome ? 'ring-4 ring-rose-400 ring-offset-2 shadow-xl scale-105' : 'opacity-90 hover:opacity-100'}`}
          >
            <img 
              src={cat.imagem} 
              alt={cat.nome} 
              loading="lazy"
              draggable="false"
              className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-110 group-hover:scale-125 transition-transform duration-700 pointer-events-none"
            />
            <div className={`absolute inset-0 transition-colors duration-300 pointer-events-none ${cat.especial ? 'bg-rose-900/40 group-hover:bg-rose-900/30' : 'bg-black/40 group-hover:bg-black/30'}`}></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-2 pointer-events-none">
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
        
        <div className="shrink-0 w-2 sm:hidden pointer-events-none"></div>
      </div>

      <button 
        onClick={() => rolar('dir')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-md rounded-full items-center justify-center text-stone-500 hover:text-rose-600 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-stone-100"
        aria-label="Rolar para a direita"
      >
        <ChevronRight className="w-7 h-7 ml-1" />
      </button>
    </div>
  );
}