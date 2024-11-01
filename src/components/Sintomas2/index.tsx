'use client'
import { GridContainer } from "../GridContainer";
import { useAos } from "@/app/hooks/useAos";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Sintomas2(){
  useAos();
  return(
    <section className=" mt-20 xl:mt-36" id="terapia">
      <GridContainer>
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-y-10 justify-items-center mx-auto xl:gap-x-12">
          <Card className="w-full max-w-[390px] h-[209px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]" data-aos="zoom-in-down">
              <CardHeader className="px-7 py-2 absolute -top-[-20px] ">
                <CardTitle>
                  <h4 className="text-xl text-white font-medium md:text-[18px]">Depressão</h4>
                </CardTitle>
              
              </CardHeader>
              <CardContent className="text-center mt-20 w-full max-w-[360px] md:">
                <p className="text-white text-base md font-light">
                  As psicólogas do Fale com Elas oferecem suporte acolhedor para lidar com a depressão, ajudando você a reencontrar a alegria e o equilíbrio emocional.
                </p>
              </CardContent>
          </Card>
          <Card className="w-full max-w-[386px] h-[209px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]" data-aos="zoom-in-up">             
              <CardHeader className="px-7 py-2 absolute -top-[-20px] ">
                <CardTitle>
                  <h4 className="text-xl text-white font-medium md:text-[18px]">Ansiedade</h4>
                </CardTitle>
              
              </CardHeader>
              <CardContent className="text-center mt-20 w-full max-w-[360px]">
                <p className="text-white text-base font-light">
                  As psicólogas do Fale com Elas possuem técnicas especializadas, que auxiliam no controle da ansiedade, promovendo calma e maior qualidade de vida.
                </p>
              </CardContent>
          </Card>
          <Card className="w-full max-w-[386px] h-[209px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]" data-aos="zoom-in-down">
              <CardHeader className="px-7 py-2 absolute -top-[-20px] ">
                <CardTitle>
                  <h4 className="text-xl text-white font-medium md:text-[18px]">Depressão pós-parto</h4>
                </CardTitle>
              
              </CardHeader>
              <CardContent className="text-center mt-20 w-full max-w-[360px]">
                <p className="text-white text-base font-light">
                  As psicólogas do Apoiamos você mãe nesse momento delicado, ajudando a superar os desafios emocionais da maternidade.
                </p>
              </CardContent>
          </Card>
          <Card className="w-full max-w-[386px] h-[209px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]" data-aos="zoom-in-up">
              <CardHeader className="px-7 py-2 absolute -top-[-24px] ">
                <CardTitle>
                  <h4 className="text-xl text-white font-medium md:text-[18px]">Dependência Emocional</h4>
                </CardTitle>
              
              </CardHeader>
              <CardContent className="text-center mt-20 w-full max-w-[360px]">
                <p className="text-white text-base font-light">
                Trabalhamos para fortalecer sua autonomia emocional e resgatar sua autoconfiança nas relações.
                </p>
              </CardContent>
          </Card>
          <Card className="w-full max-w-[386px] h-[209px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]" data-aos="zoom-in-down">
              <CardHeader className="px-7 py-2 absolute -top-[-20px] ">
                <CardTitle>
                  <h4 className="text-xl text-white font-medium text-center md:text-[18px]">Transtorno de Personalidade Borderline</h4>
                </CardTitle>
              
              </CardHeader>
              <CardContent className="text-center mt-24 w-full max-w-[360px] md:text-[18px]">
                <p className="text-white text-base font-light">
                Oferecemos tratamento especializado para ajudar a lidar com emoções intensas e instabilidades, promovendo o bem-estar.
                </p>
              </CardContent>
          </Card>
          <Card className="w-full max-w-[386px] h-[209px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]" data-aos="zoom-in-up">
              <CardHeader className="px-7 py-2 absolute -top-[-20px] ">
                <CardTitle>
                  <h4 className="text-xl text-white font-medium text-center md:text-[18px]">Violência Doméstica ou Abuso</h4>
                </CardTitle>
              
              </CardHeader>
              <CardContent className="text-center mt-20 w-full max-w-[360px]">
                <p className="text-white text-base font-light">
                Temos um ambiente seguro e acolheador para mulheres que passaram por abuso emocional, físico ou sexual.
                </p>
              </CardContent>
          </Card>

        </div>
      </GridContainer>
    </section>
  )
}