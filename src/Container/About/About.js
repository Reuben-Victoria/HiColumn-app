import React from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/NewsLetter/Newsletter';
import Partners from '../../components/Partners/Partners';
import Team from '../../components/Team/Team';

const About = () => {
  return (
    <div>
      <Header blueHeader />
      <AboutUs />
      <Team />
      <Partners />
      <Newsletter />
    </div>
  );
};

export default About;
