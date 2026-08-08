import React from 'react';
import ServicePage from '../components/ServicePage';
import { GraduationCap, BookOpen, Award, Lightbulb } from 'lucide-react';

export default function ApoioAcademico() {
  return (
    <ServicePage
      title="Apoio Acadêmico"
      subtitle="ESTUDANTES"
      accentColor="bg-[#c49a3c]"
      accentTextColor="text-[#c49a3c]"
      icon={GraduationCap}
      heroDescription="Reforço escolar, preparação para provas e construção de uma base gramatical sólida. Ideal para estudantes do ensino médio e faculdade."
      benefits={[
        {
          icon: BookOpen,
          title: "Base gramatical sólida",
          description: "Gramática e sintaxe de forma organizada, conectando o conteúdo ao uso real do idioma."
        },
        {
          icon: Award,
          title: "Preparação para provas",
          description: "ENEM, vestibular, provas de proficiência — preparação focada no que cai na prova."
        },
        {
          icon: Lightbulb,
          title: "Método inteligente",
          description: "Revisão espaçada, vocabulário em contexto e tarefas rápidas para fixar o conteúdo."
        }
      ]}
      howItWorks={[
        {
          step: "01",
          title: "Diagnóstico escolar",
          description: "Identificamos as dificuldades e gaps de conhecimento do aluno."
        },
        {
          step: "02",
          title: "Reforço direcionado",
          description: "Aulas focadas exatamente nos pontos fracos, com exercícios práticos e contextualizados."
        },
        {
          step: "03",
          title: "Acompanhamento",
          description: "Feedback constante e ajustes no plano para garantir evolução contínua."
        }
      ]}
      testimonial={{
        name: "Ana Paula M.",
        context: "Preparação para entrevista",
        text: "Passei na entrevista em inglês para uma vaga internacional. A preparação foi essencial!"
      }}
      faqs={[
        {
          question: "A partir de que idade você atende?",
          answer: "Atendo a partir do ensino médio (14-15 anos). Para alunos mais novos, podemos conversar para avaliar se o formato é adequado."
        },
        {
          question: "Ajuda com trabalhos da faculdade?",
          answer: "Sim! Posso ajudar com leitura de artigos, escrita acadêmica em inglês e preparação para apresentações."
        },
        {
          question: "Tem tarefa de casa?",
          answer: "Sim, mas são tarefas leves e práticas — de 10 a 15 minutos por dia. O objetivo é criar uma rotina que acelere o progresso."
        }
      ]}
      whatsappMessage="Olá! Tenho interesse no apoio acadêmico em inglês. Gostaria de saber mais!"
    />
  );
}
