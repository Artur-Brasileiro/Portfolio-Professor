import React from 'react';
import ServicePage from '../components/ServicePage';
import { MessageCircle, Mic, Globe, Zap } from 'lucide-react';

export default function Conversacao() {
  return (
    <ServicePage
      title="Conversação"
      subtitle="DESTRAVAR A FALA"
      accentColor="bg-[#d96548]"
      accentTextColor="text-[#d96548]"
      icon={MessageCircle}
      heroDescription="Ganhe fluência, melhore a pronúncia e perca o medo de falar em situações reais. Aulas 100% focadas em colocar você para conversar."
      benefits={[
        {
          icon: Mic,
          title: "Pronúncia e entonação",
          description: "Correção em tempo real para você soar natural e ser entendido com clareza."
        },
        {
          icon: Globe,
          title: "Situações reais",
          description: "Roleplays de viagens, reuniões, entrevistas e do dia a dia para você praticar o que realmente vai usar."
        },
        {
          icon: Zap,
          title: "Confiança para falar",
          description: "O foco é destravar. Você perde o medo de errar e ganha segurança para se comunicar."
        }
      ]}
      howItWorks={[
        {
          step: "01",
          title: "Avaliação",
          description: "Identificamos seus bloqueios e seu nível de conversação atual."
        },
        {
          step: "02",
          title: "Prática guiada",
          description: "Roleplays, shadowing e conversas sobre temas do seu interesse."
        },
        {
          step: "03",
          title: "Feedback constante",
          description: "Correção de pronúncia, vocabulário e gramática em tempo real."
        }
      ]}
      testimonial={{
        name: "Carlos R.",
        context: "Conversação",
        text: "Sempre estudei gramática, mas nunca conseguia falar. Com as aulas, finalmente destravei e perdi o medo de errar."
      }}
      faqs={[
        {
          question: "Preciso saber gramática antes?",
          answer: "Não necessariamente. Se você já entende um pouco de inglês (mesmo que não consiga falar), as aulas de conversação vão te ajudar a destravar. Se for muito iniciante, podemos começar com aulas particulares."
        },
        {
          question: "Quanto tempo até eu conseguir conversar?",
          answer: "Depende do seu ponto de partida, mas a maioria dos alunos nota uma diferença significativa nas primeiras 4-8 semanas."
        },
        {
          question: "As aulas são só em inglês?",
          answer: "Não! Começamos no seu nível de conforto e vamos aumentando o inglês gradualmente. O objetivo é você evoluir sem se sentir perdido."
        }
      ]}
      whatsappMessage="Olá! Tenho interesse nas aulas de conversação em inglês. Quero destravar minha fala!"
    />
  );
}
