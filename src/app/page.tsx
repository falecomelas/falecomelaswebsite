import { Depoimentos } from "@/components/Depoimentos";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mapa } from "@/components/Mapa";
import { Sintomas } from "@/components/Sintomas";
import { Sintomas2 } from "@/components/Sintomas2";
import { Sobre } from "@/components/Sobre";
import { Duvidas } from "@/components/Duvidas";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Sobre/>
    <Sintomas/>
    <Sintomas2/>
    <Mapa/>
    <Depoimentos/>
    <Duvidas/>
    <Footer/>
    </>
    
  );
}
