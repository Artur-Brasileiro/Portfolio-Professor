import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { User, MessageCircle, Briefcase, GraduationCap, Clock, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Aulas particulares',
    audience: 'Para quem quer atenção 100% focada nos seus objetivos',
    duration: '50 min',
    benefit: 'Evolução rápida com plano personalizado e feedback constante.',
  },
  {
    icon: MessageCircle,
    title: 'Conversação',
    audience: 'Para quem já tem base e quer destravar a fala',
    duration: '50 min',
    benefit: 'Ganhe fluência e confiança em situações reais do dia a dia.',
  },
  {
    icon: Briefcase,
    title: 'Inglês para entrevistas e trabalho',
    audience: 'Para profissionais que precisam do inglês na carreira',
    duration: '50-60 min',
    benefit: 'Prepare-se para entrevistas, reuniões e apresentações em inglês.',
  },
  {
    icon: GraduationCap,
    title: 'Reforço escolar',
    audience: 'Para estudantes que precisam de apoio acadêmico',
    duration: '50 min',
    benefit: 'Melhore suas notas e construa uma base sólida no idioma.',
  },
];

export function Services() {
  const [ref, isInView] = useInView<HTMLElement>();

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="aulas"
      ref={ref}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Classes
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Encontre o formato ideal para seus objetivos
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated p-6 lg:p-8 flex flex-col h-full"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <service.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-1">{service.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                <span className="font-medium text-foreground">Para quem:</span> {service.audience}
              </p>

              <p className="text-muted-foreground mb-6 flex-grow">
                {service.benefit}
              </p>

              <Button
                variant="card"
                className="w-full justify-between"
                onClick={scrollToContact}
              >
                Quero saber mais
                <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
