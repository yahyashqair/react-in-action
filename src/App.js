import logo from './logo.svg';
import './App.css';
import {HWButton} from './components/HWButton.js'
import {Temperature} from "./components/temperature/temperature";
import React from "react";
import Contexts from "./Contexts";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Contexts.Theme.Provider value="dark">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Temperature/>
                </Contexts.Theme.Provider>
            </header>
        </div>
    );
}

export default App;
