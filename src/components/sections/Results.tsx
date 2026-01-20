import { useInView } from '@/hooks/useInView';
import { Users, Clock, Calendar, Quote } from 'lucide-react';

const metrics = [
  { icon: Users, value: '+200', label: 'alunos' },
  { icon: Clock, value: '+5.000', label: 'horas de aula' },
  { icon: Calendar, value: '[4]', label: 'anos ensinando' },
];

const testimonials = [
  {
    name: 'Mariana S.',
    context: 'Inglês para trabalho',
    text: 'Depois de 3 meses, já consigo participar das reuniões em inglês sem ficar travada. O método é muito prático!',
  },
  {
    name: 'Carlos R.',
    context: 'Conversação',
    text: 'Sempre estudei gramática, mas nunca conseguia falar. Com as aulas, finalmente destravei e perdi o medo de errar.',
  },
  {
    name: 'Ana Paula M.',
    context: 'Entrevista de emprego',
    text: 'Passei na entrevista em inglês para uma vaga internacional. A preparação foi essencial!',
  },
  {
    name: 'Pedro H.',
    context: 'Iniciante',
    text: 'Comecei do zero e em poucos meses já consigo me virar em viagens. Recomendo muito!',
  },
];

const caseStudy = {
  title: 'De iniciante a confiante em 6 meses',
  before: 'Joana nunca tinha estudado inglês formalmente e tinha medo de parecer "ridícula" tentando falar.',
  process: 'Com aulas semanais focadas em conversação do dia a dia e tarefas de 10 minutos diários, ela foi ganhando confiança aos poucos.',
  after: 'Hoje ela trabalha em uma empresa com clientes internacionais e conduz reuniões em inglês.',
};

export function Results() {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section
      id="resultados"
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
            Results
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Resultados reais de alunos que transformaram seu inglês
          </p>
        </div>

        {/* Metrics */}
        <div
          className={`grid grid-cols-3 gap-6 lg:gap-8 mb-16 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-6 rounded-xl bg-background border border-border/50"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <metric.icon size={20} className="text-primary" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div
          className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated p-6 lg:p-8"
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-medium text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.context}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div
          className={`card-elevated p-8 lg:p-12 transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-display text-2xl font-medium mb-6 text-center">
            {caseStudy.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-3">
                Antes
              </div>
              <p className="text-muted-foreground">{caseStudy.before}</p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-3">
                Processo
              </div>
              <p className="text-muted-foreground">{caseStudy.process}</p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Depois
              </div>
              <p className="text-muted-foreground">{caseStudy.after}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
