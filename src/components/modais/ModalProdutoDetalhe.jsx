import React, { useState, useEffect } from 'react';
import { X, Heart, CheckCircle2, Minus, Plus, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ModalProdutoDetalhe({ produto, fechar, adicionarAoCarrinho, atualizarQuantidade, carrinho }) {
  // Estado para controlar qual imagem da galeria está a ser exibida
  const [imagemAtualIndex, setImagemAtualIndex] = useState(0);

  // Reinicia a galeria para a primeira foto sempre que abrir um produto novo
  useEffect(() => {
    if(produto) setImagemAtualIndex(0);
  }, [produto]);

  if (!produto) return null;
  
  const itemNoCarrinho = carrinho.find(item => item.id === produto.id);
  const quantidade = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;
  
  // Tratamento de segurança caso o produto não tenha descrição ou seja diferente
  const descricaoSegura = produto.descricao || "";
  const itensInclusos = descricaoSegura.split(/, | e | \./).filter(item => item.trim() !== "");

  // Lógica da Galeria
  const galeria = produto.imagensGaleria && produto.imagensGaleria.length > 0 
    ? produto.imagensGaleria 
    : [produto.imagem];

  const proximaImagem = (e) => {
    e.stopPropagation(); 
    setImagemAtualIndex((prev) => (prev + 1) % galeria.length);
  };

  const imagemAnterior = (e) => {
    e.stopPropagation();
    setImagemAtualIndex((prev) => (prev - 1 + galeria.length) % galeria.length);
  };

  // Lógica para exibir categorias corretamente (suportando a nova lista de categorias)
  const categoriasTexto = produto.categorias 
    ? produto.categorias.join(' • ') 
    : produto.categoria;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={fechar}></div>
      <div className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]">
        
        {/* Lado Esquerdo: Galeria de Imagens */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-stone-100 group">
          <img 
            src={galeria[imagemAtualIndex]} 
            alt={`${produto.nome} - Imagem ${imagemAtualIndex + 1}`} 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" 
          />
          
          <button onClick={fechar} className="md:hidden absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-stone-800 hover:bg-white active:scale-90 z-20">
            <X className="w-5 h-5" />
          </button>

          {/* Controles da Galeria (Só aparecem se houver mais de 1 imagem) */}
          {galeria.length > 1 && (
            <>
              {/* Seta Esquerda */}
              <button 
                onClick={imagemAnterior}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white backdrop-blur rounded-full text-stone-800 transition-all active:scale-90 opacity-100 md:opacity-0 md:group-hover:opacity-100 shadow-sm z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Seta Direita */}
              <button 
                onClick={proximaImagem}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white backdrop-blur rounded-full text-stone-800 transition-all active:scale-90 opacity-100 md:opacity-0 md:group-hover:opacity-100 shadow-sm z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicadores (Bolinhas) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {galeria.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === imagemAtualIndex ? 'bg-rose-500 w-4' : 'bg-white/90'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Lado Direito: Detalhes e Carrinho */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto hide-scrollbar">
          <div className="hidden md:flex justify-end mb-2">
            <button onClick={fechar} className="p-2 text-stone-400 hover:text-stone-800 bg-stone-50 rounded-full active:scale-90 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <span className="text-rose-500 font-bold text-xs uppercase tracking-wider mb-2 block">
            {categoriasTexto}
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4 leading-tight">{produto.nome}</h2>
          
          <div className="mb-6">
            {produto.isKit ? (
              // Layout para KITS/CESTAS
              <>
                <h4 className="flex items-center gap-2 font-medium text-stone-800 mb-3 text-sm border-b border-stone-100 pb-2">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-100" /> O que vem neste presente:
                </h4>
                <ul className="space-y-2">
                  {itensInclusos.map((item, idx) => (
                    <li key={idx} className="text-stone-600 text-sm flex items-start gap-2">
                      <span className="text-rose-300 mt-1">•</span> <span className="capitalize-first leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              // Layout para PRESENTES PERSONALIZADOS
              <>
                <h4 className="flex items-center gap-2 font-medium text-stone-800 mb-3 text-sm border-b border-stone-100 pb-2">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-100" /> Detalhes do produto:
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed italic">
                  "{produto.descricao}"
                </p>
              </>
            )}
          </div>

          <div className="mt-auto pt-6 border-t border-stone-50">
            
            {/* Secção de Preços Atualizada */}
            <div className="flex items-end justify-between mb-4">
              <span className="text-sm text-stone-500">Valor un.</span>
              <div className="flex flex-col items-end">
                {produto.precoAntigo && (
                  <span className="text-sm text-stone-400 line-through mb-1">
                    De: R$ {produto.precoAntigo.toFixed(2).replace('.', ',')}
                  </span>
                )}
                <span className="text-3xl font-bold text-rose-600">
                  R$ {produto.preco.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {quantidade > 0 ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center justify-between animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center gap-2 text-green-700 font-medium">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Na cestinha!</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-full px-3 py-1.5 shadow-sm border border-green-100">
                  <button onClick={() => atualizarQuantidade(produto.id, -1)} className="text-stone-500 hover:text-rose-600 active:scale-90 p-1"><Minus className="w-4 h-4" /></button>
                  <span className="font-bold text-stone-800 w-4 text-center">{quantidade}</span>
                  <button onClick={() => atualizarQuantidade(produto.id, 1)} className="text-stone-500 hover:text-green-600 active:scale-90 p-1"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => adicionarAoCarrinho(produto)}
                className="w-full bg-stone-800 hover:bg-rose-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98] shadow-lg shadow-stone-800/10"
              >
                <ShoppingBag className="w-5 h-5" /> Colocar na Cestinha
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}