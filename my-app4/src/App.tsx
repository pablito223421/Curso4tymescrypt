import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./components/contacto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Funcion  a función de contacto.
        </p>
         <Contact  /> 
      </header>
    </div>
  );
}

export default App;
