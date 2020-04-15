import React from 'react';
import Logo from '../Components/Logo'
import Nav from '../Components/Nav'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import './App.css';

function App() {
  return (
    <div className="app">
      <Logo/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
