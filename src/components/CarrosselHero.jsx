import React from 'react';
import { CARROSSEL_SLIDES } from '../data/mockData';
import { PapelRasgadoBase } from './efeitos/PapelRasgado';

export default function CarrosselHero({ slideAtual, setSlideAtual, aoClicarNoSlide }) {
  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden bg-stone-200">
      {CARROSSEL_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          onClick={() => aoClicarNoSlide(slide.categoriaDestino)}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${
            idx === slideAtual ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img 
            src={slide.fundo} 
            alt={`Fundo Slide ${idx + 1}`} 
            className="w-full h-full object-cover object-center blur-[4px] scale-110 transition-transform duration-1000"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
              <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-center leading-tight drop-shadow-md max-w-3xl ${slide.corTexto}`}>
                  {slide.titulo}
              </h2>
          </div>
        </div>
      ))}
      
      <PapelRasgadoBase />

      <div className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {CARROSSEL_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlideAtual(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all active:scale-90 ${
              idx === slideAtual ? 'bg-rose-500 w-8' : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Ir para o slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}