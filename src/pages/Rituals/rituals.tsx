import { rituais } from '../../assets/data'
import './rituals.css'

function Rituals() {
  return (
    <section className="page rituals-page">
      {rituais.map((ritual) => (
        <article className="card ritual-card" key={ritual.id}>
          <h3>{ritual.nome || '(sem nome)'}</h3>
          <p><strong>Ingredientes:</strong> {ritual.ingredientes.join(', ') || '—'}</p>
          <p className="story-text">{ritual.descricao || '—'}</p>
        </article>
      ))}
    </section>
  )
}

export default Rituals
