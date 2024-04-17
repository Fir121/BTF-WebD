import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Technofest from './components/Pages/Technofest';
import Enginuity from './components/Pages/Enginuity';
import Footer from './components/Footer.js';
import AboutUs from './components/Pages/AboutUs';
import { HashLink } from 'react-router-hash-link';
import Cards from './components/Cards.js';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/*<HashLink smooth to="/reg#form"/>*/}
        <Routes>
        <Route path='/' exact element={ <Homepage />}></Route>
        <Route path='/technofest' exact element={ <Technofest />}></Route>
        <Route path="/enginuity" element={<Enginuity />} />
        <Route path="/about-us" element={<AboutUs />} />
        </Routes> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
