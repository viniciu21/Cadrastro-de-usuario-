import React from 'react'
import Logo from '../Components/Logo'
import Nav from '../Components/Nav'
import Main from '../Components/Main'
import Footer from '../Components/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


function App(props) {
  return (
    <div className="app">
      <Logo/>
      <Nav/>
      <Main icon = "home" title = "inicio" subtitle = "Cadrasto de usuário"/>
      <Footer/>
    </div>
  );
}

export default App;
