import React from 'react';
import Profile from '../Pages/Profile';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ path }) {
  const token = window.localStorage.getItem('token');
  return token ? <Profile /> : <Navigate to="/" />;
}
