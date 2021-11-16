import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fornite from "./pc/fornite"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Funcion con la carpeta PC y el archivo Fornite.
        </p>
         <Fornite />
      </header>
    </div>
  );
}

export default App;
