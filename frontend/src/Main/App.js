import React from 'react'
import Logo from '../Components/Logo'
import Nav from '../Components/Nav'
//import Home from '../Components/Home/Home'
import Footer from '../Components/Footer'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


function App(props) {
  return (
    <HashRouter>
      <div className="app">
        <Logo/>
        <Nav/>
        <Routes/>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
