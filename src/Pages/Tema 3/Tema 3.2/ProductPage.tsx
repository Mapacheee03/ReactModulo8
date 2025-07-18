import { useParams } from 'react-router-dom';
import { products, categories } from '../../../Data/products';

function ProductPage() {
  const { categoryId, productId } = useParams();
  const catId = Number(categoryId);
  const prodId = Number(productId);

  if (isNaN(catId) || isNaN(prodId)) return <p>⚠️ Parámetros inválidos</p>;

  const category = categories.find((c) => c.id === catId);
  const product = products.find((p) => p.id === prodId && p.categoryId === catId);

  if (!category || !product) return <p>❌ No encontrado</p>;

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
      <img src={product.image} alt={product.name} width={200} />
      <div>
        <h2>{product.name}</h2>
        <p><strong>Categoría:</strong> {category.name}</p>
        <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductPage;
