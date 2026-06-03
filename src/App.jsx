import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, X, Heart, Plus, Minus, ArrowRight, Smartphone, CreditCard, Trash2, CheckCircle2, Info, Search, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';

// --- ÍCONES DESENHADOS MANUALMENTE ---
const IconeInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const IconeQrCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#32BCAD]">
    <rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/>
    <path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/>
    <path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>
  </svg>
);

const IconeDinheiro = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-400">
    <rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>
  </svg>
);

// --- COMPONENTES VISUAIS (EFEITOS ESPECIAIS) ---
const PapelRasgadoBase = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 rotate-180 transform translate-y-[1px]">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[30px] md:h-[60px] block fill-stone-50">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.82V0Z" opacity=".5"></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
    </svg>
  </div>
);

const PapelRasgadoTopo = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20 transform -translate-y-[1px]">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[30px] md:h-[60px] block fill-stone-50">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.82V0Z" opacity=".5"></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
    </svg>
  </div>
);

// --- DADOS ---
const CONFIG = {
  NOME_ATELIE: "Ateliê da Nat",
  NUMERO_WHATSAPP: "5588999574978"
};

const CATEGORIAS = [
  { id: 'namorados', nome: 'Dia dos Namorados', imagem: 'https://placehold.co/400x300/ffb6c1/8b0000?text=Namorados', especial: true },
  { id: 'cestas', nome: 'Cestas de Café', imagem: 'https://placehold.co/400x300/ffefd5/a0522d?text=Café' },
  { id: 'caixas', nome: 'Caixas Surpresa', imagem: 'https://placehold.co/400x300/fff0f5/db7093?text=Surpresa' },
  { id: 'kits', nome: 'Kits Criativos', imagem: 'https://placehold.co/400x300/faf0e6/800000?text=Kits' },
  { id: 'velas', nome: 'Velas', imagem: 'https://placehold.co/400x300/f5f5dc/8b4513?text=Velas' }
];

const PRODUTOS = [
  { id: 1, nome: "Cesta Romance Inesquecível", descricao: "1 Vinho suave, 2 taças personalizadas, mix de chocolates artesanais, 1 pelúcia e flores.", preco: 289.90, categoria: "Dia dos Namorados", imagem: "https://placehold.co/600x400/ffe4e1/8b0000?text=Cesta+Romance" },
  { id: 2, nome: "Caixa Surpresa 'Amo Você'", descricao: "Caixa mdf decorada, 8 fotos polaroid, brownies recheados e mensagem personalizada.", preco: 145.00, categoria: "Caixas Surpresa", imagem: "https://placehold.co/600x400/fff0f5/db7093?text=Caixa+Surpresa" },
  { id: 3, nome: "Kit Cinéfilos Apaixonados", descricao: "Balde de pipoca premium, 2 refris, snacks variados, chocolates e 2 ingressos 'vale-filme'.", preco: 110.50, categoria: "Kits Criativos", imagem: "https://placehold.co/600x400/faf0e6/800000?text=Kit+Cinema" },
  { id: 4, nome: "Cesta Café na Cama", descricao: "Pães frescos, frios, frutas da estação, suco natural, café drip e caneca exclusiva.", preco: 195.00, categoria: "Cestas de Café", imagem: "https://placehold.co/600x400/ffefd5/a0522d?text=Cesta+Café" },
  { id: 5, nome: "Coração de Colher", descricao: "Coração de chocolate meio amargo recheado com brigadeiro gourmet e morangos frescos.", preco: 85.00, categoria: "Dia dos Namorados", imagem: "https://placehold.co/600x400/fff5ee/cd5c5c?text=Coração+Gourmet" },
  { id: 6, nome: "Buquê de Chocolates", descricao: "Arranjo lindo com 15 bombons finos embalados individualmente em papel celofane e laço de cetim.", preco: 130.00, categoria: "Dia dos Namorados", imagem: "https://placehold.co/600x400/fdf5e6/c71585?text=Buquê+Doce" },
  { id: 7, nome: "Vela Aromática Clássica", descricao: "Vela artesanal de cera vegetal. Consulte os aromas disponíveis (Lavanda, Baunilha, Alecrim, etc).", preco: 45.00, categoria: "Velas", imagem: "https://placehold.co/600x400/fff8dc/8b4513?text=Vela+Clássica" },
  { id: 8, nome: "Kit Spa Relaxante com Vela", descricao: "1 Vela aromática grande, sais de banho e sabonete artesanal.", preco: 89.90, categoria: "Velas", imagem: "https://placehold.co/600x400/f5f5dc/8b4513?text=Kit+Vela" }
];

const CARROSSEL_SLIDES = [
  { fundo: "https://placehold.co/1200x500/ffb6c1/ffb6c1?text=+", titulo: "Especial Dia dos Namorados", corTexto: "text-rose-900", categoriaDestino: "Dia dos Namorados" },
  { fundo: "https://placehold.co/1200x500/fff0f5/fff0f5?text=+", titulo: "Surpreenda quem você ama", corTexto: "text-pink-800", categoriaDestino: "Caixas Surpresa" },
  { fundo: "https://placehold.co/1200x500/faf0e6/faf0e6?text=+", titulo: "Presentes feitos com amor", corTexto: "text-rose-950", categoriaDestino: "Kits Criativos" }
];

// --- COMPONENTES DA INTERFACE ---

const Header = ({ quantidadeItens, setCarrinhoAberto, termoPesquisa, setTermoPesquisa, produtosSugeridos, setProdutoSelecionado }) => (
  <header className="relative z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100">
    <div className="max-w-6xl mx-auto px-4 py-3">
      {/* Linha Superior: Logo Centralizada e Carrinho */}
      <div className="flex items-center justify-between relative h-12">
        <div className="w-10"></div> {/* Espaço para balancear a centralização */}
        
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer active:scale-95">
          {/* Espaço para a logo PNG */}
          <img 
            src="media/logo - sem fundo.png" 
            alt="Logo Ateliê da Nat" 
            className="h-10 sm:h-12 object-contain"
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

      {/* Linha Inferior: Barra de Pesquisa com Autocomplete */}
      <div className="mt-4 relative max-w-md mx-auto z-50">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400 w-4 h-4" />
        <input 
          type="text" 
          placeholder="Buscar presentes..." 
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          className="w-full bg-rose-50/50 border border-rose-100 text-stone-700 rounded-full py-2.5 pl-11 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all placeholder:text-rose-300 shadow-inner"
        />
        
        {/* Botão de Limpar Busca (X) */}
        {termoPesquisa && (
          <button 
            onClick={() => setTermoPesquisa('')} 
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-rose-400 hover:text-rose-600 rounded-full hover:bg-rose-100 transition-colors active:scale-90"
            aria-label="Limpar busca"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Painel Flutuante de Resultados da Busca (Dropdown) */}
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
                      setTermoPesquisa(''); // Limpa a busca e fecha o menu ao abrir o item
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

const CarrosselHero = ({ slideAtual, setSlideAtual, aoClicarNoSlide }) => (
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
          className="w-full h-full object-cover object-center"
          loading={idx === 0 ? "eager" : "lazy"}
        />
        {/* Overlay para contraste e texto adaptável */}
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center p-4">
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-center leading-tight drop-shadow-sm max-w-3xl ${slide.corTexto}`}>
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

const VitrineCategorias = ({ categoriaAtiva, setCategoriaAtiva }) => {
  const scrollRef = useRef(null);

  const rolar = (direcao) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direcao === 'esq' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-16 relative group">
      {/* Seta para a Esquerda (Aparece apenas no desktop ao passar o rato) */}
      <button 
        onClick={() => rolar('esq')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-md rounded-full items-center justify-center text-stone-500 hover:text-rose-600 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-stone-100"
        aria-label="Rolar para a esquerda"
      >
        <ChevronLeft className="w-7 h-7 -ml-1" />
      </button>

      {/* Container de Rolagem */}
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

      {/* Seta para a Direita (Aparece apenas no desktop ao passar o rato) */}
      <button 
        onClick={() => rolar('dir')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-md rounded-full items-center justify-center text-stone-500 hover:text-rose-600 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-stone-100"
        aria-label="Rolar para a direita"
      >
        <ChevronRight className="w-7 h-7 ml-1" />
      </button>
    </div>
  );
};

const VitrineProdutos = ({ produtos, adicionarAoCarrinho, atualizarQuantidade, carrinho, setProdutoSelecionado }) => (
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-10">
    {/* Ajuste: grid-cols-2 no celular (sm: não tem prefixo, então é o padrão mobile), lg:grid-cols-3 no desktop */}
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
                    {/* Exibe só o ícone de + no mobile para caber em 2 colunas */}
                    <Plus className="w-4 h-4 sm:hidden" />
                    <Plus className="w-4 h-4 hidden sm:block" /> 
                    <span className="hidden sm:inline">Adicionar</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      })
    )}
  </div>
);

const ModalProdutoDetalhe = ({ produto, fechar, adicionarAoCarrinho, atualizarQuantidade, carrinho }) => {
  if (!produto) return null;
  const itemNoCarrinho = carrinho.find(item => item.id === produto.id);
  const quantidade = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;

  const itensInclusos = produto.descricao.split(/, | e /).filter(item => item.trim() !== "");

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={fechar}></div>
      <div className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]">
        
        {/* Imagem */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-stone-100">
          <img src={produto.imagem} alt={produto.nome} className="absolute inset-0 w-full h-full object-cover" />
          <button onClick={fechar} className="md:hidden absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-stone-800 hover:bg-white active:scale-90">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Detalhes */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto hide-scrollbar">
          <div className="hidden md:flex justify-end mb-2">
            <button onClick={fechar} className="p-2 text-stone-400 hover:text-stone-800 bg-stone-50 rounded-full active:scale-90 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <span className="text-rose-500 font-bold text-xs uppercase tracking-wider mb-2 block">{produto.categoria}</span>
          <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4 leading-tight">{produto.nome}</h2>
          
          <div className="mb-6">
            <h4 className="flex items-center gap-2 font-medium text-stone-800 mb-3 text-sm border-b border-stone-100 pb-2">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-100" /> O que vem neste presente:
            </h4>
            <ul className="space-y-2">
              {itensInclusos.map((item, idx) => (
                <li key={idx} className="text-stone-600 text-sm flex items-start gap-2">
                  <span className="text-rose-300 mt-1">•</span> <span className="capitalize-first">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-end justify-between mb-4">
              <span className="text-sm text-stone-500">Valor un.</span>
              <span className="text-3xl font-bold text-rose-600">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
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
};

const ModalCarrinho = ({ carrinhoAberto, setCarrinhoAberto, carrinho, atualizarQuantidade, atualizarQuantidadeExata, removerDoCarrinho, limparCarrinho, totalCarrinho, finalizarPedido }) => {
  if (!carrinhoAberto) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setCarrinhoAberto(false)}
      ></div>
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 pb-safe">
        
        {/* Cabeçalho do Carrinho */}
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="text-xl font-serif font-bold text-stone-800 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-rose-500" /> Seu Pedido
          </h2>
          <button onClick={() => setCarrinhoAberto(false)} className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-full transition-colors active:scale-90">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Lista de Itens */}
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

                {/* Botão Remover (Lixeira) */}
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

        {/* Rodapé do Carrinho com Mensagem Amigável */}
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
};

const Footer = () => (
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
      <div className="text-sm">© {new Date().getFullYear()} {CONFIG.NOME_ATELIE}. Todos os direitos reservados.</div>
    </div>
  </footer>
);

// --- APLICATIVO PRINCIPAL ---
export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [slideAtual, setSlideAtual] = useState(0);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Dia dos Namorados');
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideAtual((prev) => (prev + 1) % CARROSSEL_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Monitora o scroll da página para exibir os botões flutuantes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navegarParaCategoria = (categoriaNome) => {
      setCategoriaAtiva(categoriaNome);
      const vitrineElement = document.getElementById('vitrine-ancora');
      if (vitrineElement) {
          vitrineElement.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const itemExistente = prev.find((item) => item.id === produto.id);
      if (itemExistente) {
        return prev.map((item) => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item);
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const atualizarQuantidade = (id, delta) => {
    setCarrinho((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const novaQuantidade = item.quantidade + delta;
          return { ...item, quantidade: Math.max(0, novaQuantidade) }; // Permite zerar para remover
        }
        return item;
      }).filter((item) => item.quantidade > 0)
    );
  };

  const atualizarQuantidadeExata = (id, valorDigitado) => {
    const qtd = parseInt(valorDigitado, 10);
    if (isNaN(qtd) || qtd < 0) return; // Se digitar besteira, ignora
    
    if (qtd === 0) {
      removerDoCarrinho(id);
      return;
    }

    setCarrinho(prev => prev.map(item => item.id === id ? { ...item, quantidade: qtd } : item));
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(prev => prev.filter(item => item.id !== id));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const totalCarrinho = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  const quantidadeItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

  const finalizarPedido = () => {
    if (carrinho.length === 0) return;
    const sinal = totalCarrinho / 2;
    let mensagem = `Olá, Nat! Gostaria de fazer uma encomenda para o Dia dos Namorados:%0A%0A`;
    carrinho.forEach(item => {
      mensagem += `*${item.quantidade}x* ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}%0A`;
    });
    mensagem += `%0A*Total da Encomenda:* R$ ${totalCarrinho.toFixed(2)}%0A`;
    mensagem += `*Sinal para confirmação (50%):* R$ ${sinal.toFixed(2)}%0A%0A`;
    mensagem += `Como podemos prosseguir com o pagamento do sinal e detalhes da entrega?`;

    const url = `https://wa.me/${CONFIG.NUMERO_WHATSAPP}?text=${mensagem}`;
    window.open(url, '_blank');
  };

  // Nova Lógica de Filtragem (Pesquisa + Categorias)
  const produtosFiltrados = termoPesquisa.trim() !== '' 
    ? PRODUTOS.filter(produto => 
        produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) || 
        produto.descricao.toLowerCase().includes(termoPesquisa.toLowerCase())
      )
    : (categoriaAtiva === 'Todas' ? PRODUTOS : PRODUTOS.filter(produto => produto.categoria === categoriaAtiva));

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-rose-200">
      <style>{`
        @keyframes float-heart {
          0% { transform: translateY(10px) scale(0.6); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.4; }
          100% { transform: translateY(-50px) scale(1.2); opacity: 0; }
        }
        .animate-float-heart { animation: float-heart 2.5s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.7s; }
        .delay-500 { animation-delay: 1.1s; }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Oculta as setinhas feias de input number nos navegadores */
        .hide-arrows::-webkit-outer-spin-button,
        .hide-arrows::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        .hide-arrows { -moz-appearance: textfield; }

        .capitalize-first:first-letter { text-transform: uppercase; }
        
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          .pb-safe { padding-bottom: calc(1.5rem + env(safe-area-inset-bottom)); }
        }
      `}</style>

      <Header 
        quantidadeItens={quantidadeItens} 
        setCarrinhoAberto={setCarrinhoAberto} 
        termoPesquisa={termoPesquisa}
        setTermoPesquisa={setTermoPesquisa}
        produtosSugeridos={produtosFiltrados}
        setProdutoSelecionado={setProdutoSelecionado}
      />
      <CarrosselHero slideAtual={slideAtual} setSlideAtual={setSlideAtual} aoClicarNoSlide={navegarParaCategoria} />

      <main className="max-w-6xl mx-auto px-4 py-16 md:py-24" id="vitrine-ancora">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Coleção Exclusiva</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Navegue por nossas categorias e encontre o presente perfeito. Tudo feito com amor para você emocionar!</p>
        </div>

        <VitrineCategorias categoriaAtiva={categoriaAtiva} setCategoriaAtiva={setCategoriaAtiva} />
        
        {/* Aviso sobre os aromas das velas (Exibido apenas na categoria Velas) */}
        {categoriaAtiva === 'Velas' && (
          <div className="bg-rose-50/80 border border-rose-100 rounded-2xl p-4 mb-8 flex items-start gap-3 max-w-3xl mx-auto animate-in fade-in slide-in-from-top-4 shadow-sm">
            <Info className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-rose-800 mb-1 text-sm md:text-base">Muitos aromas disponíveis! ✨</strong>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Temos várias essências deliciosas para as velas. Fique tranquila(o): ao nos enviar seu pedido pelo WhatsApp, passaremos a lista completa de aromas do dia para você escolher o seu favorito.
              </p>
            </div>
          </div>
        )}

        <VitrineProdutos 
          produtos={produtosFiltrados} 
          carrinho={carrinho}
          adicionarAoCarrinho={adicionarAoCarrinho} 
          atualizarQuantidade={atualizarQuantidade}
          setProdutoSelecionado={setProdutoSelecionado}
        />
      </main>

      <ModalProdutoDetalhe 
        produto={produtoSelecionado} 
        fechar={() => setProdutoSelecionado(null)}
        adicionarAoCarrinho={adicionarAoCarrinho}
        atualizarQuantidade={atualizarQuantidade}
        carrinho={carrinho}
      />

      <ModalCarrinho 
        carrinhoAberto={carrinhoAberto} 
        setCarrinhoAberto={setCarrinhoAberto} 
        carrinho={carrinho} 
        atualizarQuantidade={atualizarQuantidade} 
        atualizarQuantidadeExata={atualizarQuantidadeExata}
        removerDoCarrinho={removerDoCarrinho}
        limparCarrinho={limparCarrinho}
        totalCarrinho={totalCarrinho} 
        finalizarPedido={finalizarPedido} 
      />

      {/* --- BOTÕES FLUTUANTES --- */}
      {/* Carrinho Flutuante */}
      <div className={`fixed top-4 right-4 z-[55] transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={() => setCarrinhoAberto(true)}
          className="relative p-3 bg-white text-rose-600 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-rose-50 transition-colors active:scale-90 border border-rose-100"
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

      {/* Botão Voltar ao Topo */}
      <div className={`fixed bottom-6 right-4 sm:right-6 z-[55] transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-rose-500/90 backdrop-blur-sm text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-stone-800 transition-colors active:scale-90"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>

      <Footer />
    </div>
  );
}