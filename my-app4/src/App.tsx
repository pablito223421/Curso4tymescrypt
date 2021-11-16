import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactEmail from "./components/contacto-email";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Funcion  a contacto email.
        </p>
         <ContactEmail />
      </header>
    </div>
  );
}

export default App;
