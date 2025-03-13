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
        <div className='cv-card-div'>
        {appData.testimonial.tmUser.map((item, index)=>
            <div className='cv-card' key={index}>
                <p><span className='cvSpantitle'>{item.title}</span><span className='cvSpanExt'>{item.ext}</span></p>
                <p className='cvsubTxt'>{item.subTxt}</p>
                <div className='cvProBlock'>
                    <Image width={40} height={40} src={item.img} alt='card view image' />
                    <div className='innerCVInfo'>
                        <span className='cvInfoName'>{item.name}</span>
                        <span className='cvInfoUsername'>{item.username}</span>
                    </div>
                </div>
            </div>)}
        </div>
    </section>
  )
}

export default ClientView