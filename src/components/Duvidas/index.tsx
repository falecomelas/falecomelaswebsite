
import { GridContainer } from "../GridContainer";
import { Question } from "./Question";

export function Duvidas() {
  return (
    <section className="pt-24 md:pt-24" id="duvidas">
      <GridContainer>
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-5 px-4">
          <h2 className="text-xl md:text-2xl font-medium">Dúvidas frequentes</h2>
          <p className="text-base md:text-xl/6 text-gray-600">
            Todas as principais dúvidas relacionadas à consulta, agendamento, procedimentos e muito mais.
          </p>
        </div>
        <div className="w-full max-w-xl md:max-w-3xl mx-auto divide-y divide-gray-200 px-4">
          <Question
            title="Como funciona o atendimento?"
            response="Nosso atendimento funciona de forma online, com encontros semanais de duração média 50 minutos e dia de atendimentos horários fixo."
          />
          <Question
            title="Atende mulheres de todas as idades?"
            response="Sim, o projeto Fale com Elas é voltado para atender mulheres de todas as idades, oferecendo suporte psicológico em diferentes fases da vida, sempre com uma abordagem acolhedora e personalizada, de acordo com as necessidades de cada mulher."
          />
          <Question
            title="O atendimento é presencial ou online?"
            response="O atendimento do projeto Fale com Elas é realizado exclusivamente online, proporcionando mais flexibilidade e conforto para as pacientes, onde quer que elas estejam, seja no Brasil ou no exterior."
          />
          <Question
            title="Quais são as patologias que vocês atendem?"
            response='Oferecemos suporte especializado para uma ampla variedade de questões emocionais e psicológicas, incluindo dificuldades relacionadas à sexualidade e intimidade, como anorgasmia, perda de libido e parafilias. Também atendemos transtornos compulsivos e comportamentos autodestrutivos, como tricotilomania, automutilação e transtorno de escoriação. Nossa equipe está preparada para ajudar com condições de saúde mental graves, como esquizofrenia e transtornos de personalidade. Além disso, proporcionamos apoio em questões de saúde emocional e bem-estar, abrangendo ansiedade, depressão, síndrome do pânico e transtorno de estresse pós-traumático (TEPT). Estamos capacitados para tratar transtornos alimentares, como anorexia e bulimia, bem como transtorno bipolar e síndrome de burnout. O suporte também se estende a transtornos obsessivo-compulsivos (TOC) e desafios específicos da saúde feminina, incluindo dificuldades emocionais relacionadas ao ciclo menstrual, depressão pós-parto e questões na maternidade. Nosso trabalho inclui o fortalecimento da autoestima e autoconfiança, além de ajudar na superação de experiências traumáticas, como violência doméstica, abuso e luto. Para situações especiais, também oferecemos apoio emocional, como assistência e suporte para viagens com pets.'
/>
          <Question
            title="Como agendar minha primeira sessão?"
            response="Para agendar sua primeira sessão, basta entrar em contato conosco pelo WhatsApp. Estamos à disposição para responder suas dúvidas e agendar um horário que seja conveniente para você!"
          />
          <Question
            title="Quais são os métodos de pagamento?"
            response="Os métodos de pagamento aceitos são por Pix ou transferência bancária. Se precisar de mais informações sobre como realizar o pagamento, entre em contato conosco!"
          />
        </div>
      </GridContainer>
    </section>
  );
}
