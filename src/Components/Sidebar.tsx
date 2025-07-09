import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const tema1Links = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Archive', to: '/archive' },
];

const tema2Links = [
  { label: 'Galería', to: '/gallery', end: true },
  { label: 'Favoritas', to: '/favorites' },
  { label: 'Álbumes', to: '/albums' },
];

const Sidebar = () => {
  const [isTema1Open, setIsTema1Open] = useState(false);
  const [isTema2Open, setIsTema2Open] = useState(false);

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">Ejercicios</div>

      <button
        className="submenu-toggle"
        onClick={() => setIsTema1Open((prev) => !prev)}
        aria-expanded={isTema1Open}
      >
        Tema 1: Navegación
      </button>
      {isTema1Open && (
        <ul className="submenu">
          {tema1Links.map(({ label, to, end }) => (
            <li key={label}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      <button
        className="submenu-toggle"
        onClick={() => setIsTema2Open((prev) => !prev)}
        aria-expanded={isTema2Open}
      >
        Tema 2: Galería de Fotos
      </button>
      {isTema2Open && (
        <ul className="submenu">
          {tema2Links.map(({ label, to, end }) => (
            <li key={label}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Sidebar;
