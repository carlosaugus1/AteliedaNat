import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, Heart, Plus, Minus, ArrowRight, Smartphone, CreditCard } from 'lucide-react';

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

// Aqui é onde você adiciona ou remove itens facilmente.
const CONFIG = {
  whatsapp: "5588999574978",
  nomeLoja: "Ateliê da Nat"
};

const CATEGORIAS = [
  { id: 'namorados', nome: 'Dia dos Namorados', imagem: 'https://placehold.co/400x300/ffb6c1/8b0000?text=Namorados', especial: true },
  { id: 'cestas', nome: 'Cestas de Café', imagem: 'https://placehold.co/400x300/ffefd5/a0522d?text=Café' },
  { id: 'caixas', nome: 'Caixas Surpresa', imagem: 'https://placehold.co/400x300/fff0f5/db7093?text=Surpresa' },
  { id: 'kits', nome: 'Kits Criativos', imagem: 'https://placehold.co/400x300/faf0e6/800000?text=Kits' },
];

const PRODUTOS = [
  { id: 1, nome: "Cesta Romance Inesquecível", descricao: "1 Vinho suave, 2 taças, mix de chocolates, 1 pelúcia e flores.", preco: 289.90, categoria: "Dia dos Namorados", imagem: "https://placehold.co/600x400/ffe4e1/8b0000?text=Cesta+Romance" },
  { id: 2, nome: "Caixa Surpresa 'Amo Você'", descricao: "Caixa mdf decorada, 8 fotos polaroid, brownies e mensagem.", preco: 145.00, categoria: "Caixas Surpresa", imagem: "https://placehold.co/600x400/fff0f5/db7093?text=Caixa+Surpresa" },
  { id: 3, nome: "Kit Cinéfilos Apaixonados", descricao: "Balde de pipoca, 2 refris, snacks, chocolates e 2 ingressos.", preco: 110.50, categoria: "Kits Criativos", imagem: "https://placehold.co/600x400/faf0e6/800000?text=Kit+Cinema" },
  { id: 4, nome: "Cesta Café na Cama", descricao: "Pães frescos, frios, frutas, suco, café drip e caneca.", preco: 195.00, categoria: "Cestas de Café", imagem: "https://placehold.co/600x400/ffefd5/a0522d?text=Cesta+Café" },
  { id: 5, nome: "Coração de Colher", descricao: "Coração de chocolate meio amargo recheado com brigadeiro.", preco: 85.00, categoria: "Dia dos Namorados", imagem: "https://placehold.co/600x400/fff5ee/cd5c5c?text=Coração+Gourmet" },
  { id: 6, nome: "Buquê de Chocolates", descricao: "Arranjo lindo com 15 bombons finos embalados individualmente.", preco: 130.00, categoria: "Dia dos Namorados", imagem: "https://placehold.co/600x400/fdf5e6/c71585?text=Buquê+Doce" }
];

const CARROSSEL_IMAGENS = [
  "https://placehold.co/1200x500/ffb6c1/8b0000?text=Especial+Dia+dos+Namorados",
  "https://placehold.co/1200x500/ffc0cb/800000?text=Presentes+Feitos+com+Amor",
  "https://placehold.co/1200x500/ff69b4/ffffff?text=Surpreenda+Quem+Você+Ama"
];

const Header = ({ quantidadeItens, onAbrirCarrinho }) => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100">
    <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
        <h1 className="text-2xl font-serif font-bold text-stone-800 tracking-tight">{CONFIG.nomeLoja}</h1>
      </div>
      <button 
        onClick={onAbrirCarrinho}
        className="relative p-2 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-100 active:scale-95 transition-all"
      >
        <ShoppingBag className="w-6 h-6" />
        {quantidadeItens > 0 && (
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
            {quantidadeItens}
          </span>
        )}
      </button>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-stone-900 text-stone-400 py-12 text-center rounded-t-[3rem] md:rounded-t-[5rem] mt-20">
    <div className="max-w-4xl mx-auto px-4">
      <Heart className="w-8 h-8 text-rose-500 fill-rose-500 mx-auto mb-4" />
      <h3 className="text-2xl font-serif text-white mb-2">{CONFIG.nomeLoja}</h3>
      <p className="mb-8 max-w-md mx-auto text-sm">Feito à mão, com o coração. Transformando sentimentos em presentes inesquecíveis.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 border-y border-stone-800 py-8">
        <div className="flex flex-col items-center">
          <h4 className="text-stone-200 font-medium mb-4 uppercase tracking-wider text-xs">Fale Conosco & Acompanhe</h4>
          <div className="flex gap-4">
            <a href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-green-600/20 hover:text-green-400 text-stone-300 rounded-full active:scale-95 transition-all border border-stone-700 hover:border-green-500">
              <Smartphone className="w-4 h-4" /> <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a href="https://instagram.com/_ateliedanat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-pink-600/20 hover:text-pink-400 text-stone-300 rounded-full active:scale-95 transition-all border border-stone-700 hover:border-pink-400">
              <IconeInstagram /> <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:border-l md:border-stone-800 md:pl-8">
          <h4 className="text-stone-200 font-medium mb-4 uppercase tracking-wider text-xs">Pagamento</h4>
          <div className="flex gap-3 flex-wrap justify-center">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 rounded-lg border border-stone-700 text-stone-300"><IconeQrCode /> <span className="text-xs font-medium">Pix</span></div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 rounded-lg border border-stone-700 text-stone-300"><CreditCard className="w-4 h-4 text-rose-400" /> <span className="text-xs font-medium">Crédito</span></div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 rounded-lg border border-stone-700 text-stone-300"><CreditCard className="w-4 h-4 text-blue-400" /> <span className="text-xs font-medium">Débito</span></div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 rounded-lg border border-stone-700 text-stone-300"><IconeDinheiro /> <span className="text-xs font-medium">Dinheiro</span></div>
          </div>
        </div>
      </div>
      <div className="text-sm">© {new Date().getFullYear()} {CONFIG.nomeLoja}. Todos os direitos reservados.</div>
    </div>
  </footer>
);

const CarrosselHero = () => {
  const [slideAtual, setSlideAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlideAtual((prev) => (prev + 1) % CARROSSEL_IMAGENS.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden bg-stone-200 rounded-b-[3rem] md:rounded-b-[5rem] shadow-inner">
      {CARROSSEL_IMAGENS.map((img, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === slideAtual ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img src={img} alt={`Destaque ${idx + 1}`} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {CARROSSEL_IMAGENS.map((_, idx) => (
          <button key={idx} onClick={() => setSlideAtual(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === slideAtual ? 'bg-rose-500 w-8' : 'bg-white/70 hover:bg-white'}`} aria-label={`Ir para o slide ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
};

const ProdutoCard = ({ produto, onAdd }) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border border-stone-100 flex flex-col">
    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
      <img src={produto.imagem} alt={produto.nome} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-rose-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{produto.categoria}</div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif line-clamp-1">{produto.nome}</h3>
      <p className="text-stone-500 text-sm mb-4 line-clamp-3 flex-1">{produto.descricao}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-2xl font-bold text-rose-600"><span className="text-sm">R$</span> {produto.preco.toFixed(2).replace('.', ',')}</span>
        <button onClick={() => onAdd(produto)} className="bg-stone-800 hover:bg-rose-500 active:scale-90 text-white p-3 rounded-full transition-all focus:ring-4 focus:ring-rose-200" aria-label="Adicionar ao carrinho">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

const ModalCarrinho = ({ isOpen, onClose, carrinho, onUpdateQtd, onCheckout, total }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="text-xl font-serif font-bold text-stone-800 flex items-center gap-2"><ShoppingBag className="w-5 h-5 text-rose-500" /> Seu Pedido</h2>
          <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-600 bg-stone-50 hover:bg-stone-100 rounded-full active:scale-95 transition-all"><X className="w-6 h-6" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50/50">
          {carrinho.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400 gap-4">
              <Heart className="w-16 h-16 stroke-[1.5] opacity-20" />
              <p>Sua cestinha está vazia.</p>
            </div>
          ) : (
            carrinho.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-3 rounded-2xl border border-stone-100 shadow-sm">
                <img src={item.imagem} alt={item.nome} className="w-20 h-20 object-cover rounded-xl bg-stone-100" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm leading-tight line-clamp-2">{item.nome}</h4>
                    <span className="text-rose-600 font-semibold text-sm block mt-1">R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-stone-50 w-fit rounded-full px-2 py-1 mt-2 border border-stone-200">
                    <button onClick={() => onUpdateQtd(item.id, -1)} className="text-stone-500 hover:text-rose-600 p-1 active:scale-75 transition-transform"><Minus className="w-4 h-4" /></button>
                    <span className="text-sm font-bold text-stone-700 w-4 text-center">{item.quantidade}</span>
                    <button onClick={() => onUpdateQtd(item.id, 1)} className="text-stone-500 hover:text-rose-600 p-1 active:scale-75 transition-transform"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {carrinho.length > 0 && (
          <div className="border-t border-stone-100 p-6 bg-white pb-safe">
            <div className="flex justify-between items-end mb-4">
              <span className="text-stone-500 text-sm">Total estimado</span>
              <span className="text-2xl font-bold text-stone-800">R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="bg-rose-50 text-rose-800 text-xs p-3 rounded-xl mb-4 border border-rose-100">
              <strong className="block mb-1">Confirmação de Encomenda</strong> 
              Adiantamento de <strong>50% (R$ {(total / 2).toFixed(2).replace('.', ',')})</strong> para garantir o pedido.
            </div>
            <button onClick={onCheckout} className="w-full bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-600/20">
              <Smartphone className="w-5 h-5" /> Enviar pelo WhatsApp <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Dia dos Namorados');

  // Lógica de manipulação do carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const existe = prev.find(item => item.id === produto.id);
      if (existe) return prev.map(item => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item);
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const atualizarQuantidade = (id, delta) => {
    setCarrinho(prev => prev.map(item => 
      item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade + delta) } : item
    ).filter(item => item.quantidade > 0));
  };

  const totais = {
    valor: carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0),
    itens: carrinho.reduce((acc, item) => acc + item.quantidade, 0)
  };

  // Checkout no WhatsApp isolado
  const finalizarPedido = () => {
    if (carrinho.length === 0) return;
    let msg = `Olá, Nat! Gostaria de fazer uma encomenda:%0A%0A`;
    carrinho.forEach(i => msg += `*${i.quantidade}x* ${i.nome} - R$ ${(i.preco * i.quantidade).toFixed(2)}%0A`);
    msg += `%0A*Total:* R$ ${totais.valor.toFixed(2)}%0A*Sinal (50%):* R$ ${(totais.valor / 2).toFixed(2)}%0A%0AComo prosseguir com o pagamento?`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, '_blank');
  };

  const produtosFiltrados = categoriaAtiva === 'Todas' ? PRODUTOS : PRODUTOS.filter(p => p.categoria === categoriaAtiva);

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
        .pb-safe { padding-bottom: env(safe-area-inset-bottom, 1.5rem); }
      `}</style>

      <Header quantidadeItens={totais.itens} onAbrirCarrinho={() => setCarrinhoAberto(true)} />
      <CarrosselHero />

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Coleção Exclusiva</h2>
          <p className="text-stone-600 max-w-xl mx-auto">Navegue pelas categorias e encontre o presente perfeito feito à mão.</p>
        </div>

        {/* Vitrine de Categorias */}
        <div className="mb-12">
          {/* Melhoria mobile: scroll-smooth adicionado para arrastar com dedo de forma mais natural */}
          <div className="flex overflow-x-auto gap-4 py-4 px-2 hide-scrollbar snap-x snap-mandatory scroll-smooth">
            <div onClick={() => setCategoriaAtiva('Todas')} className={`relative flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 rounded-[1.5rem] overflow-hidden cursor-pointer snap-center transition-all active:scale-95 ${categoriaAtiva === 'Todas' ? 'ring-4 ring-rose-400 ring-offset-4 shadow-xl' : 'opacity-90'}`}>
              <div className="absolute inset-0 bg-stone-800 flex items-center justify-center"><span className="text-white font-bold font-serif text-sm">TODAS</span></div>
            </div>
            {CATEGORIAS.map(cat => (
              <div key={cat.id} onClick={() => setCategoriaAtiva(cat.nome)} className={`relative flex-shrink-0 w-40 h-20 sm:w-48 sm:h-24 rounded-[1.5rem] overflow-hidden cursor-pointer snap-center transition-all active:scale-95 group ${categoriaAtiva === cat.nome ? 'ring-4 ring-rose-400 ring-offset-4 shadow-xl' : 'opacity-90'}`}>
                <img src={cat.imagem} alt={cat.nome} className="absolute inset-0 w-full h-full object-cover blur-[2px] group-hover:scale-110 transition-transform duration-700" loading="lazy"/>
                <div className={`absolute inset-0 transition-colors duration-300 ${cat.especial ? 'bg-rose-900/40' : 'bg-black/40'}`}></div>
                <div className="absolute inset-0 flex items-center justify-center text-center p-2"><span className="text-white font-bold font-serif text-sm tracking-wide drop-shadow-md z-10">{cat.nome}</span></div>
                {cat.especial && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Heart className="absolute bottom-1 left-4 w-4 h-4 text-rose-300 fill-rose-300 opacity-0 animate-float-heart" />
                    <Heart className="absolute bottom-0 right-4 w-3 h-3 text-pink-200 fill-pink-200 opacity-0 animate-float-heart delay-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtosFiltrados.length === 0 ? (
            <div className="col-span-full py-16 text-center text-stone-400"><Heart className="w-12 h-12 mx-auto mb-4 opacity-20" /><p>Novidades em breve!</p></div>
          ) : (
            produtosFiltrados.map(produto => <ProdutoCard key={produto.id} produto={produto} onAdd={adicionarAoCarrinho} />)
          )}
        </div>
      </main>

      <Footer />
      
      <ModalCarrinho 
        isOpen={carrinhoAberto} 
        onClose={() => setCarrinhoAberto(false)} 
        carrinho={carrinho} 
        onUpdateQtd={atualizarQuantidade} 
        onCheckout={finalizarPedido} 
        total={totais.valor} 
      />
    </div>
  );
}