import { useParams, useNavigate } from 'react-router-dom';
import { products, categories } from '../../../Data/products';
import './shop.css';

function CategoryPage() {
  const { categoryId } = useParams();
  const id = Number(categoryId);
  const navigate = useNavigate();

  if (isNaN(id)) return <p>⚠️ Categoría inválida</p>;

  const category = categories.find((c) => c.id === id);
  if (!category) return <p>⚠️ Categoría no encontrada</p>;

  const filteredProducts = products.filter((p) => p.categoryId === id);

  return (
    <>
      <main className="main-content">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Volver a la lista
        </button>
        <h2>{category.name}</h2>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default CategoryPage;
