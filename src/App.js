import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Team from './components/Team';
import DatosEquipo from './components/DatosEquipo';
function App(props) {

  return (    
    <>
      <div className="App">
          <DatosEquipo data={props.data}/>
      </div>
    </>
    
  );
}

export default App;
