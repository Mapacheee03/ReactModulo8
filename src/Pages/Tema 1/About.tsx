import './Portafolio.css';
function About() {
  return (
    <>
      <div className="portafolioContainer">
        <section className="seccion">
          <h2 className="seccionTitulo">Habilidades</h2>
          <ul className="habilidadesLista">
            <li className="habilidadItem">React</li>
            <li className="habilidadItem">TypeScript</li>
            <li className="habilidadItem">Node.js</li>
            <li className="habilidadItem">CSS</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default About;
