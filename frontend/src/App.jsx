import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import './App.css'

import Nav from './components/navigation/Nav'
import Logo from './components/logo/Logo'
import Footer from './components/template/Footer'

import Routes from './routes/Routes'

export default () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo/>
        <Nav/>
        <Routes/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
