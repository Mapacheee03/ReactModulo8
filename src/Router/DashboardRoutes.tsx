import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import DashboardHome from '../Pages/Tema 2/DashboardHome';
import UsersPage from '../Pages/Tema 2/UsersPage';
import ProductsPage from '../Pages/Tema 2/ProductsPage';
import SettingsPage from '../Pages/Tema 2/SettingsPage';
import NotFoundDashboard from '../Pages/Tema 2/NotFoundDashboard';

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundDashboard />} />
      </Route>
    </Routes>
  );
}

export default DashboardRoutes;
