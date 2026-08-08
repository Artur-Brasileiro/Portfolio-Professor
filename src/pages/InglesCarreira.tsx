import React from 'react';
import ServicePage from '../components/ServicePage';
import { Briefcase, Monitor, CheckSquare, Globe } from 'lucide-react';

export default function InglesCarreira() {
  return (
    <ServicePage
      title="Inglês para Carreira"
      subtitle="PROFISSIONAL"
      accentColor="bg-[#3d5a80]"
      accentTextColor="text-[#3d5a80]"
      icon={Briefcase}
      heroDescription="Domine o vocabulário corporativo para reuniões, apresentações e processos seletivos. Preparação focada no que o mercado exige."
      benefits={[
        {
          icon: Monitor,
          title: "Reuniões e apresentações",
          description: "Aprenda a se comunicar com clareza em meetings, calls e apresentações em inglês."
        },
        {
          icon: CheckSquare,
          title: "Entrevistas de emprego",
          description: "Preparação específica para processos seletivos com simulações de entrevistas reais."
        },
        {
          icon: Globe,
          title: "Vocabulário corporativo",
          description: "Domine termos e expressões do mundo dos negócios que fazem diferença no dia a dia profissional."
        }
      ]}
      howItWorks={[
        {
          step: "01",
          title: "Mapeamento",
          description: "Entendemos sua área de atuação, cargo e os desafios específicos que você enfrenta no inglês profissional."
        },
        {
          step: "02",
          title: "Imersão corporativa",
          description: "Aulas simulando situações reais do seu trabalho: e-mails, reuniões, negociações."
        },
        {
          step: "03",
          title: "Preparação focada",
          description: "Se há uma entrevista ou apresentação chegando, focamos 100% na sua preparação."
        }
      ]}
      testimonial={{
        name: "Mariana S.",
        context: "Inglês para trabalho",
        text: "Depois de 3 meses, já consigo participar das reuniões em inglês sem ficar travada. O método é muito prático!"
      }}
      faqs={[
        {
          question: "Preciso de inglês avançado para começar?",
          answer: "Não! Se você já tem uma base intermediária, conseguimos focar nos termos e situações do seu trabalho. Para iniciantes, começamos com aulas particulares para construir a base."
        },
        {
          question: "Você prepara para entrevistas específicas?",
          answer: "Sim! Se você tem uma entrevista marcada, posso montar aulas focadas exatamente no que aquela vaga exige, com simulações e feedback."
        },
        {
          question: "As aulas são adaptadas para minha área?",
          answer: "Com certeza. Seja tecnologia, marketing, finanças ou qualquer área — o conteúdo é personalizado para o seu contexto profissional."
        }
      ]}
      whatsappMessage="Olá! Preciso de inglês para minha carreira profissional. Gostaria de saber mais sobre as aulas!"
    />
  );
}
