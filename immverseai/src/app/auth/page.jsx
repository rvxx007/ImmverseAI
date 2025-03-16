"use client";

import React, { useEffect, useState } from 'react'
import "./index.css";
import Image from 'next/image';
import poster from "../../../public/poster.gif"
import apple from "../../../public/apple.svg";
import google from "../../../public/google.svg";
import { fbApp } from '../../../firebaseConfig';
import { getAuth, OAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';



const Authentication = () => {

 
  const [user, setUser] = useState(null);
  // const unsubscribe = auth
  const router = useRouter();
  useEffect(()=>{
    
    const auth = getAuth(fbApp);
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      if(user){
        setUser(user);
      }else{
        setUser(null);
      }
    });

    return ()=> unsubscribe();
  },[]);

  const signInWithApple = async ()=>{
    const auth = getAuth(fbApp);
    const provider = new OAuthProvider("apple.com");

    try {
      result = await signInWithPopup(auth, provider);
      router.push("/")
    } catch (error) {
      console.error("Error signin with Apple: "+error.message);
    }
  }

  const signInWithGoogle = async ()=>{
    const auth = getAuth(fbApp);
    const provider = new GoogleAuthProvider();
    try{
      const data = await signInWithPopup(auth, provider);

      localStorage.setItem("userData",JSON.stringify({
        "uid":data.user.uid,
        "name":data.user.displayName,
        "email":data.user.email,
        "picUrl":data.user.photoURL
      }))
      router.push("/");
    }catch(error){
      console.error("Error signin with Google: "+error.message);
    }
  }

  return (
    <main className='authPage container'>
        <section className='posterSection'>
          <Image className='posterImg' width={100} src={poster} alt=''/> 
          <h1>Welcome To BookApp</h1>
        </section>
        <section className='btnSec'>
          <button onClick={signInWithApple}  className='signUpBtn'><span>Connect with Apple</span> <Image src={apple} alt='apple logo'/></button>
          <button onClick={signInWithGoogle} className='signUpBtn'><span>Connect with Google</span><Image src={google} alt='google logo'/></button>
        </section>
    </main>
  )
}


export default Authentication