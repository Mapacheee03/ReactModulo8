export interface Productos {
  id: number;
  name: string;
  category: string;
  price: number;
}

export const products: Productos[] = [
  { id: 1, name: 'React Book', category: 'books', price: 25 },
  { id: 2, name: 'Vue Course', category: 'courses', price: 50 },
  { id: 3, name: 'Angular eBook', category: 'books', price: 15 },
  { id: 4, name: 'React Course', category: 'courses', price: 70 },
  { id: 5, name: 'Node.js Book', category: 'books', price: 30 },
];
