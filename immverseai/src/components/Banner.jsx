import React, { useContext } from 'react'
import Image from 'next/image';


const Banner = () => {
  const appData = useContext(AppContext);
  return (
    <section className='banner'>
        <h1></h1>
        <Image src={appData.banner.img} />
    </section>
  )
}

export default Banner