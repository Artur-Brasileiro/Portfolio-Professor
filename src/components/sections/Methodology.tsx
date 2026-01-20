import { useInView } from '@/hooks/useInView';
import { Search, FileText, MessageCircle, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico',
    description: 'Entendemos seu nível atual, objetivos e disponibilidade para montar um plano que faz sentido.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Plano personalizado',
    description: 'Criamos uma trilha de estudos sob medida, com foco no que você realmente precisa desenvolver.',
  },
  {
    icon: MessageCircle,
    number: '03',
    title: 'Aulas práticas',
    description: 'Você fala desde o começo. Cada aula é uma oportunidade de praticar situações reais.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Acompanhamento',
    description: 'Feedback constante e ajustes no plano para garantir sua evolução contínua.',
  },
];

const techniques = [
  'Roleplays de situações reais',
  'Shadowing (repetição guiada)',
  'Revisão espaçada',
  'Tarefas rápidas e objetivas',
  'Correção de pronúncia',
  'Vocabulário em contexto',
];

export function Methodology() {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section
      id="metodologia"
      ref={ref}
      className="section-padding bg-secondary/30"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            How It Works
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Uma metodologia simples e eficiente para você evoluir de verdade
          </p>
        </div>

        {/* Steps Timeline */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Step Card */}
                <div className="card-elevated p-6 lg:pt-16 text-center lg:text-left h-full">
                  {/* Number Badge - Desktop */}
                  <div className="hidden lg:flex absolute -top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-display font-semibold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon & Number - Mobile */}
                  <div className="lg:hidden flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon size={20} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">{step.number}</span>
                  </div>

                  {/* Icon - Desktop */}
                  <div className="hidden lg:flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center mb-4">
                    <step.icon size={20} className="text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Techniques */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-display text-xl sm:text-2xl font-medium mb-6">
            O que você vai praticar nas aulas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techniques.map((technique) => (
              <span key={technique} className="chip">
                {technique}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
