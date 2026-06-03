import React from 'react';
import { ShoppingBag, Search, X } from 'lucide-react';

export default function Header({ quantidadeItens, setCarrinhoAberto, termoPesquisa, setTermoPesquisa, produtosSugeridos, setProdutoSelecionado }) {
  return (
    <header className="relative z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 py-3">
        {/* Linha Superior */}
        <div className="flex items-center justify-between relative h-12">
          <div className="w-10"></div>
          
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer active:scale-95">
            <img 
              src="/public/logo-atelie.png"
              alt="Logo Ateliê da Nat" 
              className="h-14 sm:h-16 object-contain"
            />
          </div>
          
          <button 
            onClick={() => setCarrinhoAberto(true)}
            className="relative p-2 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-100 transition-colors active:scale-90"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag className="w-6 h-6" />
            {quantidadeItens > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {quantidadeItens}
              </span>
            )}
          </button>
        </div>

        {/* Barra de Pesquisa */}
        <div className="mt-4 relative max-w-md mx-auto z-50">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Buscar presentes..." 
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
            className="w-full bg-rose-50/50 border border-rose-100 text-stone-700 rounded-full py-2.5 pl-11 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all placeholder:text-rose-300 shadow-inner"
          />
          
          {termoPesquisa && (
            <button 
              onClick={() => setTermoPesquisa('')} 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-rose-400 hover:text-rose-600 rounded-full hover:bg-rose-100 transition-colors active:scale-90"
              aria-label="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {termoPesquisa.trim() !== '' && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-rose-100 overflow-hidden z-50 max-h-[60vh] overflow-y-auto animate-in fade-in slide-in-from-top-2">
              {produtosSugeridos.length > 0 ? (
                <div className="py-2">
                  <div className="px-4 py-2 text-[10px] font-bold text-rose-400 uppercase tracking-wider bg-rose-50/50 border-b border-rose-100">
                    Resultados encontrados ({produtosSugeridos.length})
                  </div>
                  {produtosSugeridos.map(prod => (
                    <div 
                      key={prod.id}
                      onClick={() => {
                        setProdutoSelecionado(prod);
                        setTermoPesquisa('');
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-rose-50 cursor-pointer border-b border-stone-50 last:border-0 transition-colors group"
                    >
                      <img src={prod.imagem} alt={prod.nome} className="w-12 h-12 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
                      <div className="flex-1 text-left">
                        <h4 className="text-sm font-bold text-stone-800 line-clamp-1">{prod.nome}</h4>
                        <span className="text-xs text-rose-600 font-bold">R$ {prod.preco.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-stone-500 flex flex-col items-center gap-3">
                  <Search className="w-8 h-8 text-rose-200" />
                  <span className="text-sm">Poxa, não encontramos esse presente.</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}