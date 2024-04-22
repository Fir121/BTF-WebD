import React from 'react';
import './EventCards.css';

function EventCards(props) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <figure data-category={props.label}>
            <img
              className='event-card-img'
              alt='Event'
              src={props.src}
            />
            <p> {props.eventName} </p>
          </figure>
          
        </div>
        <div className="card-back">
          <div className='event-info'>
            <h5 className='event-card-text'>{props.text}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCards
