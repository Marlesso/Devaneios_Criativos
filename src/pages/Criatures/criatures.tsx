import { criaturas } from '../../assets/data'
import './criatures.css'

function Creatures() {
  return (
    <section className="page creatures-page">
      {criaturas.map((criatura) => (
        <article className="card creature-card" key={criatura.id}>
          <h3>{criatura.nome || '(sem nome)'}</h3>
          <p><strong>Natureza:</strong> {criatura.natureza || '—'}</p>
          <p><strong>Habitat:</strong> {criatura.habitat || '—'}</p>
          <p><strong>Habilidades:</strong> {criatura.habilidades.join(', ') || '—'}</p>
          <p><strong>Fraquezas:</strong> {criatura.fraquezas.join(', ') || '—'}</p>
          <p><strong>Aparência:</strong> {criatura.aparencia || '—'}</p>
          <p><strong>Inteligência:</strong> {criatura.nivelDeInteligencia}%</p>
        </article>
      ))}
    </section>
  )
}

export default Creatures