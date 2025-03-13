"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import FeaturesCardSection from "@/components/FeaturesCardSection";
import ClientView from "@/components/ClientView";
import SideNavMenu from "@/components/SideNavMenu";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Home() {

  const [open, setOpen] = useState(false);
  const [onPlay, setOnPlay] = useState(false);
  return (
   <main className="container mainBlock position-relative">
    <Navbar obj={[open, setOpen]}/>
    <SideNavMenu obj={[open, setOpen]}/>
    <Hero/>
    <Banner obj={[onPlay, setOnPlay]}/>
    {onPlay===true&&<Modal obj={[onPlay, setOnPlay]}/>}
    <FeaturesCardSection/>
    <ClientView/>
   </main>
  );
}
