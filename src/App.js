import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import Login from "./components/auth/Login";
import Team from './routes/Team';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './providers/PrivateRoute';
function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  console.log(token)
  return (
    <>
      <div className="App">
      <Routes>
        <PrivateRoute token={token}/>
      </Routes>
    </div>
    </>
    
  );
}

export default App;
