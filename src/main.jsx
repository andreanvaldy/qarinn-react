import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NewPage from './pages/NewPage'; // Impor halaman baru

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />         {/* Halaman utama */}
        <Route path="/newpage" element={<NewPage />} /> {/* Halaman baru */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

