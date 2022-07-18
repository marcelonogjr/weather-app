import React from 'react';
import AboutGeneral from '../components/AboutGeneral';

const About: React.FC = () => {
  return (
    <div className='main-content'>
      <p>
        This is a demo project currently under development. I will leave the
        link to the GitHub repository once I'm done!
      </p>
      <img
        className='portrait'
        src={require('../Images/logo512.png')}
        alt='React'
      />
      <p>Now with NodeJs/React!</p>
      <AboutGeneral />
    </div>
  );
};

export default About;
