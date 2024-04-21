import React from 'react';
import './AboutUs.css';
import Img from '../images/3.jpg';
import icon1 from '../themes-icons/hacker.png';
import icon2 from '../themes-icons/earth.png';
import icon3 from '../themes-icons/AI.png';

const AboutUs = () => {
  return (
    <>
     <div className='about-us' style={{ backgroundImage:  `url(${Img})` }}>
        <h1>About BITS Tech Fest</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis venenatis blandit. Quisque et consectetur ligula. Cras imperdiet rutrum diam, lacinia sagittis tortor viverra quis. Mauris vitae molestie mi. Vestibulum id tincidunt libero. Suspendisse a tempus magna. Nullam mattis, leo non fermentum posuere, massa lacus lacinia turpis, non convallis odio sem a augue. Morbi sollicitudin massa et blandit imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id vehicula felis. Morbi vulputate risus vel semper accumsan. Morbi placerat accumsan rhoncus. Mauris ac suscipit ipsum, lacinia ultricies elit.</p>
        <br/>
        <p>Save the date- May 1 and 2, 2024</p>
        <h2>Themes for BTF 2024</h2>
        <div className='themes-container'>
         <div className='theme' style={{ backgroundImage: `url(${icon1})` }}>
          
         </div>
         <p> Cyber Resilience – Beyond Cyber Security </p>
         <div className='theme' style={{ backgroundImage: `url(${icon2})` }}> 
          
         </div>
         <p>Sustainable Practices for Energy and Climate Change</p>
         <div className='theme' style={{ backgroundImage: `url(${icon3})` }}>
          
         </div>
         <p> Artificial intelligence as a Driving Force for the Economy & Society</p>
        </div>
        
     </div>
     
    </>
  )
}

export default AboutUs
