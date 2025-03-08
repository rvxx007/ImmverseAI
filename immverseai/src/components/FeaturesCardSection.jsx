"use client";
import { AppContextDataFun } from '@/app/context/AppContext'
import Image from 'next/image';
import React from 'react'

const FeaturesCardSection = () => {

    const appData = AppContextDataFun();

  return (
    <section id='features' className='cardSection'>
        {appData.services.map((item, index)=><div key={index} className='cardBlock'>

            <Image className='imgCard' key={index} src={item.img} />
            <div className='blurCard'>
                <span className='bc-title'>{item.title}</span>
                <span className='bc-desc'>{item.desc}</span>
            </div>
        </div>)}
    </section>
  )
}

export default FeaturesCardSection