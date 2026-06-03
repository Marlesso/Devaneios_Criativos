// Funções de navegação
function navigate(page, element) {
    // Remove classe active de todos os itens
    document.querySelectorAll('.nav_item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Adiciona classe active ao clicado
    if (element) {
        element.classList.add('active');
    }
    
    // Esconde todas as seções
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostra a seção selecionada
    const pageElement = document.getElementById(`${page}_page`);
    if (pageElement) {
        pageElement.classList.add('active');
    }
}

// Função para alternar modo escuro
function toggleDark() {
    const body = document.body;
    const btn = document.getElementById('darkBtn');
    
    body.classList.toggle('dark-mode');
    
    // Salvar preferência no localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Mudar texto do botão
    btn.textContent = isDarkMode ? 'Light' : 'Dark';
}

// Renderizadores
function renderCulturas() {
    const section = document.getElementById('cultures_page');
    section.innerHTML = culturas.map(c => `
        <div class="card">
            <h3>${c.nome}</h3>
            <p><strong>Aparência atípica:</strong> ${c.aparencia_atipica}.</p>
            <p><strong>Pontos fortes:</strong> ${c.pontosFortes.join(', ')}.</p>
            <p><strong>Pontos fracos:</strong> ${c.pontosFracos.join(', ')}.</p><br>
            <div>${c.historia}</div>
        </div>
    `).join('');
}

function renderPersonagens() {
    const section = document.getElementById('characters_page');
    section.innerHTML = personagens.map(p => `
        <div class="card">
            <h3>${p.nome || '(sem nome)'}</h3>
            <p><strong>Idade:</strong> ${p.idade}</p>
            <p><strong>Aparência:</strong> ${p.aparencia || '—'}</p>
            <p><strong>Personalidade:</strong> ${p.personalidade || '—'}</p>
            <p><strong>Objetivos:</strong> ${p.objetivos.join(', ') || '—'}</p><br>
            <div>${p.resumo}</div>
        </div>
    `).join('');
}

function renderLivros() {
    const section = document.getElementById('books_page');
    section.innerHTML = livros.map(l => `
        <div class="card">
            <h3>${l.titulo || '(sem título)'}</h3>
            <p>${l.resumo || '—'}</p>
            <details>
                <summary style="cursor:pointer; color: var(--text2); margin-top: 8px;">
                    Ver capítulos (${l.capitulos.length})
                </summary>
                ${l.capitulos.map(cap => `
                    <div class="card" style="margin-top: 10px;">
                        <h3>${cap.titulo || '(sem título)'}</h3>
                        <em style="color: var(--text3)">${cap.subtitulo || ''}</em><br>
                        <div>${cap.conteudo}</div>
                    </div>
                `).join('')}
            </details>
        </div>
    `).join('');
}

function renderRituais() {
    const section = document.getElementById('rituals_page');
    section.innerHTML = rituais.map(r => `
        <div class="card">
            <h3>${r.nome || '(sem nome)'}</h3>
            <p><strong>Ingredientes:</strong> ${r.ingredientes.join(', ') || '—'}</p><br>
            <div>${r.descricao}</div>
        </div>
    `).join('');
}

function renderCriaturas() {
    const section = document.getElementById('criatures_page');
    section.innerHTML = criaturas.map(c => `
        <div class="card">
            <h3>${c.nome || '(sem nome)'}</h3>
            <p><strong>Natureza:</strong> ${c.natureza || '—'}</p>
            <p><strong>Habitat:</strong> ${c.habitat || '—'}</p>
            <p><strong>Habilidades:</strong> ${c.habilidades.join(', ') || '—'}</p>
            <p><strong>Fraquezas:</strong> ${c.fraquezas.join(', ') || '—'}</p>
            <p><strong>Aparência:</strong> ${c.aparencia || '—'}</p>
            <p><strong>Inteligência:</strong> ${c.nivelDeInteligencia}%</p>
        </div>
    `).join('');
}

function renderHome() {
    const section = document.getElementById('home_page');
    section.innerHTML = `
        <div class="card">
            <h3>Bem-vindo aos Devaneios Criativos</h3>
            <p>Um depósito de conteúdo criativo com ${livros.length} livros, 
               ${personagens.length} personagens, ${culturas.length} culturas, 
               ${rituais.length} rituais e ${criaturas.length} criaturas.</p>
        </div>
    `;
}

// Carregar preferência ao inicializar
document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    const btn = document.getElementById('darkBtn');
    
    if (darkMode) {
        body.classList.add('dark-mode');
        btn.textContent = 'Light';
    }
    
    // Renderiza os dados
    renderHome();
    renderLivros();
    renderPersonagens();
    renderCulturas();
    renderRituais();
    renderCriaturas();

    // Mostrar home page por padrão
    navigate('home', document.querySelector('[data-page="home"]'));
});