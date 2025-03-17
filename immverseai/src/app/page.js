"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import FeaturesCardSection from "@/components/FeaturesCardSection";
import ClientView from "@/components/ClientView";
import SideNavMenu from "@/components/SideNavMenu";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import envConfig from "../../config/envConfig";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [onPlay, setOnPlay] = useState(false);
  const [user, setUser] = useState({});
 
  useEffect(()=>setUser(JSON.parse(localStorage.getItem("userData"))),[]);

  return (
   <main className="container mainBlock position-relative">
    <Navbar obj={[open, setOpen]} fbObj={[user, setUser]}/>
    <SideNavMenu obj={[open, setOpen]} fbObj={[user, setUser]}/>
    <Hero/>
    <Banner obj={[onPlay, setOnPlay]}/>
    {onPlay===true&&<Modal obj={[onPlay, setOnPlay]}/>}
    <FeaturesCardSection/>
    <ClientView/>
   </main>
  );
}
