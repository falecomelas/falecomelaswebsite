'use client'
import { GridContainer } from "../GridContainer";
import Image from "next/image";
import { useAos } from "@/app/hooks/useAos";

import { Button } from "@/components/ui/button"
import Link from "next/link";


export function Hero(){
  useAos();
  const phoneNumber = "+5584991417880";
  const message = "Olá, Gostaria de saber mais sobre sua consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return(
    
    <section id="home">
      <GridContainer>
        <div className="flex flex-col justify-center items-center mt-28">

          <div className="flex flex-col xl:flex-row gap-6 items-center" data-aos="fade-down">
            <div>
              <h1 className="text-[#424242] text-center font-montserrat text-[52px] font-normal  leading-tight">Fale com elas</h1>
              <h2 className="text-[#424242] text-center font-montserrat text-[32px] font-light leading-normal">Psicologia Clínica</h2>
            </div>
            <Image
              src='/logo2.svg'
              width={90}
              height={92}
              alt="Logo do fale come elas"
            />
          </div>
          <div className="w-full xl:max-w-[940px] max-w-[500px] mt-8 flex flex-col items-center">
            <h3 className="text-[#424242] text-center font-montserrat text-xl xl:text-[24px] font-normal leading-[130%]" >Com mais de 40 anos de experiência somadas, nossas psicólogas oferecem acolhimento, clareza e objetividade no atendimentos  especializado na mulher</h3>
            <div className="flex xl:flex-row xl:gap-3 gap-1 mt-8 items-start justify-center">
              <Image
                src='/ok.svg'
                width={22}
                height={27}
                alt="Ícone de Ok"
                className="xl:w-auto xl:max-w-[26px]"
              />
              <p className="text-[#424242] font-inter text-[18px] xl:text-[20px] font-normal leading-[130%] text-center">
                Manejo clínico no acolhimento da mulher.
              </p>
            </div>
            <div className="flex xl:flex-row xl:gap-3 gap-1 mt-8 items-start justify-center">
              <Image
                src='/ok.svg'
                width={22}
                height={27}
                alt="Ícone de Ok"
                className="xl:w-auto xl:max-w-[26px]"
              />
              <p className="text-[#424242] font-inter text-[18px] xl:text-[20px] font-normal leading-[130%] text-center">
              Mais de 40 mil sessões realizadas pelas profissionais
              </p>
            </div>
            <div className="flex xl:flex-row xl:gap-3 gap-1 mt-8 items-start justify-center">
              <Image
                src='/ok.svg'
                width={22}
                height={27}
                alt="Ícone de Ok"
                className="xl:w-auto xl:max-w-[26px]"
              />
              <p className="text-[#424242] font-inter text-[18px] xl:text-[20px] font-normal leading-[130%] text-center">
              Atendimento online focado no bem-estar de cada mulher
              </p>
            </div>
            <Link href={whatsappLink} passHref>
              <Button 
                className="text-xl text-[#424242] px-10 py-6 bg-bege hover:bg-[#F1C0B9] ease-linear delay-500 mt-10" data-aos="fade-up"
                data-aos-duration="700">
                <p>Fale com elas</p>
                <Image
                  src='/icon-wpp2.svg'
                  width={26}
                  height={27}
                  alt="Icone do whatsapp"
                />
               </Button>
              </Link>

          </div>
        </div>
       
      </GridContainer>
    </section>
  )
}