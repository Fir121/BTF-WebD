import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Homepage.css';
import Empower from '../components/img-6.jpg';
import Engage from '../components/img-7.jpg';
import Excel from '../components/img-8.jpg';
import Cards from '../components/Cards';
import AboutUs from '../components/Pages/AboutUs';
import Technofest from '../components/Pages/Technofest';
import { HashLink } from 'react-router-hash-link';


function Homepage() {
  return (
    <>
     <div className='home'>
      <div className='BTF-container'>
       <h1> Welcome to BITS Tech Fest 2024! </h1>
       <p> The UAE's largest Tech Festival </p>
       <a href='#reg-form'>
         <Button>Register Now!</Button>
       </a>
      </div>
      <div className='home-container'>
       <div className='left' style={{ backgroundImage: `url(${Empower})` }}>
        <h1> <br/>E<br/>M<br/>P<br/>O<br/>W<br/>E<br/>R </h1>
       </div>
       <div className='center' style={{ backgroundImage: `url(${Engage})` }}>
        <h1> E<br/>N<br/>G<br/>A<br/>G<br/>E <br/> </h1>
       </div>
       <div className='right' style={{ backgroundImage: `url(${Excel})` }}>
        <h1> <br/>E<br/>X<br/>C<br/>E<br/>L<br/> <br/> </h1>
       </div>
      </div>
      <div id='about-us'>
       <AboutUs/>
      </div>
      <div id='events'>
       <Cards />
      </div>
      <div id='reg-form'>
       <Technofest />
      </div>
     </div>
    </>
  );
}




export default Homepage;