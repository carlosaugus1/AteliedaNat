import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowUp, Info } from 'lucide-react';

// Importações dos Dados
import { CONFIG, PRODUTOS, CARROSSEL_SLIDES } from './data/mockData';

// Importações dos Componentes
import Header from './components/Header';
import CarrosselHero from './components/CarrosselHero';
import VitrineCategorias from './components/VitrineCategorias';
import VitrineProdutos from './components/VitrineProdutos';
import ModalProdutoDetalhe from './components/modais/ModalProdutoDetalhe';
import ModalCarrinho from './components/modais/ModalCarrinho';
import Footer from './components/Footer';

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [slideAtual, setSlideAtual] = useState(0);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Dia dos Namorados');
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setSlideAtual((prev) => (prev + 1) % CARROSSEL_SLIDES.length), 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navegarParaCategoria = (categoriaNome) => {
      setCategoriaAtiva(categoriaNome);
      const vitrineElement = document.getElementById('vitrine-ancora');
      if (vitrineElement) vitrineElement.scrollIntoView({ behavior: 'smooth' });
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
          return { ...item, quantidade: Math.max(0, novaQuantidade) };
        }
        return item;
      }).filter((item) => item.quantidade > 0)
    );
  };

  const atualizarQuantidadeExata = (id, valorDigitado) => {
    const qtd = parseInt(valorDigitado, 10);
    if (isNaN(qtd) || qtd < 0) return;
    if (qtd === 0) {
      removerDoCarrinho(id);
      return;
    }
    setCarrinho(prev => prev.map(item => item.id === id ? { ...item, quantidade: qtd } : item));
  };

  const removerDoCarrinho = (id) => setCarrinho(prev => prev.filter(item => item.id !== id));
  
  const limparCarrinho = () => setCarrinho([]);

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

    window.open(`https://wa.me/${CONFIG.NUMERO_WHATSAPP}?text=${mensagem}`, '_blank');
  };

  // BLINDAGEM DE SEGURANÇA: Evita o ecrã branco se um produto não tiver a propriedade 'categorias' (no plural)
  const produtosFiltrados = termoPesquisa.trim() !== '' 
    ? PRODUTOS.filter(produto => {
        const nome = produto.nome || '';
        const descricao = produto.descricao || '';
        return nome.toLowerCase().includes(termoPesquisa.toLowerCase()) || 
               descricao.toLowerCase().includes(termoPesquisa.toLowerCase());
      })
    : (categoriaAtiva === 'Todas' ? PRODUTOS : PRODUTOS.filter(produto => {
        // Se o produto tiver "categorias", usa. Se tiver só "categoria", transforma numa lista e usa na mesma.
        const listaSegura = produto.categorias ? produto.categorias : [produto.categoria];
        return listaSegura.includes(categoriaAtiva);
      }));

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
          <p className="text-stone-600 max-w-2xl mx-auto">Navegue por nossas categorias e encontre o presente perfeito.</p>
        </div>

        <VitrineCategorias categoriaAtiva={categoriaAtiva} setCategoriaAtiva={setCategoriaAtiva} />
        
        {categoriaAtiva === 'Velas' && (
          <div className="bg-rose-50/80 border border-rose-100 rounded-2xl p-4 mb-8 flex items-start gap-3 max-w-3xl mx-auto animate-in fade-in slide-in-from-top-4 shadow-sm">
            <Info className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-rose-800 mb-1 text-sm md:text-base">Muitos aromas disponíveis! ✨</strong>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Ao nos enviar seu pedido pelo WhatsApp, passaremos a lista completa de aromas para você escolher o seu favorito.
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

      {/* Botões Flutuantes */}
      <div className={`fixed top-4 right-4 z-[55] transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={() => setCarrinhoAberto(true)}
          className="relative p-3 bg-white text-rose-600 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-rose-50 transition-colors active:scale-90 border border-rose-100"
        >
          <ShoppingBag className="w-6 h-6" />
          {quantidadeItens > 0 && <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">{quantidadeItens}</span>}
        </button>
      </div>

      <div className={`fixed bottom-6 right-4 sm:right-6 z-[55] transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-rose-500/90 backdrop-blur-sm text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-stone-800 transition-colors active:scale-90"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>

      <Footer />
    </div>
  );
}