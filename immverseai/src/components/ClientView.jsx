"use client";
import { AppContextDataFun } from '@/app/(context)/AppContext'
import Image from 'next/image';
import React from 'react'

const ClientView = () => {
    const appData = AppContextDataFun();

  return (
    <section className='client-view-section'>
        <h1>{appData.testimonial.headTxt}</h1>
        <p className='cv-subhead'>{appData.testimonial.subTxt}</p>
        

        <div className='cv-scroller'>
        {appData.testimonial.tmUser.map((item, index)=>
            <div className='bor cv-scroller-elements' key={index}>
                <p><span className='cv-span-title'>{item.title}</span><span className='cv-span-ext'>{item.ext}</span></p>
                <p className='cv-span-msg'>{item.subTxt}</p>
                <div className=' cv-profile-block'>
                    <Image width={40} height={40} src={item.img} alt='card view image' />
                    <div className='cd-info-block'>
                        <span className='cv-info-name'>{item.name}</span>
                        <span className='cv-info-username'>{item.username}</span>
                    </div>
                </div>
            </div>)}
        </div>
    </section>
  )
}

export default ClientView