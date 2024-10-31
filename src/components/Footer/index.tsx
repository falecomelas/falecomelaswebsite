import Link from "next/link";
import { GridContainer } from "../GridContainer";
import Image from "next/image";

export function Footer() {
  const phoneNumber = "+558494662548";
  const message = "Olá, Gostaria de saber mais sobre sua consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <footer className="bg-back-footer pt-12 pb-6 mt-20" id="contatos">
      <GridContainer>
        
            <Image
              src="/logo4.svg"
              width={195}
              height={77}
              alt="Logo da Fale com elas"
            />
            <div className="flex flex-col xl:flex-row justify-between items-start mt-8 ">
              
              <div className=" flex flex-col gap-y-3 xl:mb-0 mb-8 " >
                
                <Link href="https://www.instagram.com/falecomelas.psicologia?igsh=MWV1NDV2bHR6YTk4eQ%3D%3D" >
                  <div className="flex flex-row gap-x-2 mt-4 hover:opacity-90">
                    <Image
                      src="/icon-insta.svg"
                      width={28}
                      height={28}
                      alt="Instagram logo"
                    />
                    <p className="text-[#923F48] font-montserrat text-base font-semibold">
                      @falecomelas.psicologia
                    </p>
                    </div>
                </Link>
                <Link href={whatsappLink} passHref >
                  <div className="flex flex-row gap-x-2 mt-4 hover:opacity-90">
                  <Image
                    src="/icon-wpp.svg"
                    width={28}
                    height={28}
                    alt="WhatsApp logo"
                  />
                  <p className="text-[#923F48] font-montserrat text-base font-semibold">
                    (84) 9466-2548
                  </p>
                  </div>
                </Link>
                <Link href="" >
                  <div className="flex flex-row gap-x-2 mt-4 hover:opacity-90">
                  <Image
                    src="/icon-email.svg"
                    width={28}
                    height={28}
                    alt="Email icon"
                  />
                  <p className="text-[#923F48] font-montserrat text-base font-semibold">
                    contato@falecomelas.com.br
                  </p>
                  </div>
                </Link>
                <Link href="https://www.tiktok.com/@falecomelas.psicologia?_t=8qqIGadsgo2&_r=1" >
                <div className="flex flex-row gap-x-2 mt-4 hover:opacity-90">
                  <Image
                    src="/icon-tik.svg"
                    width={28}
                    height={28}
                    alt="TikTok logo"
                  />
                  <p className="text-[#923F48] font-montserrat text-base font-semibold">
                    @falecomelas.psicologia
                  </p>
                  </div>
                </Link>
              </div>
              <p className="w-full max-w-[625px] mt-10 text-[#923F48] text-left">
                Em caso de crise suicida ligue para <strong>188 (CVV)</strong> ou
                acesse o site{" "}
                <strong>
                  <Link href="https://cvv.org.br/">www.cvv.org.br.</Link>
                </strong>{" "}
                E, em caso de emergência, procure atendimento em um hospital mais
                próximo.
              </p>
            </div>
            <p className="text-center text-neutral-700 mt-12 mb-6 text-sm ">©Copyright 2024 – Fale com elas. Todos os direitos reservados.</p>
          
      </GridContainer>
    </footer>
  );
}
