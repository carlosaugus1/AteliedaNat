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
    if (scrollRef.current && window.innerWidth < 1280) {
      scrollRef.current.scrollBy({
        left: direcao === 'esq' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e) => {
    if (window.innerWidth >= 1280) return;
    setIsDragging(true);
    setDragged(false);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging || window.innerWidth >= 1280) return;
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
    <div className="mb-16 relative group -mx-4 sm:mx-0">
      <button
        onClick={() => rolar('esq')}
        className="hidden md:flex xl:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-md rounded-full items-center justify-center text-stone-500 hover:text-rose-600 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-stone-100"
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
        className={`flex xl:flex-wrap xl:justify-center overflow-x-auto xl:overflow-visible gap-4 sm:gap-6 xl:gap-7 2xl:gap-8 py-10 px-6 sm:px-2 xl:px-0 hide-scrollbar scroll-smooth ${
          isDragging
            ? 'cursor-grabbing snap-none xl:cursor-default'
            : 'cursor-grab snap-x snap-mandatory xl:cursor-default xl:snap-none'
        }`}
      >
        <div
          onClick={() => handleCategoryClick('Todas')}
          className={`relative flex-shrink-0 xl:flex-shrink w-32 h-24 sm:w-40 sm:h-28 xl:w-[210px] xl:h-[132px] 2xl:w-[230px] 2xl:h-[140px] rounded-[2rem] overflow-hidden snap-center transition-all duration-300 hover:scale-105 active:scale-95 ${
            categoriaAtiva === 'Todas'
              ? 'ring-4 ring-rose-400 ring-offset-4 shadow-xl scale-105'
              : 'opacity-90 hover:opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-stone-800 flex items-center justify-center pointer-events-none">
            <span className="text-white font-bold font-serif relative z-10 text-sm sm:text-base xl:text-lg tracking-wider pointer-events-none">
              TODAS
            </span>
          </div>
        </div>

        {CATEGORIAS.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.nome)}
            className={`relative flex-shrink-0 xl:flex-shrink w-40 h-24 sm:w-48 sm:h-28 xl:w-[240px] xl:h-[132px] 2xl:w-[260px] 2xl:h-[140px] rounded-[2rem] overflow-hidden snap-center transition-all duration-300 hover:scale-105 active:scale-95 group ${
              categoriaAtiva === cat.nome
                ? 'ring-4 ring-rose-400 ring-offset-4 shadow-xl scale-105'
                : 'opacity-90 hover:opacity-100'
            }`}
          >
            <img
              src={cat.imagem}
              alt={cat.nome}
              loading="lazy"
              draggable="false"
              className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-110 group-hover:scale-125 transition-transform duration-700 pointer-events-none"
            />

            <div
              className={`absolute inset-0 transition-colors duration-300 pointer-events-none ${
                cat.especial ? 'bg-rose-900/40 group-hover:bg-rose-900/30' : 'bg-black/40 group-hover:bg-black/30'
              }`}
            ></div>

            <div className="absolute inset-0 flex items-center justify-center text-center p-2 xl:p-4 pointer-events-none">
              <span className="text-white font-bold font-serif text-sm sm:text-base xl:text-lg tracking-wide drop-shadow-md z-10 pointer-events-none">
                {cat.nome}
              </span>
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

        <div className="flex-shrink-0 w-2 sm:hidden pointer-events-none"></div>
      </div>

      <button
        onClick={() => rolar('dir')}
        className="hidden md:flex xl:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-md rounded-full items-center justify-center text-stone-500 hover:text-rose-600 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-stone-100"
        aria-label="Rolar para a direita"
      >
        <ChevronRight className="w-7 h-7 ml-1" />
      </button>
    </div>
  );
}