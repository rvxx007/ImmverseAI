"use client";

import Image from 'next/image'
import hero1 from "../../public/hero1.svg";
import { AppContextDataFun } from '@/app/context/AppContext';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets:["latin"]
});


const Hero = () => {


  const appData = AppContextDataFun();

  return (
    <section id='company' className='hero '>
        <div class="parent1">
            <div class="div1">
              <h1 className={`headTxt ${orbitron.variable}`}>{appData.hero.headTxt}</h1>
              <span className='subTxt'>{appData.hero.subTxt}</span>
              <div className='blockBtn'>
                <button className='su-btn'>Get it Now</button>
                <button className='su-nob-btn'>Explore Device</button>
              </div>
              <div className='endBlock'>
                <span>{appData.hero.ui.map((item, index)=><span key={index}className='imrow'><Image  className='im' width={40} height={40} src={item} /></span>)}</span> <span className='wdot'> </span> <span className='eTxt'>{appData.hero.eTxt}</span>
              </div>
            </div>
            <Image className='heroImg' src={hero1} width={750} height={780} />
        </div>
        <div className="parent2">
        <div class="div3">
        <Image className='hp2' src={appData.hero.hp.hp2} width={430} height={430} />
        <Image className='hp1' src={appData.hero.hp.hp1} width={430} height={430} />
        </div>
        <div class="div4">
              <h1 className={`headTxt1${orbitron.variable} `}>{appData.hero.headTxt1}</h1>
              <span className='subTxt1'>{appData.hero.subTxt1}</span>
              <div className='blockBtn'>
                <button className='su-btn'>Get it Now</button>
              </div>
        </div>
        </div>
    </section>
  )
}

export default Hero