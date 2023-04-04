import React, { Component } from 'react';
import MainDonation from './components/MainDonation/MainDonation';
import DonatSection from './components/DonatSection/DonatSection';
import HowWeUse from './components/HowWeUse/HowWeUse';
import Donate from '../Head/Donate/Donate';

export class Donations extends Component {
  render() {
    return (
      <div className='component__main__donation'>
        <MainDonation />
        <DonatSection />
        <HowWeUse />
        <Donate />
      </div>
      
    )
  }
}

export default Donations