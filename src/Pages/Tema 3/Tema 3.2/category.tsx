import { products, categories } from '../../../Data/products';
import { Link } from 'react-router-dom';
import './shop.css';

const Category = () => {
  return (
    <>
      <main className="main-content">
        <h1>Tienda Completa</h1>

        {categories.map((category) => (
          <section key={category.id} className="category-section">
            <h2>
              <Link to={`/category/${category.id}`} className="category-link">
                {category.name}
              </Link>
            </h2>

            <div className="products-grid">
              {products
                .filter((p) => p.categoryId === category.id)
                .map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p><strong>${product.price.toFixed(2)}</strong></p>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Category;
