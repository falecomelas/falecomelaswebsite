import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function Mapa(){
  return(
    <section className="mt-40">
      <GridContainer>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[521px]">
            <h4 className="text-center font-montserrat text-2xl font-medium leading-[1.3] text-[#424242] mb-3">Psicologia intercultural</h4>
            <p className="text-center font-montserrat text-[16px] font-light leading-[1.3] text-[#424242]">Nossas psicólogas oferecerem atendimento especializado para mulheres no exterior! Veja alguns os países que elas atendem:</p>
          </div>
          <Image
              src='/mapa.svg'
              width={950}
              height={570}
              alt="Mapa do mundo"
              className="mt-12"
            />
          
          <div className="grid xl:grid-cols-5 grid-cols-2 xl:gap-x-20 gap-x-10 gap-y-8 mt-12 items-center mx-auto">
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/UY.svg'
                width={50}
                height={34}
                alt="Bandeira do Uruguai"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Uruguai</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/BR.svg'
                width={50}
                height={34}
                alt="Bandeira do Brasil"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Brasil</p>
            </div>
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/SE.svg'
                width={50}
                height={34}
                alt="Bandeira da Suécia"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Suécia</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/FR.svg'
                width={50}
                height={34}
                alt="Bandeira da França"
                className="rounded-[6px]"
              />
              <p className="font-semibold">França</p>
            </div>
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/CH.svg'
                width={50}
                height={34}
                alt="Bandeira da Suíça"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Suíça</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/DO.svg'
                width={50}
                height={34}
                alt="Bandeira da República Dominicana"
                className="rounded-[6px]"
              />
              <p className="font-semibold">República <br/>Dominicana</p>
            </div>
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/MX.svg'
                width={50}
                height={34}
                alt="Bandeira do México"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Mexíco</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/US.svg'
                width={50}
                height={34}
                alt="Bandeira da República Dominicana"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Estados <br/>Unidos</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/PY.svg'
                width={50}
                height={34}
                alt="Bandeira do Paraguaia"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Paraguaia</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/AU.svg'
                width={50}
                height={34}
                alt="Bandeira da Austrália"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Austrália</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/PA.svg'
                width={50}
                height={34}
                alt="Bandeira do Panamá"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Panamá</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/PR.svg'
                width={50}
                height={34}
                alt="Bandeira do Porto Rico"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Porto Rico</p>
            </div>  
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/CA.svg'
                width={50}
                height={34}
                alt="Bandeira do Canadá"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Canadá</p>
            </div>   
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/TT.svg'
                width={50}
                height={34}
                alt="Bandeira do Trindade e Tobago"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Trindade <br/>e Tobago</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/GT.svg'
                width={50}
                height={34}
                alt="Bandeira da Costa Rica"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Costa Rica</p>
            </div>  
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/MZ.svg'
                width={50}
                height={34}
                alt="Bandeira do Moçambique"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Moçambique</p>
            </div>   
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/AD.svg'
                width={50}
                height={34}
                alt="Bandeira do Andorra"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Andorra</p>
            </div>   
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/BO.svg'
                width={50}
                height={34}
                alt="Bandeira da Bolívia"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Bolívia</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row">
              <Image
                src='/flags/CM.svg'
                width={50}
                height={34}
                alt="Bandeira do Camarões"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Camarões</p>
            </div> 
            <div className="flex gap-2 items-center">
              <Image
                src='/flags/CU.svg'
                width={50}
                height={34}
                alt="Bandeira de Cuba"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Cuba</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row"> 
              <Image
                src='/flags/NI.svg'
                width={50}
                height={34}
                alt="Bandeira da Nicarágua"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Nicarágua</p>
            </div> 
            <div className="flex gap-2 items-center"> 
              <Image
                src='/flags/AO.svg'
                width={50}
                height={34}
                alt="Bandeira da Angola"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Angola</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row"> 
              <Image
                src='/flags/AR.svg'
                width={50}
                height={34}
                alt="Bandeira da Argentina"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Argentina</p>
            </div> 
            <div className="flex gap-2 items-center"> 
              <Image
                src='/flags/GB.svg'
                width={50}
                height={34}
                alt="Bandeira do Reino Unido"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Reino Unido</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row"> 
              <Image
                src='/flags/PE.svg'
                width={50}
                height={34}
                alt="Bandeira do Peru"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Peru</p>
            </div> 
            <div className="flex gap-2 items-center"> 
              <Image
                src='/flags/VE.svg'
                width={50}
                height={34}
                alt="Bandeira da Venezuela"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Venezuela</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row"> 
              <Image
                src='/flags/CL.svg'
                width={50}
                height={34}
                alt="Bandeira do Chile"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Chile</p>
            </div> 
            <div className="flex gap-2 items-center"> 
              <Image
                src='/flags/EC.svg'
                width={50}
                height={34}
                alt="Bandeira do Equador"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Equador</p>
            </div>
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row"> 
              <Image
                src='/flags/PT.svg'
                width={50}
                height={34}
                alt="Bandeira do Portugal"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Portugal</p>
            </div>
            <div className="flex gap-2 items-center"> 
              <Image
                src='/flags/CR.svg'
                width={50}
                height={34}
                alt="Bandeira da Guatemala"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Guatemala</p>
            </div>
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row"> 
              <Image
                src='/flags/HN.svg'
                width={50}
                height={34}
                alt="Bandeira da Honduras"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Honduras</p>
            </div>
            <div className="flex gap-2 items-center"> 
              <Image
                src='/flags/SV.svg'
                width={50}
                height={34}
                alt="Bandeira do El Savador"
                className="rounded-[6px]"
              />
              <p className="font-semibold">El Savador</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row"> 
              <Image
                src='/flags/CN.svg'
                width={50}
                height={34}
                alt="Bandeira da China"
                className="rounded-[6px]"
              />
              <p className="font-semibold">China</p>
            </div>
            <div className="flex gap-2 items-center"> 
              <Image
                src='/flags/TH.svg'
                width={50}
                height={34}
                alt="Bandeira da Tailândia"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Tailândia</p>
            </div> 
            <div className="flex gap-2 items-center flex-row-reverse xl:flex-row"> 
              <Image
                src='/flags/CO.svg'
                width={50}
                height={34}
                alt="Bandeira da Colômbia"
                className="rounded-[6px]"
              />
              <p className="font-semibold">Colômbia</p>
            </div>             
          </div>

            





        </div>
      </GridContainer>
    </section>
  )
}