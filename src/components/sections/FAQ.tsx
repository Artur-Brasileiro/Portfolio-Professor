import { useInView } from '@/hooks/useInView';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Qual nível eu preciso ter para começar?',
    answer: 'Você pode começar do zero! As aulas são adaptadas ao seu nível atual, seja iniciante, intermediário ou avançado. Na primeira aula, fazemos um diagnóstico para entender exatamente onde você está e criar um plano personalizado.',
  },
  {
    question: 'Tem aula experimental?',
    answer: 'Sim! A primeira aula é uma aula experimental onde você conhece a metodologia, fazemos um diagnóstico do seu nível e definimos seus objetivos. Assim você pode decidir se o método funciona para você antes de fechar um pacote.',
  },
  {
    question: 'As aulas são online ou presenciais?',
    answer: 'As aulas são 100% online, via Google Meet ou Zoom. Isso permite flexibilidade de horários e você pode ter aula de qualquer lugar. Se você está em [cidade] e prefere aulas presenciais, podemos conversar sobre essa possibilidade.',
  },
  {
    question: 'Quanto tempo até eu destravar a fala?',
    answer: 'Depende do seu ponto de partida e dedicação, mas a maioria dos alunos nota uma diferença significativa nas primeiras 4-8 semanas. O importante é praticar consistentemente — com aulas semanais e pequenas tarefas diárias, os resultados aparecem.',
  },
  {
    question: 'Tem tarefa de casa?',
    answer: 'Sim, mas são tarefas leves e práticas — de 10 a 15 minutos por dia. O objetivo não é sobrecarregar, mas criar uma rotina simples que acelere seu progresso entre as aulas.',
  },
  {
    question: 'Como funciona o pagamento e os pacotes?',
    answer: 'Trabalho com pacotes mensais de 4 ou 8 aulas. O pagamento é feito no início de cada mês via Pix ou transferência bancária. Entro em contato com os valores após nossa conversa inicial para entender seus objetivos.',
  },
  {
    question: 'Posso remarcar uma aula?',
    answer: 'Sim! Você pode remarcar com até 24 horas de antecedência sem perder a aula. Remarcações de última hora ou faltas sem aviso podem não ser repostas, dependendo da disponibilidade.',
  },
  {
    question: 'Quais horários você atende?',
    answer: 'Atendo de segunda a sexta, geralmente entre 8h e 21h (horário de Brasília). Sábados podem ter disponibilidade limitada. Na nossa conversa inicial, alinhamos os melhores horários para você.',
  },
];

export function FAQ() {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section
      id="faq"
      ref={ref}
      className="section-padding bg-secondary/30"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              FAQ
            </h2>
            <p
              className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Perguntas frequentes sobre as aulas
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5 [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
