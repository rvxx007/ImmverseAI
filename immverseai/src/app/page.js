import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import CardSection from "@/components/CardSection";

export default function Home() {
  return (
   <main className="container h-100 bor">
    <Navbar/>
    <Hero/>
    <Banner />
    <CardSection/>
   </main>
  );
}
