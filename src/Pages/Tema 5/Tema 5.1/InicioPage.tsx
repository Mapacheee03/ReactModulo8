import { Link } from 'react-router-dom';

const InicioPage = () => {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <Link to="/login">Iniciar Sesión</Link>
    </div>
  );
};

export default InicioPage;
