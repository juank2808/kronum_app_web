import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import PrivateRoute from './providers/PrivateRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Login/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path='/team' element={<App/>}/>
        <Route path='/datos-equipo' element={<App/>}/>
        <Route path='/datos-jugadores' element={<App/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
