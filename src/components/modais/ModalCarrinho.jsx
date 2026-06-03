import React from 'react';
import { ShoppingBag, X, Trash2, Heart, Minus, Plus, Info, Smartphone, ArrowRight } from 'lucide-react';

export default function ModalCarrinho({ carrinhoAberto, setCarrinhoAberto, carrinho, atualizarQuantidade, atualizarQuantidadeExata, removerDoCarrinho, limparCarrinho, totalCarrinho, finalizarPedido }) {
  if (!carrinhoAberto) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setCarrinhoAberto(false)}
      ></div>
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 pb-safe">
        
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="text-xl font-serif font-bold text-stone-800 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-rose-500" /> Seu Pedido
          </h2>
          <button onClick={() => setCarrinhoAberto(false)} className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-full transition-colors active:scale-90">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50/50">
          {carrinho.length > 0 && (
            <div className="flex justify-end mb-2">
              <button onClick={limparCarrinho} className="text-xs font-medium text-stone-400 hover:text-rose-500 transition-colors flex items-center gap-1 active:scale-95">
                <Trash2 className="w-3 h-3" /> Esvaziar cestinha
              </button>
            </div>
          )}

          {carrinho.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400 gap-4">
              <Heart className="w-16 h-16 stroke-[1.5] opacity-20" />
              <p>Sua cestinha está vazia.</p>
            </div>
          ) : (
            carrinho.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-3 rounded-2xl border border-stone-100 shadow-sm relative group">
                <img src={item.imagem} alt={item.nome} className="w-20 h-20 object-cover rounded-xl bg-stone-100" />
                
                <div className="flex-1 flex flex-col justify-between pr-6">
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm leading-tight line-clamp-2 pr-2">{item.nome}</h4>
                    <span className="text-rose-600 font-semibold text-sm block mt-1">R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-stone-50 w-fit rounded-full px-1.5 py-1 mt-2 border border-stone-200">
                    <button onClick={() => atualizarQuantidade(item.id, -1)} className="text-stone-500 hover:text-rose-600 p-1.5 active:scale-90 rounded-full"><Minus className="w-3 h-3" /></button>
                    <input 
                      type="number" 
                      min="1"
                      value={item.quantidade} 
                      onChange={(e) => atualizarQuantidadeExata(item.id, e.target.value)}
                      className="text-sm font-bold text-stone-700 w-8 text-center bg-transparent border-none focus:outline-none focus:ring-0 p-0 hide-arrows"
                    />
                    <button onClick={() => atualizarQuantidade(item.id, 1)} className="text-stone-500 hover:text-green-600 p-1.5 active:scale-90 rounded-full"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>

                <button 
                  onClick={() => removerDoCarrinho(item.id)}
                  className="absolute top-3 right-3 p-1.5 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors active:scale-90"
                  title="Remover item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {carrinho.length > 0 && (
          <div className="border-t border-stone-100 p-6 bg-stone-50">
            <div className="flex justify-between items-end mb-4">
              <span className="text-stone-500 text-sm">Total da Encomenda</span>
              <span className="text-2xl font-bold text-stone-800">R$ {totalCarrinho.toFixed(2).replace('.', ',')}</span>
            </div>

            <div className="bg-rose-50/80 text-stone-700 text-xs p-4 rounded-2xl mb-6 border border-rose-100 leading-relaxed relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-rose-400"></div>
              <strong className="block mb-1.5 text-rose-800 flex items-center gap-1.5 text-sm">
                <Info className="w-4 h-4" /> Preparando seu presente
              </strong> 
              Para separarmos os materiais e prepararmos seu pedido com todo o cuidado que ele merece, pedimos um sinal de <strong>50% (R$ {(totalCarrinho / 2).toFixed(2).replace('.', ',')})</strong>. O restante você pode acertar no dia da entrega! ❤️
            </div>
            
            <button
              onClick={finalizarPedido}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-green-600/20"
            >
              <Smartphone className="w-5 h-5" /> Enviar pedido via WhatsApp <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}