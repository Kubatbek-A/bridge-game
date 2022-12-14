import React from 'react';
import { Navigate } from 'react-router-dom';

import { isLoggedIn } from '../helpers/setLocalStorage';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
