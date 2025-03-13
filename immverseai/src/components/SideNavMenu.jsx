import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import close from "../../public/close.svg"

const SideNavMenu = () => {
  return (
    <aside className='w-100 sidenavmenu position-absolute top-0 end-0 bor d-flex flex-column justify-content-start gap-5 align-items-center'>
        <ul className="w-100 sidenav-ul fs-1 fs-bold d-flex flex-column justify-content-evenly gap-5 align-items-center">
        <li className=' list-item-close'>
              <span ><Image src={close} width={80} height={80} alt='close'/></span>
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
              <Link href={"/auth"} className="signup-link">
                Sign Up
              </Link>
            </li>
          </ul>

    </aside>
  )
}

export default SideNavMenu