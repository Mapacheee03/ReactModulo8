import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../../Data/products';
import './shop.css';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const id = Number(categoryId);

  if (isNaN(id)) return <p>ID inválido</p>;

  const category = categories.find((c) => c.id === id);
  const filtered = products.filter((p) => p.categoryId === id);

  if (!category) return <p>Categoría no encontrada</p>;

  return (
    <div className="shop-container">
      <h2>{category.name}</h2>
      {filtered.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>Precio: ${p.price}</p>
          <Link to={`/product/${p.id}`}>Ver producto</Link>
          {' | '}
          <Link to={`/category/${id}/product/${p.id}`}>Vista combinada</Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
