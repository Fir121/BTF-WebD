import React from 'react';
import './AboutUs.css';
import Img from '../../components/grid.JPG';

const AboutUs = () => {
  return (
    <>
     <div className='about-us' style={{ backgroundImage: `url(${Img})` }}>
       <div>
        <h1>About BITS Tech Fest</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis venenatis blandit. Quisque et consectetur ligula. Cras imperdiet rutrum diam, lacinia sagittis tortor viverra quis. Mauris vitae molestie mi. Vestibulum id tincidunt libero. Suspendisse a tempus magna. Nullam mattis, leo non fermentum posuere, massa lacus lacinia turpis, non convallis odio sem a augue. Morbi sollicitudin massa et blandit imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id vehicula felis. Morbi vulputate risus vel semper accumsan. Morbi placerat accumsan rhoncus. Mauris ac suscipit ipsum, lacinia ultricies elit.</p>
      </div>
      <div>
        <p>Themes for BTF 2024</p>
      </div>
     </div>
    </>
  )
}

export default AboutUs
