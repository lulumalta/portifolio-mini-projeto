import projects from "../data/projects.js";


export default function Projects(){
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projetos</h2>

        <div className="projects-grid">
          {projects.map(p => (
            <article key={p.id} className="project-card">
              <img src={p.image} alt={p.title} />
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="card-actions">
                  <a className="btn btn-sm" href={p.github} target="_blank" rel="noreferrer">Código</a>
                  {p.demo && <a className="btn btn-sm btn-ghost" href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
