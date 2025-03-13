"use client"
import React from "react";
import Image from "next/image";
import logo from "../../public/ImmverseAI.svg";

import hmbMenu from "../../public/hamMenu.svg";
import Link from "next/link";

const Navbar = ({obj}) => {

    
    const [open, setOpen]= obj;

  
  return (
    <header className="header-section">
      <nav>
        <div>
          <Image
            className="iai-logo"
            width={150}
            height={30}
            style={{ width: "150px", height: "30px" }}
            src={logo}
            alt="Immverse Logo"
          />
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
            <li>
              <Link href={"/auth"} className="signup-link">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
