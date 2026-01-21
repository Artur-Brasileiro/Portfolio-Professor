import { useInView } from '@/hooks/useInView';
import { Users, Clock, Calendar, Quote } from 'lucide-react';

const metrics = [
  { icon: Users, value: '+200', label: 'alunos' },
  { icon: Clock, value: '+5.000', label: 'horas de aula' },
  { icon: Calendar, value: '4', label: 'anos ensinando' },
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
      // Mudado para bg-zinc-50 (Cinza bem claro, quase branco)
      className="section-padding bg-zinc-50"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 text-zinc-900 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Resultados
          </h2>
          <p
            className={`text-lg text-zinc-600 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Números reais de alunos que transformaram seu inglês
          </p>
        </div>

        {/* Metrics - CORREÇÃO DE RESPONSIVIDADE AQUI */}
        <div
          // Alterado de 'grid-cols-3' para 'grid-cols-1 sm:grid-cols-3'
          // No celular fica 1 coluna, no tablet/PC ficam 3
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-6 rounded-xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <metric.icon size={24} className="text-primary" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-semibold text-zinc-900 mb-2">
                {metric.value}
              </div>
              <div className="text-base text-zinc-600 font-medium">{metric.label}</div>
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
              className="card-elevated bg-white p-6 lg:p-8 border border-zinc-100"
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <Quote size={24} className="text-primary/20 mb-4" />
              <p className="text-zinc-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
                  <span className="font-bold text-lg text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-zinc-900">{testimonial.name}</div>
                  <div className="text-sm text-zinc-500">{testimonial.context}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div
          className={`rounded-2xl bg-white border border-zinc-200 shadow-sm p-8 lg:p-12 transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-medium mb-8 text-center text-zinc-900">
            {caseStudy.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center md:text-left relative">
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wider mb-4 border border-zinc-200">
                Antes
              </div>
              <p className="text-zinc-600 leading-relaxed">{caseStudy.before}</p>
            </div>
            
            <div className="text-center md:text-left relative">
              {/* Seta visual para desktop */}
              <div className="hidden md:block absolute -left-6 top-12 text-zinc-300">→</div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                Processo
              </div>
              <p className="text-zinc-600 leading-relaxed">{caseStudy.process}</p>
            </div>

            <div className="text-center md:text-left relative">
              <div className="hidden md:block absolute -left-6 top-12 text-zinc-300">→</div>
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider mb-4">
                Resultado
              </div>
              <p className="text-zinc-900 font-medium leading-relaxed">{caseStudy.after}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}