import React from 'react';
import image from './assets/Group 30906.svg';
import './Community.css';

function Community() {
  return (
    <div className="communityContainer">
      <div className="imageContainer">
        <img src={image} alt="image" />
      </div>

      <div className="communityText">
        <h1>Become a Community Delivery Partner(CDP)</h1>
        <ul>
          <li>
            Our How about making up to ₦5,000 daily working for yourself and supporting the Local
            Businesses in your area where you live, work and play?
          </li>
          <li>
            Do you desire to be a Delivery Partner or own, organize or coordinate delivery fleets
            within your community, riding on the platform of Hicolumn e-commerce?
          </li>
          <li>
            Do you have a good relationship with Stores, Mosque, Church or Social Group(s) in your
            Community or have the capacity to initiate a good cordial relationship with the people
            in your Community and Market places?
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Community;
