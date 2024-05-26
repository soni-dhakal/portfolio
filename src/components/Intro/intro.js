import React from 'react';
import './intro.css'; 
import bg from '../../assets/icon.jpg';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introtext'>I'm <span className='introName'>Soni
          </span><br/>Website Designer</span>
          <p className='introPara'>I am a learner web designer with the continuous<br/>
          learning enthusiast for language learning.</p>
          <Link><button className='btn'><img src={btnImg} alt="Hire" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg' /> 
    </section>
  );
}

export default Intro;
