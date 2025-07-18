import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
