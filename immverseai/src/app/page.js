import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import FeaturesCardSection from "@/components/FeaturesCardSection";
import ClientView from "@/components/ClientView";

export default function Home() {
  return (
   <main className="container mainBlock">
    <Navbar/>
    <Hero/>
    <Banner />
    <FeaturesCardSection/>
    <ClientView/>
   </main>
  );
}
