import { useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { products } from '../../../Data/products2';
import styles from './SearchPage.module.css';

const SearchPage = () => {
  const [params, setParams] = useSearchParams();

  const q = params.get('q') ?? '';
  const category = params.get('category') ?? '';
  const minPrice = parseFloat(params.get('minPrice') ?? '0');
  const maxPrice = parseFloat(params.get('maxPrice') ?? '1000');
  const sort = params.get('sort') ?? 'name';

  const [search, setSearch] = useState(q);

  const filtered = useMemo(() => {
    let result = products.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase()) &&
      (!category || p.category === category) &&
      p.price >= minPrice &&
      p.price <= maxPrice
    );

    if (sort === 'price') result.sort((a, b) => a.price - b.price);
    if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [q, category, minPrice, maxPrice, sort]);

  const handleChange = () => {
    const newParams: any = {};
    if (search) newParams.q = search;
    if (category) newParams.category = category;
    if (!isNaN(minPrice)) newParams.minPrice = minPrice;
    if (!isNaN(maxPrice)) newParams.maxPrice = maxPrice;
    if (sort) newParams.sort = sort;

    setParams(newParams);
  };

  return (
    <div className={styles.container}>
      <h2>Buscador con filtros</h2>

      <div className={styles.filters}>
        <input
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setParams(p => {
          p.set('category', e.target.value);
          return p;
        })}>
          <option value="">Todas</option>
          <option value="books">Libros</option>
          <option value="courses">Cursos</option>
        </select>

        <input
          type="number"
          placeholder="Precio mínimo"
          defaultValue={minPrice}
          onBlur={(e) => setParams(p => {
            p.set('minPrice', e.target.value);
            return p;
          })}
        />

        <input
          type="number"
          placeholder="Precio máximo"
          defaultValue={maxPrice}
          onBlur={(e) => setParams(p => {
            p.set('maxPrice', e.target.value);
            return p;
          })}
        />

        <select value={sort} onChange={(e) => setParams(p => {
          p.set('sort', e.target.value);
          return p;
        })}>
          <option value="name">Nombre</option>
          <option value="price">Precio</option>
        </select>

        <button onClick={handleChange}>Aplicar</button>
      </div>

      <ul className={styles.results}>
        {filtered.map(p => (
          <li key={p.id}>{p.name} - ${p.price} ({p.category})</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
