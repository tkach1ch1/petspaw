import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Breeds from './pages/Breeds';
import Gallery from './pages/Gallery';
import Voting from './pages/Voting';

export const useRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='breeds' element={<Breeds />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='voting' element={<Voting />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};
