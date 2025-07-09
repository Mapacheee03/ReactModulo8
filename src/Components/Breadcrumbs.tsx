import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <div className="breadcrumbs">
      <span>Home</span>
      {paths.map((segment, index) => (
        <span key={index}> / {segment}</span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
