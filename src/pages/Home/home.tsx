import { culturas, criaturas, livros, personagens, rituais } from '../../assets/data'
import './home.css'

function Home() {
  return (
    <section className="page home-page">
      <article className="card welcome-card">
        <p className="eyebrow">Um universo de ideias</p>
        <h3>Bem-vindo aos Devaneios Criativos</h3>
        <p>
          Um depósito de conteúdo criativo com {livros.length} livros,{' '}
          {personagens.length} personagens, {culturas.length} culturas,{' '}
          {rituais.length} rituais e {criaturas.length} criaturas.
        </p>
      </article>
    </section>
  )
}

export default Home