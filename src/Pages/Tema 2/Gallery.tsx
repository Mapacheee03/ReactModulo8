import './Galería .css';
import { photos } from '../../Data/photos';

function Gallery() {
  return (
    <>
      <div className="portafolioContainer">
        <section className="seccion">
          <h2 className="seccionTitulo">Galería de Fotos</h2>
          <div className="galleryGrid">
            {photos.map(({ id, url, title }) => (
              <figure key={id} className="galleryItem">
                <img src={url} alt={title} />
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;
