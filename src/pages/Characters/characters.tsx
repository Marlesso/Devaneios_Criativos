import { personagens } from '../../assets/data'
import './characters.css'

function Characters() {
  return (
    <section className="page characters-page">
      {personagens.map((personagem) => (
        <article className="card character-card" key={personagem.id}>
          <h3>{personagem.nome || '(sem nome)'}</h3>
          <p><strong>Idade:</strong> {personagem.idade}</p>
          <p><strong>Aparência:</strong> {personagem.aparencia || '—'}</p>
          <p><strong>Personalidade:</strong> {personagem.personalidade || '—'}</p>
          <p><strong>Objetivos:</strong> {personagem.objetivos.join(', ') || '—'}</p>
          <p className="story-text">{personagem.resumo || '—'}</p>
        </article>
      ))}
    </section>
  )
}

export default Characters