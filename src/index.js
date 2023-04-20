import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Login from './components/auth/Login';
import PrivateRoute from './providers/PrivateRoute';
import DatosJugadores from './components/DatosJugadores';
import DatosEquipo from './components/DatosEquipo';
const root = ReactDOM.createRoot(document.getElementById('root'));
let data = "";
console.log()
if(localStorage.getItem('token') == null){
  // window.location.replace('/login');
}else{
  data = jwtDecode(localStorage.getItem('token'));
}




root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Login/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
        {data == null? <Route path='/login' element={<Login/>}/>:<Route path='/team' element={<App data = {data}/>}/>}
        {data == null? <Route path='/login' element={<Login/>}/>:<Route path='/datos-equipo' element={<DatosEquipo data = {data}/>}/>}
        {data == null? <Route path='/login' element={<Login/>}/>:<Route path='/datos-jugadores' element={<DatosJugadores data = {data}/>}/>}
      </Route>
    </Routes>
  </BrowserRouter>
);
