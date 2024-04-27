import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
//import Navbar from './components/Navbar';
import BTFRegistration from './components/Pages/BTFRegistration.js';
import Footer from './components/Footer.js';
//import AboutUs from './components/Pages/AboutUs';

function App() {
  return (
    <>
      {/*<Navbar /> */}
      <div id="home">
        <Homepage />
      </div>
      <div id="reg-form">
        <BTFRegistration />
      </div>
      {/*<div id="about-us">
        <AboutUs />
      </div> */}
      <Footer />
    </>
  );
}

export default App;