import './Galería .css';
import { photos } from '../../Data/photos';

function Albums() {
  const categories = Array.from(new Set(photos.map(photo => photo.category)));

  return (
    <>
      <div className="portafolioContainer">
        <section className="seccion">
          <h2 className="seccionTitulo">Álbumes</h2>
          {categories.map(category => (
            <div key={category} className="albumSection">
              <h3>{category}</h3>
              <div className="galleryGrid">
                {photos
                  .filter(photo => photo.category === category)
                  .map(({ id, url, title }) => (
                    <figure key={id} className="galleryItem">
                      <img src={url} alt={title} />
                      <figcaption>{title}</figcaption>
                    </figure>
                  ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Albums;
