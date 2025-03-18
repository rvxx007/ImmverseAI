"use client"
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/ImmverseAI.svg";

import hmbMenu from "../../public/hamMenu.svg";
import Link from "next/link";
import UserProfile from "./UserProfile";
import userImg from "../../public/userimg.svg";

const Navbar = ({obj,fbObj}) => {

    
    const [open, setOpen]= obj;
    const [user, setUser] = fbObj;
    const [profileIsOpen, setProfileIsOpen] = useState(false);

    const handleClick= ()=>setProfileIsOpen(!profileIsOpen);

  return (
    <header className="header-section">
      <nav>
        <div >
          <span>
          <Image
            className="iai-logo"
            width={150}
            height={30}
            style={{ width: "150px", height: "30px" }}
            src={logo}
            alt="Immverse Logo"
          />
          </span>
        </div>
        <div className="menu-list-block">
          <Image
            className="ham-menu-img"
            width={50}
            height={50}
            src={hmbMenu}
            alt="ham menu"
            onClick={()=>setOpen(true)}
          />
          <ul className=" menu-list menu-list-text">
            <li>
              <Link className="link-list" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link-list" href={"#company"}>
                Company
              </Link>
            </li>
            <li>
              <Link className="link-list" href={"#features"}>
                Features
              </Link>
            </li>
            
          </ul>
          
        </div>
        <div className=" nav-pro-block">
          {!user?<Link href={"/auth"} className="signup-link">
                Sign Up
              </Link>:<><Image onClick={handleClick}  className="hs-profile-img" src={user?.picUrl || userImg} width={50} height={50} alt={"Profile Picture"} />{profileIsOpen&&<UserProfile obj={user}/>}</>}
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
