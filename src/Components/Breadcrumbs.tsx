import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Breadcrumbs = () => {
  const location = useLocation();
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    setPaths(segments);
  }, [location.pathname]);

  const buildPath = (index: number) => {
    return '/' + paths.slice(0, index + 1).join('/');
  };

  return (
    <nav 
      aria-label="breadcrumb" 
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        marginBottom: '1rem',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '14px',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft:'168svh' ,
        gap: '0.3rem',
      }}
    >
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none'}}>
        Inicio
      </Link>
      {paths.map((segment, index) => (
        <span key={index} style={{ whiteSpace: 'nowrap' }}>
          <span style={{ margin: '0 0.3rem' }}>/</span>
          <Link to={buildPath(index)} style={{ color: '#007bff', textDecoration: 'none' }}>
            {decodeURIComponent(segment)}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
