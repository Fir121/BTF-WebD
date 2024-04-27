import React from 'react';
import './AboutUs.css';
import Img from '../images/3.jpg';
import icon1 from '../themes-icons/hacker.png';
import icon2 from '../themes-icons/earth.png';
import icon3 from '../themes-icons/AI.png';

const AboutUs = () => {
  return (
    <>
      <div className='about-us' style={{ backgroundImage: `url(${Img})` }}>
        <h1>About BITS Tech Fest</h1>
        <p>BITS Tech Fest is BITS Pilani Dubai's exclusive annual tech fest with students from all over the UAE.</p> <br />
        <p>Technofest is for the next generation of aspiring school students to explore the world of technology.</p> <br />
        <p>Enginuity is for university students to showcase their skills.</p> <br />
        <br />
        <p>Save the date! May 1-2, 2024</p> <br />
        <h2>Themes for BTF 2024</h2>
        <div className='themes-container'>

          <figure className='theme'>
            <img src={icon1} />
            <p> Cyber Resilience – Beyond Cyber Security  </p>
          </figure>
          <figure className='theme'>
            <img src={icon2} />
            <p> Sustainable Practices for Energy and Climate Change </p>
          </figure>
          <figure className='theme'>
            <img src={icon3} />
            <p> Artificial intelligence as a Driving Force for the Economy & Society </p>
          </figure>
        </div>

      </div>

    </>
  )
}

export default AboutUs
