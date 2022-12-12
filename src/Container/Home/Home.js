import React from 'react';
import AppFeatures from '../../components/App-Features/AppFeatures';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Merchant from '../../components/Merchant/Merchant';
import Newsletter from '../../components/NewsLetter/Newsletter';
import Partners from '../../components/Partners/Partners';
// import './Container.css';

function Home() {
  return (
    <div>
      <Header fontAwesome />
      <HeroSection />
      <HowItWorks />
      <AppFeatures />
      <Newsletter />
      <Merchant />
      <Partners />
    </div>
  );
}

export default Home;
