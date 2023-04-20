import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import Team from './components/Team';
function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <>
      <div className="App">
        <Team token = {token}/>
      </div>
    </>
    
  );
}

export default App;
