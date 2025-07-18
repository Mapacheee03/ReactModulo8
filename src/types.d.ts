type Role = 'guest' | 'user' | 'admin';

interface User {
  email: string;
  role: Role;
}