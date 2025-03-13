"use client";
import { AppContextDataFun } from '@/app/(context)/AppContext'
import Image from 'next/image';
import React from 'react'

const FeaturesCardSection = () => {

    const appData = AppContextDataFun();

  return (
    <section id='features' className='features-section'>
        {appData.services.map((item, index)=><div key={index} className='fs-card-block'>
            <Image className='fs-card-img '  key={index} src={item.img} alt='Card Image'/>
            <div className='fs-blur-card'>
                <span className='bc-title'>{item.title}</span>
                <span className='bc-desc'>{item.desc}</span>
            </div>
        </div>)}
    </section>
  )
}

export default FeaturesCardSection