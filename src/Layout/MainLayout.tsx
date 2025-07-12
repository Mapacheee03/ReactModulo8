import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Sidebar';
import Breadcrumbs from '../Components/Breadcrumbs';

export default function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Breadcrumbs />
        <Outlet />
      </main>
      <footer style={{marginLeft:'100svh'}}>
        <p>© 2025 Mi Sitio</p>
      </footer>
    </>
  );
}
