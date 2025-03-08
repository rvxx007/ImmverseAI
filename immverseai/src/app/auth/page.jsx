import React from 'react'
import "./index.css";
import Image from 'next/image';
import poster from "../../../public/poster.gif"
import apple from "../../../public/apple.svg";
import google from "../../../public/google.svg";



const Authentication = () => {
  return (
    <main className='authPage container'>
        <section className='posterSection'>
          <Image className='posterImg' width={100} src={poster}/>
          <h1>Welcome To BookApp</h1>
        </section>
        <section className='btnSec'>
          <button className='signUpBtn'><span>Connect with Apple</span> <Image src={apple}/></button>
          <button className='signUpBtn'><span>Connect with Google</span><Image src={google}/></button>
        </section>
    </main>
  )
}

export default Authentication