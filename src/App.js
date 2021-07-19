import logo from './logo.svg';
import './App.css';
import {HWButton} from './components/HWButton.js'
import {Temperature} from "./components/temperature/temperature";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Temperature/>
      </header>
    </div>
  );
}

export default App;
