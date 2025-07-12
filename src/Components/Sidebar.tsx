import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const temas = [
  {
    title: 'Tema 1: Navegación',
    key: 'tema1',
    links: [
      { label: 'Home', to: '/Home', end: true },
      { label: 'About', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'Archive', to: '/archive' },
    ],
  },
  {
    title: 'Tema 2: Galería de Fotos + Dashboard',
    key: 'tema2',
    links: [
      { label: 'Galería', to: '/gallery', end: true },
      { label: 'Favoritas', to: '/favorites' },
      { label: 'Álbumes', to: '/albums' },
      { label: 'DASHBOARD_SUBMENU' }, // marcador especial para el submenú
    ],
  },
  {
    title: 'Tema 3: Rutas Parametrizadas',
    key: 'tema3',
    links: [
      { label: 'Directorio ', to: '/employees', end: true },
      { label: 'Tienda Online', to: '/combinedview', end: true },

    ],
  },
];

const dashboardLinks = [
  { label: 'Dashboard - Inicio', to: '/dashboard' },
  { label: 'Dashboard - Usuarios', to: '/dashboard/users' },
  { label: 'Dashboard - Productos', to: '/dashboard/products' },
  { label: 'Dashboard - Configuración', to: '/dashboard/settings' },
];

const Sidebar = () => {
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({});
  const [openDashboard, setOpenDashboard] = useState(false);

  const toggleTema = (key: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleDashboard = () => {
    setOpenDashboard((prev) => !prev);
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">Ejercicios</div>

      {temas.map(({ title, key, links }) => {
        const isOpen = !!openStates[key];
        return (
          <div key={key} className="tema-section">
            <button
              className={`submenu-toggle ${isOpen ? 'open' : ''}`}
              onClick={() => toggleTema(key)}
              aria-expanded={isOpen}
            >
              {title} <span className="arrow">{isOpen}</span>
            </button>
            {isOpen && (
              <ul className="submenu">
                {links.map(({ label, to, end }) => {
                  if (label === 'DASHBOARD_SUBMENU') {
                    return (
                      <li key="dashboard-submenu">
                        <button
                          className="submenu-toggle nested"
                          onClick={toggleDashboard}
                          aria-expanded={openDashboard}
                        >
                          Dashboard
                        </button>
                        {openDashboard && (
                          <ul className="submenu nested-submenu">
                            {dashboardLinks.map(({ label, to }) => (
                              <li key={label}>
                                <NavLink
                                  to={to}
                                  className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                  {label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={label}>
                      <NavLink
                        to={to!}
                        end={end}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                      >
                        {label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Sidebar;
