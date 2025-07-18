import { useAuth } from '../../../auth/AuthContext';

const ProfilePage = () => {
  const { logout } = useAuth();

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f4f4f4'
    }}>
      <h1>Bienvenido, admin 👋</h1>
      <button
        onClick={logout}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#4e54c8',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default ProfilePage;
