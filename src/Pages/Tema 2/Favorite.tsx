import './Galería .css';
import { photos } from '../../Data/photos';

function Favorites() {
  const favorites = photos.filter(photo => photo.isFavorite);

  return (
    <>
      <div className="portafolioContainer">
        <section className="seccion">
          <h2 className="seccionTitulo">Fotos Favoritas</h2>
          {favorites.length > 0 ? (
            <div className="galleryGrid">
              {favorites.map(({ id, url, title }) => (
                <figure key={id} className="galleryItem">
                  <img src={url} alt={title} />
                  <figcaption>{title}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p>No tienes fotos favoritas aún.</p>
          )}
        </section>
      </div>
    </>
  );
}

export default Favorites;
