import { useInView } from '@/hooks/useInView';

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
      // Mudado para bg-zinc-900 (Preto/Cinza Escuro)
      className="relative overflow-hidden bg-zinc-900 text-zinc-100"
    >
      {/* Conteúdo */}
      <div className="container-custom py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2
            // Título Branco
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 text-white transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Sobre mim
          </h2>

          <div
            // Texto cinza claro (zinc-300) para leitura confortável no fundo escuro
            className={`space-y-4 text-lg text-zinc-300 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p>
              Olá! Sou <strong className="text-primary font-bold">Rodrigo Almeida</strong>, instrutor de inglês e estudante de Letras,
              com mais de <strong className="text-primary font-bold">4 anos de experiência</strong> ajudando alunos a evoluírem com
              clareza e segurança.
            </p>

            <p>
              Meu ensino vai além de <strong className="text-primary font-bold">"decorar regras"</strong>: eu trabalho gramática e
              sintaxe de forma organizada, sempre conectando o conteúdo ao uso real do idioma — com atenção às nuances
              culturais que fazem diferença na compreensão e na comunicação.
            </p>

            <p>
              Também tenho facilidade com ferramentas digitais e pesquisa, o que me permite criar aulas bem estruturadas
              e materiais atualizados, alinhados com situações do dia a dia, temas atuais e objetivos específicos de cada
              aluno.
            </p>
          </div>
        </div>

        {/* Values */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3
            className="font-display text-2xl sm:text-3xl font-medium text-center mb-10 text-white"
          >
            Valores de ensino
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                // Cards escuros (zinc-800/50) com borda sutil
                className="rounded-2xl border border-zinc-700/50 bg-zinc-800/30 backdrop-blur-sm p-7 text-center shadow-lg hover:bg-zinc-800/50 transition-colors"
              >
                {/* Círculo do número: Fundo vermelho bem transparente */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <span
                    // Número Vermelho
                    className="text-2xl font-display font-semibold text-primary"
                  >
                    {index + 1}
                  </span>
                </div>

                <h4 className="font-display text-xl font-medium mb-3 text-white">
                  {value.title}
                </h4>

                <p className="text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Onda no final - Mantém branca para conectar com a próxima seção clara */}
      <div className="absolute left-0 right-0 bottom-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full h-[70px] md:h-[90px] drop-shadow-[0_-10px_18px_rgba(0,0,0,0.3)]" // Sombra ajustada para o fundo escuro
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="
              M0,64
              C30,88 60,88 90,64
              C120,40 150,40 180,64
              C210,88 240,88 270,64
              C300,40 330,40 360,64
              C390,88 420,88 450,64
              C480,40 510,40 540,64
              C570,88 600,88 630,64
              C660,40 690,40 720,64
              C750,88 780,88 810,64
              C840,40 870,40 900,64
              C930,88 960,88 990,64
              C1020,40 1050,40 1080,64
              C1110,88 1140,88 1170,64
              C1200,40 1230,40 1260,64
              C1290,88 1320,88 1350,64
              C1380,40 1410,40 1440,64
              L1440,120 L0,120 Z
            "
          />
        </svg>
      </div>
    </section>
  );
}