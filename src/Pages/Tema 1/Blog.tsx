import './Portafolio.css';


function Blog() {
  return (
    <>
      <div className="portafolioContainer">
        <section className="seccion">
          <h2 className="seccionTitulo">Blog</h2>
          <article>
            <h3>Título del primer post</h3>
            <p>Contenido del primer post del blog...</p>
          </article>
          <article>
            <h3>Segundo post interesante</h3>
            <p>Contenido del segundo post...</p>
          </article>
        </section>
      </div>
    </>
  );
}

export default Blog;
