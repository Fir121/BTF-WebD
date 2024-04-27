import React from 'react';
import '../App.css';
import './Homepage.css';
//import AboutUs from '../components/Pages/AboutUs';
import BTFRegistration from '../components/Pages/BTFRegistration';
import Title from './images/Title.png';


function Homepage() {
  return (
    <>
     <div className='home'>
      <div className='BTF-container'>
       <div className='title'><img src={Title} alt='homepage'/></div>
        <div className="text-container">
         <div className="container-content">
          <div className="content__container">
            <ul className="content__container__list">
              <li className="content__container__list__item">Empower</li>
              <li className="content__container__list__item">Engage</li>
              <li className="content__container__list__item">Excel</li>
            </ul>
          </div>
         </div>  
        </div>
       {/* <p> The UAE's largest Technology Festival</p> <br/> */}
       <p>1-2, May 2024</p> <br/>
       <button className="btn" type="button">
          <a href="#reg-form">Register</a>
          <div id="container-stars">
           <div id="stars"></div>
           </div>

           <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
           </div>
       </button>
      </div>
      
      <BTFRegistration />
      {/* <div id='about-us'>
       <AboutUs/>
      </div> */}
     </div>
    </>
  );
}




export default Homepage;