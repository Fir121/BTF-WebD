import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import outgoing_link from "./outgoing_link.svg"

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <Link
              className='social-icon-link linktree'
              to='/'
              target='_blank'
              aria-label='LinkTree'
              onClick={() => window.open('https://linktr.ee/bitstechfest')}
              >
              {/* <i className="fa-solid fa-arrow-up-right-from-square"></i> */}
              <img style={{
                width: "2ex"
              }} src={outgoing_link}></img>
            </Link>
            <p style={{
              margin: 0
            }}>
              Created by
              <br/>
              Prasannah & Kushagra
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;