'use client'
import { useState, useEffect } from "react";
import { GridContainer } from "../GridContainer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Depoimentos() {
  const phoneNumber = "+5521974335405";
  const message = "Olá, Gostaria de saber mais sobre sua consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  const testimonials = [
    {
      id: 1,
      content: "Me gusto la primera sesion por qué es una personaje escucha, además de que te recomienda cosas que pueden ayudar con tu progreso desde el comienzo, trasmite también una buena energía",
      author: "Gloria",
    },
    {
      id: 2,
      content: "Adorei, procurei Diana para fazer uma avaliação para Pet de Suporte Emocional e o atendimento foi perfeito. Super indico!!",
      author: "Ester",
    },
    {
      id: 3,
      content: "Como imigrante muchas veces lá Soledad y lá distância nos arropa y nós hace isolarnos aun mas. Conocer la fale com elas a sido de mucha ayuda. Ellas  han sido y son unas excelente profissionales",
      author: "Roxana",
    },
    {
      id: 4,
      content: "Sergina é uma excelente psicóloga, atenciosa e resolutiva, dedicada a auxiliar no processo de autoconhecimento e desenvolvimento pessoal.",
      author: "Maria",
    },
    {
      id: 5,
      content: "Estava com um problema com  meu namorado graças a fale com elas, estou bem melhor agora,espero continuar com a terapia",
      author: "Luana",
    },
    {
      id: 6,
      content: "Eu, estava muito angustiada e me indicaram o Fale com elas, e amei o atendimento   e vou continuar com mais umas consulta.",
      author: "Fernanda",
    },
  ];

  const itemsPerPageMobile = 1; // 1 card por página no mobile
  const itemsPerPageDesktop = 3; // 3 cards por página nas outras resoluções

  useEffect(() => {
    // Update isMobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize); // Add event listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="mt-44" id="depoimentos">
      <GridContainer>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-center font-montserrat text-2xl font-medium leading-[1.3] text-[#424242] mb-20">
            Elas resolveram compartilhar com vocês
          </h4>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {currentTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="xl:basis-1/3 md:basis-1/2 sm:basis-1/1">
                  <Card className="w-full max-w-[360px] h-[318px] flex flex-col justify-center items-center relative mx-auto mb-10 bg-back-card2 rounded-[18px]">
                    <CardHeader className="absolute -top-[-8px]">
                      <Image
                        src="/logo3.svg"
                        width={72}
                        height={76}
                        alt="icone de chat de conversa"
                      />
                    </CardHeader>
                    <CardContent className="text-center mt-32">
                      <p className="text-neutral-700 text-base">
                        {testimonial.content}
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                      <p className="mb-3 font-bold">{testimonial.author}</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Botões de Navegação */}
          <div className="flex justify-between mt-4 w-full max-w-[360px]">
            <button
              onClick={handlePrev}
              className="p-2 bg-[#E0A49C] rounded hover:opacity-70 transition-all ease-in"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-[#E0A49C] rounded hover:opacity-70 transition-all ease-in"
            >
              Próximo
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-[#424242]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <Link href={whatsappLink} passHref>
          <Button className="text-lg font-medium text-[#424242] px-10 py-6 bg-bege hover:bg-[#F1C0B9] ease-linear  mt-16">
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
  );
}
