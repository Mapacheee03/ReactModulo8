import './Portafolio.css';


function Contact() {
  return (
    <>
      <div className="portafolioContainer">
        <section className="seccion">
          <h2 className="seccionTitulo">Contacto</h2>
          <form>
            <label>
              Nombre:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              Mensaje:
              <textarea name="message" />
            </label>
            <br />
            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
