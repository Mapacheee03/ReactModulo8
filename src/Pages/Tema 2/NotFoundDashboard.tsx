import { Link } from 'react-router-dom';

const NotFoundDashboard = () => (
  <section style={{ maxWidth: 960, margin: '0 50svh 50svh 50svh', fontFamily:' Arial, Helvetica, sans-serif' }}>
    <h1 style={{ marginBottom: '1.5rem', color: '#e74c3c' }}>404 - Página no encontrada</h1>
    <p>La página que buscas no existe dentro del dashboard.</p>
    <Link to="/dashboard" style={{ color: '#2980b9' }}>Volver al inicio del Dashboard</Link>
  </section>
);

export default NotFoundDashboard;
