"use client";

import Image from 'next/image'
import hero1 from "../../public/hero1.svg";
import { AppContextDataFun } from '@/app/(context)/AppContext';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets:["latin"]
});


const Hero = () => {


  const appData = AppContextDataFun();

  return (
    <section id='company' className='hero-section '>
        <div className="hero-parent1">
            <div className="hero-parent1-div1">
              <h1 className={`hero-headTxt ${orbitron.variable}`}>{appData.hero.headTxt}</h1>
              <span className='hero-subTxt'>{appData.hero.subTxt}</span>
              <div className='hero-btn-div'>
                <button className='signup-btn'>Get it Now</button>
                <button className='signup-btn1'>Explore Device</button>
              </div>
              <div className='hero-users-div'>
                <span>{appData.hero.ui.map((item, index)=><span key={index}className='imrow'><Image  className='users-img' width={40} height={40} src={item} alt='mini profiles' /></span>)}</span> <span className='white-dot'> </span> <span className='eTxt'>{appData.hero.eTxt}</span>
              </div>
            </div>
            <Image className='hero-cvr-img' src={hero1} width={750} height={780} alt='Cinematic Virtual Reality' />
        </div>
        <div className="hero-parent2">
        <div className="hero-parent2-div1 ">
        <Image className='hp2' src={appData.hero.hp.hp2} width={430} height={430} alt='Girl with VR'/>
        <Image className='hp1' src={appData.hero.hp.hp1} width={430} height={430} alt="Boy with VR"/>
        </div>
        <div className="div4">
              <h1 className={`headTxt1${orbitron.variable} `}>{appData.hero.headTxt1}</h1>
              <span className='subTxt1'>{appData.hero.subTxt1}</span>
              <div className='blockBtn'>
                <button className='signup-btn'>Get it Now</button>
              </div>
        </div>
        </div>
    </section>
  )
}

export default Hero