import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Homepage.css';
import Empower from '../components/img-6.jpg';
import Engage from '../components/img-7.jpg';
import Excel from '../components/img-8.jpg';
import Logo from '../components/logo2 copy.jpg';


function Homepage() {
  return (
    <>
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
    </>
  );
}




export default Homepage;