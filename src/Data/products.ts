export interface Product {
  id: number;
  name: string;
  categoryId: number;
  price: number;
}

export const categories = [
  { id: 1, name: 'Tecnología' },
  { id: 2, name: 'Hogar' },
];

export const products: Product[] = [
  { id: 1, name: 'Laptop Lenovo', categoryId: 1, price: 850 },
  { id: 2, name: 'Mouse Logitech', categoryId: 1, price: 25 },
  { id: 3, name: 'Silla Oficina', categoryId: 2, price: 120 },
  { id: 4, name: 'Escritorio', categoryId: 2, price: 210 },
];
