import { useInView } from '@/hooks/useInView';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Qual nível eu preciso ter para começar?',
    answer:
      'Você pode começar do zero! As aulas são adaptadas ao seu nível atual, seja iniciante, intermediário ou avançado. Na primeira aula, fazemos um diagnóstico para entender exatamente onde você está e criar um plano personalizado.',
  },
  {
    question: 'Tem aula experimental?',
    answer:
      'Sim! A primeira aula é uma aula experimental onde você conhece a metodologia, fazemos um diagnóstico do seu nível e definimos seus objetivos. Assim você pode decidir se o método funciona para você antes de fechar um pacote.',
  },
  {
    question: 'As aulas são online ou presenciais?',
    answer:
      'As aulas são 100% online, via Google Meet ou Zoom. Isso permite flexibilidade de horários e você pode ter aula de qualquer lugar. Se você está em [cidade] e prefere aulas presenciais, podemos conversar sobre essa possibilidade.',
  },
  {
    question: 'Quanto tempo até eu destravar a fala?',
    answer:
      'Depende do seu ponto de partida e dedicação, mas a maioria dos alunos nota uma diferença significativa nas primeiras 4-8 semanas. O importante é praticar consistentemente — com aulas semanais e pequenas tarefas diárias, os resultados aparecem.',
  },
  {
    question: 'Tem tarefa de casa?',
    answer:
      'Sim, mas são tarefas leves e práticas — de 10 a 15 minutos por dia. O objetivo não é sobrecarregar, mas criar uma rotina simples que acelere seu progresso entre as aulas.',
  },
  {
    question: 'Como funciona o pagamento e os pacotes?',
    answer:
      'Trabalho com pacotes mensais de 4 ou 8 aulas. O pagamento é feito no início de cada mês via Pix ou transferência bancária. Entro em contato com os valores após nossa conversa inicial para entender seus objetivos.',
  },
  {
    question: 'Posso remarcar uma aula?',
    answer:
      'Sim! Você pode remarcar com até 24 horas de antecedência sem perder a aula. Remarcações de última hora ou faltas sem aviso podem não ser repostas, dependendo da disponibilidade.',
  },
  {
    question: 'Quais horários você atende?',
    answer:
      'Atendo de segunda a sexta, geralmente entre 8h e 21h (horário de Brasília). Sábados podem ter disponibilidade limitada. Na nossa conversa inicial, alinhamos os melhores horários para você.',
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function FAQ() {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="section-padding">
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-10">
            <h2
              className={cn(
                'font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-3 transition-all duration-700',
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              FAQ
            </h2>
            <p
              className={cn(
                'text-base sm:text-lg text-muted-foreground transition-all duration-700 delay-100',
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              Perguntas frequentes sobre as aulas
            </p>
          </div>

          {/* Card único (igual ao print) */}
          <div
            className={cn(
              'transition-all duration-700 delay-200',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="rounded-2xl bg-[#F6F1E3] overflow-hidden">
              <AccordionPrimitive.Root type="single" collapsible>
                {faqs.map((faq, index) => {
                  const isLast = index === faqs.length - 1;

                  return (
                    <AccordionPrimitive.Item
                      key={index}
                      value={`item-${index}`}
                      className={cn(!isLast && 'border-b border-black/10')}
                    >
                      <AccordionPrimitive.Header>
                        <AccordionPrimitive.Trigger
                          className={cn(
                            "group w-full", // 'group' é essencial aqui
                            "flex items-center justify-between gap-6",
                            "px-6 py-5 sm:px-7",
                            "text-left",
                            "text-[15px] sm:text-base",
                            "font-semibold text-black",
                            "outline-none",
                            "hover:bg-black/[0.02] transition-colors"
                          )}
                        >
                          <span>{faq.question}</span>
                          <Plus
                            className="h-5 w-5 shrink-0 text-black/60 transition-transform duration-300 ease-out group-data-[state=open]:rotate-45"
                            aria-hidden="true"
                          />
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>

                      <AccordionPrimitive.Content 
                        className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                      >
                        <div className="px-6 pb-5 sm:px-7 text-sm sm:text-[15px] leading-relaxed text-black/70">
                          {faq.answer}
                        </div>
                      </AccordionPrimitive.Content>
                    </AccordionPrimitive.Item>
                  );
                })}
              </AccordionPrimitive.Root>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
