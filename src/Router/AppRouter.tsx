import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Tema 1/Home';
import About from '../Pages/Tema 1/About';
import Projects from '../Pages/Tema 1/Projects';
import Blog from '../Pages/Tema 1/Blog';
import Contact from '../Pages/Tema 1/Contact';
import Archive from '../Pages/Tema 1/Archive';

import Gallery from '../Pages/Tema 2/Gallery';
import Favorites from '../Pages/Tema 2/Favorite';
import Albums from '../Pages/Tema 2/Albums';
import DashboardRoutes from './DashboardRoutes';

import EmployeeDetail from '../Pages/Tema 3/Tema 3.1/EmployeeDetail';
import EmployeeList from '../Pages/Tema 3/Tema 3.1/EmployeeList';
import CategoryPage from '../Pages/Tema 3/Tema 3.2/CategoryPage';
import ProductPage from '../Pages/Tema 3/Tema 3.2/ProductPage';
import Category from '../Pages/Tema 3/Tema 3.2/category';

import MainLayout from '../Layout/MainLayout';
import QuizStart from '../Pages/Tema4/Tema 4.1/QuizStart';
import QuizQuestion from '../Pages/Tema4/Tema 4.1/QuizQuestion';
import QuizResults from '../Pages/Tema4/Tema 4.1/QuizResults';
import MultiStepFormLayout from '../Pages/Tema4/Tema 4.2/MultiStepFormLayout';
import Step1Personal from '../Pages/Tema4/Tema 4.2/Step1Personal';
import Step2Contact from '../Pages/Tema4/Tema 4.2/Step2Contact';
import Step3Preferences from '../Pages/Tema4/Tema 4.2/Step3Preferences';
import Step4Confirm from '../Pages/Tema4/Tema 4.2/Step4Confirm';

export default function AppRouter() {
  return (
    <Routes>
      {/* Ruta principal con layout compartido */}
      <Route path="/" element={<MainLayout />}>
        {/* Tema 1 */}
        <Route path='Home' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="archive" element={<Archive />} />

        {/* Tema 2 */}
        <Route path="favorites" element={<Favorites />} />
        <Route path="albums" element={<Albums />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />

        {/* Tema 3 */}
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employee/:id" element={<EmployeeDetail />} />

        <Route path='category' element={<Category />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="category/:categoryId/product/:productId" element={<Category />} />

        {/* Tema 4 - Quiz */}
        <Route path="quiz" element={<QuizStart />} />
        <Route path="quiz/question/:number" element={<QuizQuestion />} />
        <Route path="quiz/results" element={<QuizResults />} />
        <Route path="multi-step-form" element={<MultiStepFormLayout />}>
          <Route path="step1" element={<Step1Personal />} />
          <Route path="step2" element={<Step2Contact />} />
          <Route path="step3" element={<Step3Preferences />} />
          <Route path="confirm" element={<Step4Confirm />} />
          <Route index element={<Step1Personal />} />
        </Route>
      </Route>
    </Routes>
  );
}
