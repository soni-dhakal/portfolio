import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'> What I do</span>
      <span className='skillDesc'> I am a skilled and passionate web designer 
      and very enthusiast person to learn anytime and know 
      how to cooperate with team in team work.</span>
      <div className='skillBars'>
        <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
        <div className='skillBarText'>
          <h2>UI/UX Design</h2>
          <p>This is a demo text, you can write your own content.</p>
        </div>
      </div>
      <div className='skillBars'>
        <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
        <div className='skillBarText'>
          <h2>Web Design</h2>
          <p>This is a demo text, you can write your own content.</p>
        </div>
      </div>
      <div className='skillBars'>
        <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
        <div className='skillBarText'>
          <h2>App Design</h2>
          <p>This is a demo text, you can write your content.</p>
        </div>
      </div>
    </section>
  )
}

export default Skills;
