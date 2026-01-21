import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const faqs = [
  {
    question: 'Qual nível eu preciso ter para começar?',
    answer:
      'Você pode começar do zero! As aulas são adaptadas ao seu nível atual, seja iniciante, intermediário ou avançado. Na primeira aula, fazemos um diagnóstico para entender exatamente onde você está e criar um plano personalizado.',
  },
  {
    question: 'As aulas são online ou presenciais?',
    answer:
      'As aulas são 100% online, via Google Meet ou Zoom. Isso permite flexibilidade de horários e você pode ter aula de qualquer lugar. Se você está em Venturosa-PE e prefere aulas presenciais, podemos conversar sobre essa possibilidade.',
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
      'O pagamento é realizado via Pix, sempre antes da aula acontecer para confirmar o agendamento. O modelo é totalmente flexível: você escolhe se prefere pagar aula por aula (individual) ou fechar pacotes, da maneira que for melhor para o seu planejamento financeiro.',
  },
  {
    question: 'Posso remarcar uma aula?',
    answer:
      'Sim! Você pode remarcar com até 24 horas de antecedência sem perder a aula. Remarcações de última hora ou faltas sem aviso podem não ser repostas, dependendo da disponibilidade.',
  },
  {
    question: 'Quais horários você atende?',
    answer:
      'Para dúvidas e suporte no WhatsApp, o atendimento é 24 horas. Já para as aulas, tenho disponibilidade de domingo a domingo — basta consultarmos a agenda para encontrar o melhor horário para você.',
  },
];

const AccordionItem = ({
  i,
  expanded,
  setExpanded,
  question,
  answer,
}: {
  i: number;
  expanded: number | false;
  setExpanded: (i: number | false) => void;
  question: string;
  answer: string;
}) => {
  const isOpen = i === expanded;

  return (
    <div className="border-b border-black/10 last:border-none">
      <motion.button
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group bg-transparent cursor-pointer"
      >
        <span
          className={`text-lg font-medium transition-colors duration-300 ${
            isOpen ? 'text-black' : 'text-black/70 group-hover:text-black'
          }`}
        >
          {question}
        </span>
        <div className="relative flex items-center justify-center w-8 h-8">
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Plus className="w-5 h-5 text-black/60 group-hover:text-black" />
          </motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Minus className="w-5 h-5 text-black group-hover:text-black" />
          </motion.span>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={`content-${i}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: 'hidden' }} // Forçado inline para garantir
          >
            <div className="pb-6 pr-8 text-black/70 leading-relaxed text-base">
              {answer}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQ() {
  const [expanded, setExpanded] = useState<number | false>(0);
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2
            className={`font-display text-4xl md:text-5xl font-medium mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Perguntas Frequentes
          </h2>
          <p
            className={`text-lg text-black/60 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Tire suas dúvidas sobre as aulas e metodologia
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-[#F6F1E3]/50 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-[#F6F1E3]">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                i={index}
                expanded={expanded}
                setExpanded={setExpanded}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}