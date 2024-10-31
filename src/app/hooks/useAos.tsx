'use client'
import { useEffect } from 'react';
import AOS from 'aos'; // Certifique-se de que o AOS está instalado corretamente
import 'aos/dist/aos.css'; // Importando os estilos do AOS

export const useAos = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação
      easing: 'ease-in-out', // tipo de easing
      once: true, // a animação ocorre apenas uma vez
    });

    // Limpando o AOS ao desmontar o componente
    return () => {
      AOS.refresh();
    };
  }, []);
};
