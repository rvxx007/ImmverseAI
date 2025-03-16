import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const UserProfile = ({obj}) => {

     
  return (
    <div className="bor user-profile-section position-absolute">
      <div className='ups-div'>
        <Image  className="hs-profile-img" src={obj.picUrl} width={100} height={100} alt={obj.name} />
         <div>
         <h4>{obj.name}</h4>
         <span><Link href={`mailto:${obj.email}`} target="_blank">{obj.email}</Link></span>
         </div>
      </div>
      <div>
        <button className=''>Logout</button>
      </div>

    </div>
  )
}

export default UserProfile