import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        )}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
