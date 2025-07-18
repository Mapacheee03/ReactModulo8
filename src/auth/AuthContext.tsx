import { createContext, useContext, useState, type ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type Role = 'guest' | 'user' | 'admin';

interface User {
  email: string;
  role: Role;
}

const usersDb: Record<string, { password: string; role: Role }> = {
  'admin@test.com': { password: '123', role: 'admin' },
  'user@test.com': { password: '1234', role: 'user' },
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const login = (email: string, password: string): boolean => {
    const found = usersDb[email];
    if (found && found.password === password) {
      const loggedUser = { email, role: found.role };
      setUser(loggedUser);

      const id = window.setTimeout(() => {
        setUser(null);
        navigate('/login?expired=true');
      }, 60000);
      setTimeoutId(id);

      const from = (location.state as any)?.from?.pathname || (found.role === 'admin' ? '/admin' : '/dashboard');
      navigate(from, { replace: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    if (timeoutId !== null) clearTimeout(timeoutId);
    navigate('/');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
