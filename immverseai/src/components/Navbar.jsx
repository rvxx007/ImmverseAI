import React from 'react'
import Image from 'next/image'
import logo from "../../public/ImmverseAI.svg";

import hmbMenu from "../../public/hmgMenu.svg"
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav>
            <div><Image className='logo' width={150} height={30} style={{width:"150px",height:"30px"}} src={logo}  /></div>
            <div className='menuBlock'>
              <Image  className='hbmenu'  width={50} height={50} src={hmbMenu} />
                <ul className=' hrmenu hmtext'>
                    <li ><Link className='liLink' href={"/"}>Home</Link></li>
                    <li ><Link className='liLink' href={"#company"}>Company</Link></li>
                    <li ><Link className='liLink' href={"#features"}>Features</Link></li>
                    <li><Link href={"/auth"} className='suLink'>Sign Up</Link></li>
                </ul>
            </div>
        </nav>
        
    </header>
  )
}

export default Navbar