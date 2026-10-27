import { livros } from '../../assets/data'
import './books.css'

function Books() {
  return (
    <section className="page books-page">
      {livros.map((livro) => (
        <article className="card book-card" key={livro.id}>
          <h3>{livro.titulo || '(sem título)'}</h3>
          <p>{livro.resumo || '—'}</p>
          <details>
            <summary>Ver capítulos ({livro.capitulos.length})</summary>
            {livro.capitulos.map((capitulo) => (
              <article className="card chapter-card" key={capitulo.id}>
                <h3>{capitulo.titulo || '(sem título)'}</h3>
                {capitulo.subtitulo && <em>{capitulo.subtitulo}</em>}
                <p className="story-text">{capitulo.conteudo || '—'}</p>
              </article>
            ))}
          </details>
        </article>
      ))}
    </section>
  )
}

export default Books