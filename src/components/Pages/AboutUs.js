import React from 'react';
import './AboutUs.css';
import Img from '../../components/img-19.webp';

const AboutUs = () => {
  return (
    <>
     <div className='about-us' style={{ backgroundImage: `url(${Img})` }}>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis venenatis blandit. Quisque et consectetur ligula. Cras imperdiet rutrum diam, lacinia sagittis tortor viverra quis. Mauris vitae molestie mi. Vestibulum id tincidunt libero. Suspendisse a tempus magna. Nullam mattis, leo non fermentum posuere, massa lacus lacinia turpis, non convallis odio sem a augue. Morbi sollicitudin massa et blandit imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id vehicula felis. Morbi vulputate risus vel semper accumsan. Morbi placerat accumsan rhoncus. Mauris ac suscipit ipsum, lacinia ultricies elit.</p>
     </div>
    </>
  )
}

export default AboutUs
