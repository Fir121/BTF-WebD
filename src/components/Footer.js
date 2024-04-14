import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
              onClick={() => window.open('https://www.instagram.com/bitstechfest/')}
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
              onClick={() => window.open('https://www.youtube.com/channel/UClKXaO8gB10OObAkoEkyNDQ')}
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
              onClick={() => window.open('https://twitter.com/bitspilanidubai')}
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              onClick={() => window.open('https://www.linkedin.com/school/birla-institute-of-technology-and-science-pilani-dubai/')}
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link to='/' className='nav-links'>
                 bitstechfest@dubai.bits-pilani.ac.in
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;