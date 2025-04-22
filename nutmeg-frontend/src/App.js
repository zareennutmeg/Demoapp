import React from 'react';
import './App.css';

function App() {
  const message =
    "Hey!!, I am Coming to digital world in few days, NutMeg Software Solutions team working to bring me into digital world";

  return (
    <div className="app-wrapper">
      <header className="header">
        <h1>NutMeg Digital World</h1>
      </header>

      <main className="message-box">
        <p>{message}</p>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} NutMeg Software Solutions
      </footer>
    </div>
  );
}

export default App;
