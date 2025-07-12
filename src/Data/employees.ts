export interface Employee {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  department: string;
}

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Ana López',
    position: 'Desarrolladora Frontend',
    email: 'ana@example.com',
    phone: '555-1234',
    department: 'Tecnología',
  },
  {
    id: '2',
    name: 'Carlos Ramírez',
    position: 'Diseñador UX/UI',
    email: 'carlos@example.com',
    phone: '555-5678',
    department: 'Diseño',
  },
  {
    id: '3',
    name: 'Lucía Torres',
    position: 'Gerente de Marketing',
    email: 'lucia@example.com',
    phone: '555-9012',
    department: 'Marketing',
  },
];
