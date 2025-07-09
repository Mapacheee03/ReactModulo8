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

import MainLayout from '../Layout/MainLayout';

export default function AppRouter() {
  return (
    <Routes>
      {/* Ruta principal con layout compartido */}
      <Route path="/" element={<MainLayout />}>
        {/* Tema 1 */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="archive" element={<Archive />} />

        {/* Tema 2 */}
        <Route path="favorites" element={<Favorites />} />
        <Route path="albums" element={<Albums />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}
