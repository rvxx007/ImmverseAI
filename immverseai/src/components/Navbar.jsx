import React from 'react'
import Image from 'next/image'
import logo from "../../public/ImmverseAI.svg";

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav>
            <div><Image width={150} height={30} style={{width:"150px",height:"30px"}} src={logo}  /></div>
            <div>
                <ul className='hrmenu hmtext'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Features</li>
                    <li><button className='su-btn'>Sign Up</button></li>
                </ul>
            </div>
        </nav>
        
    </header>
  )
}

export default Navbar