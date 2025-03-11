'use client'
import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useAos } from "@/app/hooks/useAos";
 
export function Sobre(){
  useAos();
  const phoneNumber = "+5521974335405";
  const message = "Olá, Gostaria de saber mais sobre sua consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return(
    <section className="bg-back2 mt-36" id="sobre">
      <GridContainer>
        
        <div className="flex flex-col items-center py-12">
          {/* Texto  */}
          <div className="flex flex-col items-center text-center w-full max-w-[820px]">
            <h3 className="text-[#424242] text-center font-montserrat text-[32px] font-medium">Sobre Nós</h3>
            <p className="text-white mt-8">O projeto <strong>Fale com Elas</strong> é um site de atendimento psicológico dedicado exclusivamente às mulheres, criado por nós, duas psicólogas: Diana e Sergiana. Nos conhecemos na faculdade e, somando o tempo de formação e experiência clínica, acumulamos juntas <strong> 40 anos de prática em atendimentos.</strong></p>
            <p className="text-white mt-3">Nosso propósito é criar um espaço onde as <strong>vozes das mulheres</strong> sejam escutadas através do acolhimento, da empatia e sororidade. Nosso objetivo é atender de forma integral as demandas psicológicas, utilizando a escuta ativa para traçar caminhos que conduzam ao alívio das dores emocionais, e assim alcançar o propósito de vida e o fortalecimento dessas mulheres.</p>
            <p className="text-white mt-3"><strong>Aqui, oferecemos um espaço seguro e acolhedor,</strong> onde suas vivências são escutadas  sem julgamentos. Estamos prontas para compartilhar essa jornada com você, apoiando cada passo em direção ao seu fortalecimento emocional e pessoal.</p>
          </div>
          {/* Foto*/}
          <div className="flex mt-8">
            <div className="flex flex-col items-center" data-aos="fade-up">
              <Image
                src='/sergiana.svg'
                width={261}
                height={289}
                alt="foto da Psicóloga Sergiana"
              />
              <div className="flex flex-col items-center">
                <p className="text-white font-semibold text-xl">Sergiana</p>
                <p className="text-white">CRP 05/35435</p>
              </div>

            </div>
            <div className="flex flex-col items-center" data-aos="fade-up">
              <Image
                src='/diana.svg'
                width={261}
                height={289}
                alt="foto da Psicóloga Sergiana"
              />
              <div className="flex flex-col items-center" >
                <p className="text-white font-semibold text-xl">Diana</p>
                <p className="text-white"> CRP 05/32147</p>
              </div>

            </div>

          </div>
          <Link href={whatsappLink} passHref>
            <Button className="text-xl text-[#424242] px-10 py-6 bg-bege hover:bg-[#F1C0B9] ease-linear mt-10">
              <p>Agendar Atendimento</p> 
              <Image
                  src='/icon-wpp2.svg'
                  width={26}
                  height={27}
                  alt="Icone do whatsapp"
                />
              </Button>
          </Link>

        </div>
      </GridContainer>
    </section>
  )
}
