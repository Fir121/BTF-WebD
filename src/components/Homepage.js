import React from 'react';
import '../App.css';
import './Homepage.css';
import Empower from '../components/img-6.jpg';
import Engage from '../components/img-7.jpg';
import Excel from '../components/img-8.jpg';
import AboutUs from '../components/Pages/AboutUs';
import BTFRegistration from '../components/Pages/BTFRegistration';
import Title from './images/Title.png';


function Homepage() {
  return (
    <>
     <div className='home'>
      <div className='BTF-container'>
       <div className='title'><img src={Title} /></div>
        <div class="text-container">
         <div class="container-content">
          <div class="content__container">
            <ul class="content__container__list">
              <li class="content__container__list__item">Empower</li>
              <li class="content__container__list__item">Engage</li>
              <li class="content__container__list__item">Excel</li>
            </ul>
          </div>
         </div>  
        </div>
       <p> The UAE's largest Tech Festival </p> <br/>
       <p> May 1 and 2, 2024 </p> <br/>
       <button class="btn" type="button">
         <a href="#reg-form">SIGN UP!</a>
          <div id="container-stars">
           <div id="stars"></div>
           </div>

           <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
           </div>
       </button>
      </div>
      
      <div id="reg-form">
       <BTFRegistration />
      </div>
      <div id='about-us'>
       <AboutUs/>
      </div>
     </div>
    </>
  );
}




export default Homepage;