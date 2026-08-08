import React from 'react';
import ServicePage from '../components/ServicePage';
import { User, Target, Clock, TrendingUp } from 'lucide-react';

export default function AulasParticulares() {
  return (
    <ServicePage
      title="Aulas Particulares"
      subtitle="MAIS POPULAR"
      accentColor="bg-[#c47760]"
      accentTextColor="text-[#c47760]"
      icon={User}
      heroDescription="Evolução rápida com um plano 100% adaptado ao seu ritmo, seus objetivos e sua rotina. Aulas individuais onde o foco é todo seu."
      benefits={[
        {
          icon: Target,
          title: "Plano 100% personalizado",
          description: "Nada de conteúdo genérico. Cada aula é montada com base nos seus objetivos específicos — viagem, trabalho, provas ou conversação."
        },
        {
          icon: Clock,
          title: "Evolução no seu ritmo",
          description: "Sem pressão e sem comparação. Você avança conforme sua disponibilidade e capacidade, com acompanhamento constante."
        },
        {
          icon: TrendingUp,
          title: "Resultados visíveis",
          description: "A maioria dos alunos nota diferença nas primeiras 4-8 semanas de aulas regulares."
        }
      ]}
      howItWorks={[
        {
          step: "01",
          title: "Diagnóstico",
          description: "Entendemos seu nível atual, objetivos e disponibilidade para montar um plano que faz sentido."
        },
        {
          step: "02",
          title: "Plano personalizado",
          description: "Criamos uma trilha de estudos sob medida, com foco no que você realmente precisa desenvolver."
        },
        {
          step: "03",
          title: "Aulas práticas",
          description: "Você fala desde o começo. Cada aula é uma oportunidade de praticar situações reais."
        }
      ]}
      testimonial={{
        name: "Pedro H.",
        context: "Iniciante",
        text: "Comecei do zero e em poucos meses já consigo me virar em viagens. Recomendo muito!"
      }}
      faqs={[
        {
          question: "Qual nível eu preciso ter para começar?",
          answer: "Você pode começar do zero! As aulas são adaptadas ao seu nível atual, seja iniciante, intermediário ou avançado. Na primeira aula, fazemos um diagnóstico para entender exatamente onde você está e criar um plano personalizado."
        },
        {
          question: "As aulas são online ou presenciais?",
          answer: "As aulas são 100% online, via Google Meet ou Zoom. Isso permite flexibilidade de horários e você pode ter aula de qualquer lugar."
        },
        {
          question: "Como funciona o pagamento?",
          answer: "O pagamento é realizado via Pix, sempre antes da aula. Você escolhe se prefere pagar aula por aula ou fechar pacotes."
        },
        {
          question: "Posso remarcar uma aula?",
          answer: "Sim! Você pode remarcar com até 24 horas de antecedência sem perder a aula."
        }
      ]}
      whatsappMessage="Olá! Tenho interesse nas aulas particulares de inglês. Gostaria de saber mais!"
    />
  );
}
