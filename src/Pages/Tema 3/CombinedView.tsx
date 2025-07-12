import { useParams } from 'react-router-dom';
import { products, categories } from '../../Data/products';
import './shop.css';

const CombinedView = () => {
  const { categoryId, productId } = useParams();
  const cid = Number(categoryId);
  const pid = Number(productId);

  if (isNaN(cid) || isNaN(pid)) return <p>Parámetros inválidos</p>;

  const category = categories.find((c) => c.id === cid);
  const product = products.find((p) => p.id === pid && p.categoryId === cid);

  if (!category) return <p>Categoría no encontrada</p>;
  if (!product) return <p>Producto no pertenece a esta categoría</p>;

  return (
    <div className="shop-container">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {category.name}</p>
    </div>
  );
};

export default CombinedView;
