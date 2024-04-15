import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/event1.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus.'
              label='1'
              path='/homepage'
            />
            <CardItem
              src='images/event2.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus.'
              label='2'
              path='/'
            />
            <CardItem
              src='images/event3.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus.'
              label='3'
              path='/'
            />

            <CardItem
              src='images/event4.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus.'
              label='4'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/event5.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus.'
              label='5'
              path='/'
            />
            <CardItem
              src='images/event6.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus.'
              label='6'
              path='/'
            />
             <CardItem
              src='images/event7.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus.'
              label='7'
              path='/'
            />
             <CardItem
              src='images/event8.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus.'
              label='8'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;