"use client";
import React, { useContext } from 'react'
import Image from 'next/image';
import { AppContextDataFun } from '@/app/context/AppContext';


const Banner = () => {
  const appData = AppContextDataFun();
  return (
    <section className='banner'>
        <span className='banHead'>
          <span>{appData.banner.txt1}</span>
          <span>{appData.banner.txt2}</span>
        </span>
        <Image width={200} height={200} src={appData.banner.img} />
    </section>
  )
}

export default Banner