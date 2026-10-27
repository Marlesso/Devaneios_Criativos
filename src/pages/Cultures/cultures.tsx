import { culturas } from '../../assets/data'
import './cultures.css'

function Cultures() {
  return (
    <section className="page cultures-page">
      {culturas.map((cultura) => (
        <article className="card culture-card" key={cultura.id}>
          <h3>{cultura.nome}</h3>
          <p><strong>Aparência atípica:</strong> {cultura.aparencia_atipica}.</p>
          <p><strong>Pontos fortes:</strong> {cultura.pontosFortes.join(', ')}.</p>
          <p><strong>Pontos fracos:</strong> {cultura.pontosFracos.join(', ')}.</p>
          <p className="story-text">{cultura.historia}</p>
        </article>
      ))}
    </section>
  )
}

export default Cultures