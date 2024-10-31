import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fale com elas",
  description: "Olá! Somos o projeto Fale com Elas, um grupo de psicólogas clínicas dedicadas ao atendimento à mulheres. Nossas profissionais são graduadas em instituições renomadas e estão preparadas para oferecer suporte psicológico a mulheres de todas as idades, independente de sua localização. Nossa abordagem acolhedora e especializada visa atender às necessidades de cada paciente. Clique e saiba mais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Aqui é onde a fonte será carregada consistentemente */}
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
