import React from 'react';
import { Search, Minus, Plus } from 'lucide-react';

export default function VitrineProdutos({ produtos, adicionarAoCarrinho, atualizarQuantidade, carrinho, setProdutoSelecionado }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-10">
      {produtos.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center py-16 text-stone-400">
          <Search className="w-12 h-12 mb-4 opacity-20" />
          <p className="text-center text-sm sm:text-lg">Nenhum produto encontrado com esta busca.</p>
        </div>
      ) : (
        produtos.map((produto) => {
          const itemNoCarrinho = carrinho.find(item => item.id === produto.id);
          const quantidade = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;

          return (
            <div 
              key={produto.id} 
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border border-stone-100 flex flex-col cursor-pointer"
              onClick={() => setProdutoSelecionado(produto)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 backdrop-blur text-rose-600 text-[9px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {produto.categoria}
                </div>
                {quantidade > 0 && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-rose-500 text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow-lg text-xs sm:text-base animate-in fade-in zoom-in-50">
                    <span className="font-bold">{quantidade}</span>
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-sm sm:text-xl font-bold text-stone-800 mb-1 sm:mb-2 font-serif line-clamp-2 sm:line-clamp-1 leading-tight">
                  {produto.nome}
                </h3>
                <p className="text-stone-500 text-[10px] sm:text-sm mb-2 sm:mb-4 line-clamp-2 flex-1">
                  {produto.descricao}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-stone-50" onClick={(e) => e.stopPropagation()}>
                  <span className="text-sm sm:text-2xl font-bold text-rose-600 flex items-baseline gap-0.5">
                    <span className="text-[10px] sm:text-sm font-normal">R$</span> {produto.preco.toFixed(2).replace('.', ',')}
                  </span>
                  
                  {quantidade > 0 ? (
                    <div className="flex items-center gap-1 sm:gap-3 bg-stone-100 rounded-full px-1.5 py-1 sm:px-3 sm:py-1.5 border border-stone-200">
                      <button onClick={() => atualizarQuantidade(produto.id, -1)} className="text-stone-500 hover:text-rose-600 active:scale-90 p-1 sm:p-1">
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <span className="text-xs sm:text-sm font-bold text-stone-800 w-3 sm:w-4 text-center">{quantidade}</span>
                      <button onClick={() => atualizarQuantidade(produto.id, 1)} className="text-stone-500 hover:text-green-600 active:scale-90 p-1 sm:p-1">
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => adicionarAoCarrinho(produto)}
                      className="flex items-center justify-center sm:gap-2 bg-stone-800 hover:bg-rose-500 text-white w-7 h-7 sm:w-auto sm:px-4 sm:py-2 rounded-full transition-colors active:scale-95 font-medium text-sm shadow-md shadow-stone-800/10"
                      aria-label="Adicionar ao carrinho"
                    >
                      <Plus className="w-4 h-4 sm:hidden" />
                      <Plus className="w-4 h-4 hidden sm:block" /> 
                      <span className="hidden sm:inline">Adicionar</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}