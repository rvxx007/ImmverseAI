"use client"
import React, { useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import close from "../../public/close.svg"
import UserProfile from './UserProfile';
import userImg from "../../public/userimg.svg";


const SideNavMenu = ({obj,fbObj}) => {
   const [open, setOpen]= obj;
      const [user, setUser] = fbObj;
      const [profileIsOpen, setProfileIsOpen] = useState(false);
  
      const handleClick= ()=>setProfileIsOpen(!profileIsOpen);
 
  return (
    <aside className={`w-100 ${open?"d-flex":"d-none"} sidenavmenu position-absolute top-0 end-0 d-flex flex-column justify-content-start gap-5 align-items-center`}>
        <ul className="w-100 p-0 sidenav-ul fs-1 fs-bold d-flex flex-column justify-content-evenly gap-5 align-items-center bor">
        <li className=' list-item-close bor'>
              <span className='' onClick={()=>setOpen(false)}><Image  src={close} width={50} height={50} alt='close'/></span>
            </li>
            <li className=' list-item'>
              <Link className="link-list" href={"/"}>
                Home
              </Link>
            </li>
            <li className=' list-item'>
              <Link className="link-list" href={"#company"}>
                Company
              </Link>
            </li>
            <li className=' list-item'>
              <Link className="link-list" href={"#features"}>
                Features
              </Link>
            </li>
            <li className=' list-item-1'>
              {!user?<Link href={"/auth"} className="signup-link">
                              Sign Up
                            </Link>:<><Image onClick={handleClick}  className="hs-profile-img" src={user?.picUrl ?? userImg} width={70} height={70} alt={user?.name ?? "Profile Pic" } />{profileIsOpen&&<UserProfile obj={user}/>}</>}
            </li>
          </ul>

    </aside>
  )
}

export default SideNavMenu