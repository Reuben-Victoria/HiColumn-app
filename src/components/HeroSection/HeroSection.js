import React from 'react';
import Button from '../StoreLinks/Button';
import apple from './assets/Group 1540.svg';
import google from './assets/Group.svg';
import image from './assets/Group 2742.svg';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className="heroContainer" id="home">
      <div>
        <div className="heroLeft">
          <h1>Buying & Selling Made Easy</h1>
          <p>Join hundreds of users who trust Hicolumn E-commerce to shop online.</p>
        </div>
        <div className="downloadButtons">
          <Button
            src={google}
            text1="Download on"
            text2="Google Play"
            link="https://play.google.com/"
          />
          <Button
            src={apple}
            text1="Download on the"
            text2="App Store"
            link="https://www.apple.com"
          />
        </div>
      </div>
      <div className="header-image">
        <img src={image} alt="header-section-image" />
      </div>
    </div>
  );
}

export default HeroSection;
