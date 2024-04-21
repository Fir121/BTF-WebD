import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import BTFRegistration from './components/Pages/BTFRegistration.js';
import Footer from './components/Footer.js';
import AboutUs from './components/Pages/AboutUs';


function App() {
   return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Homepage />}></Route>
        <Route path='/home' exact element={ <Homepage />}></Route>
        <Route path="/reg-form" exact element={ <BTFRegistration />}></Route>
        <Route path="/about-us" element={<AboutUs />} />
        </Routes> 
        <Footer />
      </Router>
    </>
  );
 }

export default App;

