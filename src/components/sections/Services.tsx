import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { User, MessageCircle, Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Aulas particulares',
    audience: 'Quem busca foco total e personalização', // Texto levemente encurtado para caber na tag
    benefit: 'Evolução rápida com plano 100% adaptado ao seu ritmo e objetivos específicos.',
  },
  {
    icon: MessageCircle,
    title: 'Conversação',
    audience: 'Quem já tem base e quer destravar',
    benefit: 'Ganhe fluência, melhore a pronúncia e perca o medo de falar em situações reais.',
  },
  {
    icon: Briefcase,
    title: 'Inglês para Carreira', // Mudei levemente o título
    audience: 'Profissionais e preparação para entrevistas',
    benefit: 'Domine o vocabulário corporativo para reuniões, apresentações e processos seletivos.',
  },
  {
    icon: GraduationCap,
    title: 'Apoio Acadêmico',
    audience: 'Estudantes (Escola ou Faculdade)',
    benefit: 'Reforço escolar, preparação para provas e construção de uma base gramatical sólida.',
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
      // Fundo branco (bg-white)
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 text-zinc-900 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Formatos de aula
          </h2>
          <p
            className={`text-lg text-zinc-600 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Escolha a modalidade ideal para o seu momento
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
              // Card com borda cinza e hover shadow
              className="group relative flex flex-col p-6 lg:p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Header do Card */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {/* Ícone Vermelho (Primary) */}
                  <service.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-zinc-900 mb-2">
                    {service.title}
                  </h3>
                  {/* Badge para substituir o relógio/duração */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 text-xs font-bold text-zinc-600 uppercase tracking-wide">
                    {service.audience}
                  </div>
                </div>
              </div>

              {/* Corpo (Benefício) */}
              <div className="mb-8 flex-grow">
                <p className="text-zinc-600 leading-relaxed text-lg">
                  {service.benefit}
                </p>
              </div>

              {/* Botão */}
              <div className="mt-auto pt-6 border-t border-zinc-100">
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:bg-zinc-50 text-zinc-900 font-bold group-hover:text-primary transition-colors px-0 hover:px-4"
                  onClick={scrollToContact}
                >
                  Saber mais
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}