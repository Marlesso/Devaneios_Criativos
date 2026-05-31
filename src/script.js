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

// Carregar preferência ao inicializar
document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    const btn = document.getElementById('darkBtn');
    
    if (darkMode) {
        body.classList.add('dark-mode');
        btn.textContent = 'Light';
    }
    
    // Mostrar home page por padrão
    navigate('home', document.querySelector('[data-page="home"]'));
});