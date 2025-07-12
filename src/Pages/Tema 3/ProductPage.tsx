import { useParams } from 'react-router-dom';
import { products, categories } from '../../Data/products';
import './shop.css';

const ProductPage = () => {
  const { productId } = useParams();
  const id = Number(productId);

  if (isNaN(id)) return <p>ID inválido</p>;

  const product = products.find((p) => p.id === id);
  if (!product) return <p>Producto no encontrado</p>;

  const category = categories.find((c) => c.id === product.categoryId);

  return (
    <div className="shop-container">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {category?.name}</p>
    </div>
  );
};

export default ProductPage;
