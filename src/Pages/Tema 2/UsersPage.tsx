const UsersPage = () => (
  <section style={{ maxWidth: 960,  margin: '0 50svh 50svh 50svh', fontFamily:' Arial, Helvetica, sans-serif'}}>
    <h1 style={{ marginBottom: '1.5rem', color: '#2980b9' }}>Gestión de Usuarios</h1>
    <p>Administra los usuarios aquí...</p>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#2980b9', color: 'white' }}>
          <th style={{ padding: '0.5rem' }}>ID</th>
          <th style={{ padding: '0.5rem' }}>Nombre</th>
          <th style={{ padding: '0.5rem' }}>Email</th>
          <th style={{ padding: '0.5rem' }}>Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>1</td>
          <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>Juan Pérez</td>
          <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>juan@example.com</td>
          <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>Administrador</td>
        </tr>
        {/* Más filas aquí */}
      </tbody>
    </table>
  </section>
);

export default UsersPage;
