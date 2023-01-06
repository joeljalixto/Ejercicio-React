import logo from './logo.svg';
import './App.css';
import AComponent from './Components/AComponent';
import ComponenteA from './Components/ComponenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio greeting.jsx*/}
        {/*<Greeting name = "Martin"></Greeting>*/}
        {/*<GreetingF name = "Martin"></GreetingF>*/}
        {/*Componente de listado de tareas>*/}
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
