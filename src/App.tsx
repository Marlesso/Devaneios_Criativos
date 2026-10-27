import { useEffect, useState } from 'react'
import Books from './pages/Books/books'
import Characters from './pages/Characters/characters'
import Creatures from './pages/Criatures/criatures'
import Cultures from './pages/Cultures/cultures'
import Home from './pages/Home/home'
import Rituals from './pages/Rituals/rituals'
import './App.css'

const pages = [
  { id: 'home', label: 'Início' },
  { id: 'books', label: 'Livros' },
  { id: 'characters', label: 'Personagens' },
  { id: 'cultures', label: 'Culturas' },
  { id: 'rituals', label: 'Rituais' },
  { id: 'creatures', label: 'Criaturas' },
] as const

type Page = (typeof pages)[number]['id']

function App() {
  const [activePage, setActivePage] = useState<Page>('home')
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.localStorage.getItem('darkMode') === 'true',
  )

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
    window.localStorage.setItem('darkMode', String(isDarkMode))
  }, [isDarkMode])

  function renderPage() {
    switch (activePage) {
      case 'books':
        return <Books />
      case 'characters':
        return <Characters />
      case 'cultures':
        return <Cultures />
      case 'rituals':
        return <Rituals />
      case 'creatures':
        return <Creatures />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="header-content">
          <div className="topbar-top">
            <h1 className="logo">Devaneios Criativos</h1>
            <button
              className="theme-button"
              type="button"
              onClick={() => setIsDarkMode((current) => !current)}
              aria-label={`Ativar tema ${isDarkMode ? 'escuro' : 'claro'}`}
            >
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>
          <nav className="navigation" aria-label="Navegação principal">
            {pages.map((page) => (
              <button
                className={`nav-item${activePage === page.id ? ' active' : ''}`}
                type="button"
                key={page.id}
                onClick={() => setActivePage(page.id)}
                aria-current={activePage === page.id ? 'page' : undefined}
              >
                {page.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main key={activePage}>{renderPage()}</main>

      <footer>
        <div className="footer-content">
          <h2>Data de início do projeto: 12/05/2026</h2>
        </div>
      </footer>
    </div>
  )
}

export default App
