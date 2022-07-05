import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Breeds from './pages/Breeds';
import Gallery from './pages/Gallery';
import Voting from './pages/Voting';
import FavouritesPage from './pages/FavouritesPage';
import LikesPage from './pages/LikesPage';
import DislikesPage from './pages/DislikesPage';

export const useRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='breeds' element={<Breeds />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='voting' element={<Voting />} />
      <Route path='favourites' element={<FavouritesPage />} />
      <Route path='likes' element={<LikesPage />} />
      <Route path='dislikes' element={<DislikesPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};
