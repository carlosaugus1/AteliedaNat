export const CONFIG = {
  NOME_ATELIE: "Ateliê da Nat",
  NUMERO_WHATSAPP: "5588999574978"
};

export const CATEGORIAS = [
  { id: 'namorados', nome: 'Dia dos Namorados', imagem: '/produtos/dia-dos-namorados/caixa-coracao-01.jpg', especial: true },
  { id: 'cestas', nome: 'Cestas de Café', imagem: '/produtos/cesta_dia_das_mães.jpg' },
  { id: 'caixas', nome: 'Caixas Surpresa', imagem: '/produtos/caixas/caixa-surpres.jpg' },
  { id: 'kits', nome: 'Kits Criativos', imagem: '/produtos/dia-dos-namorados/kit-polaroid.jpg' },
  { id: 'velas', nome: 'Velas', imagem: '/produtos/velas/vela-01.jpg' }
];

export const PRODUTOS = [
  { 
    id: 1, 
    nome: "LOVEFLIX", 
    descricao: "2 mini coca-cola, 2 KitKat, 2 bombons de chocolate, 1 Pipoca de microondas, 4 vales do amor , 1 rolinho de filme personalizado com 9 fotos, 1 roleta do amor com sugestões de filmes para o casal, Arte Netflix personalizada com dados do casal.",
    isKit: true, 
    precoAntigo: 189.90, // <--- PREÇO RISCADO AQUI
    preco: 159.90, 
    categorias: ["Dia dos Namorados", "Kits Criativos"], // <--- DUAS CATEGORIAS AQUI
    imagem: "/produtos/dia-dos-namorados/loveflix-01.jpg", 
    imagensGaleria: [
      "/produtos/dia-dos-namorados/loveflix-01.jpg",
      "/produtos/dia-dos-namorados/loveflix-00.jpg", 
    ]
  },
  { 
    id: 2, 
    nome: "Caixa Surpresa Coração", 
    descricao: "1 ursinho de pelúcia, 1 mini buquê vela perfumada, 2 bombons de chocolate, 1 biscoito teens, 3 cookies, 1 talento, 1 chocolate napolitano, 6 fotos, Polaroid, 1 cartão dia dos namorados.",
    isKit: true,
    preco: 175.00, 
    categorias: ["Dia dos Namorados", "Caixas Surpresa"], 
    imagem: "/produtos/dia-dos-namorados/caixa-coracao-01.jpg",
    imagensGaleria: [
      "/produtos/dia-dos-namorados/caixa-coracao-00.jpg",
      "/produtos/dia-dos-namorados/caixa-coracao-01.jpg",
      "/produtos/dia-dos-namorados/caixa-coracao-02.jpg",
    ]
  },
  { 
    id: 3, 
    nome: "Álbum Memory Collection", 
    descricao: "Álbum personalizado do casal em clima de copa com 25 figurinhas sendo 3 premiadas.", 
    isKit: true,
    preco: 49.90, 
    categorias: ["Dia dos Namorados"], 
    imagem: "/produtos/dia-dos-namorados/album-love-copa.jpg" 
  },
  { 
    id: 4, 
    nome: "Quadro nossas memórias ", 
    descricao: "Quadro com varal luminoso de fotos polaroids, contém 9 polaroids.",
    isKit: false,
    preco: 39.90, 
    categorias: ["Dia dos Namorados"], 
    imagem: "/produtos/dia-dos-namorados/quadro-nossas-memorias-00.jpeg",
    imagensGaleria: [
      "/produtos/dia-dos-namorados/quadro-nossas-memorias-00.jpeg",
      "/produtos/dia-dos-namorados/quadro-nossas-memorias-01.jpg",
    ]
  },
  { 
    id: 5, 
    nome: "Quadro nosso amor estava escrito nas estrelas ", 
    descricao: "Um quadro que mostra exatamente como estavam as estrelas no céu na data e local que o casal escolheu. Personalize com a data e local do encontro, início do namoro ou casamento para eternizar esse momento tão especial.", 
    isKit: false,
    preco: 39.90, 
    categorias: ["Dia dos Namorados"], 
    imagem: "/produtos/dia-dos-namorados/quadro-estrelas-01.jpg",
    imagensGaleria: [
      "/produtos/dia-dos-namorados/quadro-estrelas-01.jpg",
      "/produtos/dia-dos-namorados/quadro-estrelas-02.jpg",
    ]
  },
  { 
    id: 6, 
    nome: "Caixa Cascata", 
    descricao: "Uma caixa com 6 fotos em efeitos cascata ao abrir.",
    isKit: false,
    preco: 19.90, 
    categorias: ["Dia dos Namorados", "Caixas Surpresa"], 
    imagem: "/produtos/dia-dos-namorados/caixa-cascata-00.jpg",
    imagensGaleria: [
      "/produtos/dia-dos-namorados/caixa-cascata-00.jpg",
      "/produtos/dia-dos-namorados/caixa-cascata-01.jpg",
      "/produtos/dia-dos-namorados/caixa-cascata-02.jpg",
    ]
  },
  { 
    id: 7, 
    nome: "Rolo de Filme", 
    descricao: "1 caixa de acrilico personalizada, 9 fotos, 1 cartão dia dos namorados.", 
    isKit: true,
    preco: 17.00, 
    categorias: ["Dia dos Namorados", "Kits Criativos"], 
    imagem: "/produtos/dia-dos-namorados/rolo-de-filme-00.jpg",
    imagensGaleria: [
      "/produtos/dia-dos-namorados/rolo-de-filme-00.jpg",
      "/produtos/dia-dos-namorados/rolo-de-filme-01.jpg",
    ]
  },
  { 
    id: 8, 
    nome: "Potinho Iluminado", 
    descricao: "Um potinho de vidro iluminado com design romântico. Acompanha uma caixinha + cartão do Dia dos Namorados.",
    isKit: false, 
    preco: 39.90, 
    categorias: ["Dia dos Namorados"], 
    imagem: "/produtos/dia-dos-namorados/pote-iluminado-00.jpg",
    imagensGaleria: [
      "/produtos/dia-dos-namorados/pote-iluminado-00.jpg",
      "/produtos/dia-dos-namorados/pote-iluminado-01.jpg",
    ]
  },
  { 
    id: 9, 
    nome: "Chaveiro Potinho", 
    descricao: "Te amo tanto que te guardei num potinho.",
    isKit: false, 
    preco: 14.00, 
    categorias: ["Dia dos Namorados"], 
    imagem: "/produtos/dia-dos-namorados/potinho.jpg",
  },
  { 
    id: 10, 
    nome: "Potinho Bis", 
    descricao: "Pote bis do nosso amor contém 8 bis com frases personalizadas.",
    isKit: false, 
    preco: 29.00, 
    categorias: ["Dia dos Namorados"], 
    imagem: "/produtos/dia-dos-namorados/pote-bis.jpg",
    imagensGaleria: [
      "/produtos/dia-dos-namorados/pote-bis.jpg",
    ]
  },
  { 
    id: 11, 
    nome: "Kit 8 Polaroids", 
    descricao: "Um pequeno kit com 8 polaroids para capturar momentos especiais.",
    isKit: false, 
    preco: 15.00, 
    categorias: ["Dia dos Namorados"], 
    imagem: "/produtos/dia-dos-namorados/kit-polaroid.jpg",
    imagensGaleria: [
      "/produtos/dia-dos-namorados/kit-polaroid.jpg",
    ]
  },
  { 
    id: 12, 
    nome: "Chaveiro Álbum de Fotos", 
    descricao: "Um chaveiro com mini álbum de fotos para guardar seus momentos especiais.",
    isKit: false, 
    preco: 19.90, 
    categorias: ["Dia dos Namorados"], 
    imagem: "/produtos/dia-dos-namorados/chaveiro-album.jpg",
    imagensGaleria: [
      "/produtos/dia-dos-namorados/chaveiro-album.jpg",
    ]
  },
  { 
    id: 13, 
    nome: "Vela - Buquê de Rosa", 
    descricao: "Uma vela aromática em forma de buque de rosa para criar um ambiente romântico + cartão do Dia dos Namorados.",
    isKit: false, 
    precoAntigo: 18.00,
    preco: 15.0, 
    categorias: ["Dia dos Namorados", "Velas"],
    imagem: "/produtos/velas/vela-rosa-00.jpg",
    imagensGaleria: [
      "/produtos/velas/vela-rosa-00.jpg",
    ]
  },
];

export const CARROSSEL_SLIDES = [
  { fundo: "/carrossel/cesta-1.jpg", titulo: "Especial Dia dos Namorados", corTexto: "text-white", categoriaDestino: "Dia dos Namorados" },
  { fundo: "/carrossel/copa1.jpg", titulo: "Surpreenda quem você ama", corTexto: "text-white", categoriaDestino: "Caixas Surpresa" },
  { fundo: "/carrossel/cesta-01.jpg", titulo: "Presentes feitos com amor", corTexto: "text-white", categoriaDestino: "Kits Criativos" }
];