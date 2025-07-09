import './Portafolio.css';


function Projects() {
  return (
    <>
    <div className="portafolioContainer">
      <h1 className="titulo">Mis Proyectos</h1>
      <section className="seccion">
        <h2 className="seccionTitulo">Proyectos Destacados</h2>

        <div className="proyectoCard">
          <div className="proyectoNombre">ToDo App</div>
          <div className="proyectoTecnologia">React, TypeScript</div>
          <div className="proyectoDescripcion">Una app para gestionar tareas diarias.</div>
        </div>

        <div className="proyectoCard">
          <div className="proyectoNombre">Blog Personal</div>
          <div className="proyectoTecnologia">React, Markdown</div>
          <div className="proyectoDescripcion">Sitio de blog simple con publicaciones escritas en Markdown.</div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Projects;
