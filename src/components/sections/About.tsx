import { useInView } from '@/hooks/useInView';
import { Clock, Users, MessageSquare, Star } from 'lucide-react';

const stats = [
  { icon: Clock, label: 'Experiência', value: '+4 anos ensinando inglês' },
  { icon: Users, label: 'Público', value: 'Adultos, estudantes e profissionais' },
  { icon: MessageSquare, label: 'Abordagem', value: 'Gramática, sintaxe e cultura' },
  { icon: Star, label: 'Diferencial', value: 'Foco em cultura e contexto real' },
];

const values = [
  {
    title: 'Proficiência Digital',
    description: 'Utilizo ferramentas digitais modernas para facilitar seu aprendizado, seja remoto ou híbrido.',
  },
  {
    title: 'Contexto Cultural',
    description: 'Não é só gramática. Você vai entender as nuances culturais e sociais da língua inglesa.',
  },
  {
    title: 'Adaptabilidade',
    description: 'Aulas avaliadas constantemente para garantir que o ritmo esteja ideal para você.',
  },
];

export function About() {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section
      id="sobre"
      ref={ref}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Sobre mim
          </h2>

          <div
            className={`space-y-4 text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p>
              Olá! Sou <strong className="text-foreground">Rodrigo Almeida</strong>, instrutor de inglês e estudante de Letras, com mais de <strong className="text-foreground">4 anos de experiência</strong> ajudando alunos a evoluírem com clareza e segurança.
            </p>
            <p>
              Meu ensino vai além de <strong className="text-foreground">"decorar regras"</strong>: eu trabalho gramática e sintaxe de forma organizada, sempre conectando o conteúdo ao uso real do idioma — com atenção às nuances culturais que fazem diferença na compreensão e na comunicação.
            </p>
            <p>
              Também tenho facilidade com ferramentas digitais e pesquisa, o que me permite criar aulas bem estruturadas e materiais atualizados, alinhados com situações do dia a dia, temas atuais e objetivos específicos de cada aluno.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-muted/50 border border-border/50"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <stat.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-medium text-center mb-10">
            Valores de ensino
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-elevated p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-display text-xl font-medium mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}