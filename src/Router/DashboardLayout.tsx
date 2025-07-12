import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
