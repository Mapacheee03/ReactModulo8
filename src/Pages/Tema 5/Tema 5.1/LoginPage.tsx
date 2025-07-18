import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../auth/AuthContext';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(user, pass);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          className={styles.input}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className={styles.input}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button className={styles.button} type="submit">Entrar</button>
        <button
          type="button"
          className={styles.backButton}
          onClick={handleBack}
        >
          ← Volver al inicio
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
