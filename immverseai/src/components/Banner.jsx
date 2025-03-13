"use client";
import React, { useContext } from 'react'
import Image from 'next/image';
import { AppContextDataFun } from '@/app/(context)/AppContext';


const Banner = ({obj}) => {
  const appData = AppContextDataFun();
  
  const [onPlay, setOnPlay] =obj;
  return (
    <section className='banner-section'>
        <span className='bs-head'>
          <span>{appData.banner.txt1}</span>
          <span>{appData.banner.txt2}</span>
        </span>
        
        <Image className="btn ban-img-btn bs-video" onClick={()=>setOnPlay(true)} width={200} height={200} src={appData.banner.img} alt='banner img' />
    </section>
  )
}

export default Banner