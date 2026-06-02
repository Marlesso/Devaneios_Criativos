# 📖 Devaneios Criativos

> Depósito de conteúdo criativo — um universo de livros, personagens, culturas, rituais e criaturas.

**Autor:** Marcelo Rodrigues Rosa Paschoal  
**Início do projeto:** 12/05/2026

---

## 📋 Sobre o Projeto

**Devaneios Criativos** é uma aplicação web para organizar e visualizar conteúdo de um universo ficcional. O projeto funciona como uma wiki pessoal, centralizando informações sobre livros, personagens, culturas, rituais e criaturas de forma estruturada e navegável.

---

## 🗂️ Estrutura de Páginas

| Página | Descrição |
|---|---|
| **Início** | Visão geral do universo com contagem de elementos cadastrados |
| **Livros** | Lista de obras com resumo e capítulos expansíveis |
| **Personagens** | Fichas dos personagens com aparência, personalidade e objetivos |
| **Culturas** | Raças e culturas com pontos fortes, fracos e história |
| **Rituais** | Rituais com ingredientes e descrição |
| **Criaturas** | Bestiário com habitat, habilidades, fraquezas e nível de inteligência |

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica da aplicação
- **CSS3** — estilização com variáveis CSS e design responsivo
- **JavaScript (Vanilla)** — navegação, renderização dinâmica e modo escuro

Sem frameworks, sem dependências externas.

---

## 📁 Estrutura de Arquivos

```
projeto/
├── index.html        # Estrutura principal da aplicação
└── src/
    ├── style.css     # Estilos e tema visual
    ├── data.js       # Banco de dados do universo fictício
    └── script.js     # Lógica de navegação e renderização
```

---

## ✨ Funcionalidades

- **Navegação por seções** sem recarregar a página
- **Modo escuro / claro** com preferência salva no `localStorage`
- **Renderização dinâmica** — adicionar dados no `data.js` atualiza a tela automaticamente
- **Design responsivo** para desktop, tablet e mobile
- **Animação de transição** entre páginas

---

## 🚀 Como Usar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Nenhuma instalação ou servidor necessário

```bash
# Opcionalmente, sirva localmente com o Live Server (VS Code)
# ou qualquer servidor HTTP simples
```

---

## ✏️ Como Adicionar Conteúdo

Todo o conteúdo fica no arquivo `src/data.js`. Basta adicionar um novo objeto ao array correspondente:

**Exemplo — nova cultura:**
```js
const culturas = [
    {
        id: 2,
        nome: 'Lobisomens',
        aparencia_atipica: 'Transformação em lobo na lua cheia',
        pontosFortes: ['Força sobre-humana', 'Regeneração'],
        pontosFracos: ['Prata', 'Controle emocional'],
        historia: `
            <p class="paragrafo">
                Os lobisomens surgiram de uma antiga maldição...
            </p>
        `
    }
];
```

O item aparecerá automaticamente na página **Culturas** ao recarregar.

---

## 🎨 Tema Visual

O projeto usa um tema roxo escuro como padrão, com suporte a modo claro via alternância manual. As cores são controladas por variáveis CSS em `:root`, facilitando futuras customizações.

| Variável | Uso |
|---|---|
| `--bg` | Cor de fundo principal |
| `--bg-secondary` | Fundo dos cards |
| `--text1` | Texto primário |
| `--text2` | Texto de destaque |
| `--accent` | Cor de acento |

---