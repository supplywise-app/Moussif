import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Artists from './pages/Artists';
import Contact from './pages/Contact';

import Success from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="artists" element={<Artists />} />
          <Route path="contact" element={<Contact />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
