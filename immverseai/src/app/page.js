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

export default function Home() {

  const [open, setOpen] = useState(false);

  return (
   <main className="container mainBlock position-relative">
    <Navbar obj={[open, setOpen]}/>
    <SideNavMenu obj={[open, setOpen]}/>
    <Hero/>
    <Banner />
    <FeaturesCardSection/>
    <ClientView/>
   </main>
  );
}
