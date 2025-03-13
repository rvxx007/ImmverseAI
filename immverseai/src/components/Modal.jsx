import Image from 'next/image';
import React from 'react'
import close from "../../public/close.svg";

const Modal = ({obj}) => {

  const [onPlay, setOnPlay] = obj;
  return (
    <section className='w-100 m-auto position-absolute top-0 right-0 left-0 bottom-0 d-flex justify-content-center align-items-center border-1 modal-section'>
        <div className='ms-div'>
          <div className='ms-close-div d-flex justify-content-right align-item-center'>
            <Image className='btn ' onClick={()=>setOnPlay(false)} src={close} width={50} height={50} alt='close'/>
          </div>
          <video loop controls autoPlay muted src='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sb7uiLMltks8nrrky/videoblocks-v1-0049_20220517-sf-shirokov-cybersport-people-4-panda-banda-crossmedia0000_s6f6zqdqn__379e0ec045939ddb863547f18513acdb__P360.mp4'>
            
          </video>
        </div>
    </section>
  )
}

export default Modal