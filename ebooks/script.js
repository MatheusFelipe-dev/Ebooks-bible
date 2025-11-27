// --- DADOS DOS E-BOOKS ---
const ebooks = [
    {
        title: "Importancia da atividade física",
        category: "Saúde",
        image: "./imagens/atividade.png",
        summary: "Por Que a Atividade Física é TÃO Importante no Desenvolvimento dos Jovens?",
        link: "https://gamma.app/docs/Por-Que-a-Atividade-Fisica-e-TAO-Importante-no-Desenvolvimento-do-xvr2odq9ji3zwpk?mode=doc" 
    },
    {
        title: "Menarca e Movimento",
        category: "Saúde",
        image: "./imagens/menarca.png",
        summary: "Um Guia para o Bem-Estar das Jovens",
        link: "https://gamma.app/docs/Menarca-e-Movimento-Um-Guia-para-o-Bem-Estar-das-Jovens--0jrhht2ufszv3zy?mode=doc"
    },
    {
        title: "IA & os Riscos da Internet",
        category: "tecnologia",
        image: "./imagens/ia.png",
        summary: " Aqui você vai entender como aproveitar o melhor da tecnologia e da inteligência artificial sem cair nas armadilhas da internet.",
        link: "https://gamma.app/docs/Tecnologia-IA-os-Riscos-da-Internet-flthnpz136m3ukd?mode=doc"
    },
    {
        title: "Cuida da Cabeça, Cuida da Vida",
        category: "Saúde",
        image: "./imagens/cuida.png",
        summary: "Cuida da Cabeça, Cuida da Vida",
        link: "https://gamma.app/docs/Cuida-da-Cabeca-Cuida-da-Vida-3v1r180ld91mu8i?mode=doc"
    },
    {
        title: "Alimentação Consciente para Jovens",
        category: "saúde",
        image: "./imagens/comida.png",
        summary: "Como viver de forma saudável, sustentável e com propósito",
        link: "https://gamma.app/docs/Alimentacao-Consciente-para-Jovens-iygluab9v1m0myq?mode=doc"
    },
    {
        title: "Futuro, Engajamento Social e Participação",
        category: "saúde",
        image: "./imagens/jovem.png",
        summary: "Como jovens podem transformar o mundo ao seu redor",
        link: "https://gamma.app/docs/Futuro-Engajamento-Social-e-Participacao-qdo2fkb1saida35?mode=doc"
    }
];

const container = document.getElementById('library-container');

// --- FUNÇÕES ---

// Função de renderização
function renderLibrary(booksToRender) {
    container.innerHTML = ''; // Limpa o container
    
    booksToRender.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <span class="card-tag">${book.category}</span>
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="card-content">
                <div>
                    <h3 class="card-title">${book.title}</h3>
                    <p class="card-summary">${book.summary}</p>
                </div>
                <a href="${book.link}" target="_blank" class="read-btn">Ler E-book</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função de Filtragem
function filterSelection(category, element) {
    // 1. Atualizar visual dos botões
    const buttons = document.getElementsByClassName('filter-btn');
    for (let btn of buttons) {
        btn.classList.remove('active');
    }
    element.classList.add('active');

    // 2. Filtrar os dados
    if (category === 'all') {
        renderLibrary(ebooks);
    } else {
        const filteredBooks = ebooks.filter(book => book.category === category);
        renderLibrary(filteredBooks);
    }
}

// Inicializar página
document.addEventListener('DOMContentLoaded', () => {
    renderLibrary(ebooks);
});