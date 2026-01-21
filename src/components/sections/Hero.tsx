import { Button } from '@/components/ui/button';
import { MessageCircle, Mic, Briefcase } from 'lucide-react';

const highlights = [
  { icon: MessageCircle, label: 'Conversação' },
  { icon: Mic, label: 'Pronúncia' },
  { icon: Briefcase, label: 'Inglês para trabalho' },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="pt-24 pb-12">
      {/* Mesmo envelope do header */}
      <div className="px-4 pt-4">
        <div className="max-w-6xl mx-auto">
          {/* Card direto (sem borda externa e sem espaço branco) */}
          <div className="rounded-[22px] bg-[#FBF6D8] p-6 sm:p-8 lg:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* ESQUERDA */}
              <div className="text-center lg:text-left">
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight text-[#6B4E2E]">
                  Aprenda inglês de um jeito{' '}
                  <span className="text-[#FF6B6B]">leve e direto ao ponto.</span>
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-zinc-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Aulas focadas em conversação, confiança e resultados reais — do básico ao avançado.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="hero" onClick={() => scrollToSection('#contato')}>
                    Agendar aula experimental
                  </Button>
                  <Button variant="heroOutline" onClick={() => scrollToSection('#metodologia')}>
                    Ver metodologia
                  </Button>
                </div>

                {/* Highlights */}
                <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
                  {highlights.map((item) => (
                    <div key={item.label} className="chip flex items-center gap-2">
                      <item.icon size={16} className="text-primary" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DIREITA */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[520px]">
                  {/* Moldura da foto (pode manter, não é borda do card) */}
                  <div className="rounded-[24px] bg-white/60 p-2 sm:p-3">
                    <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] sm:aspect-[5/6] bg-zinc-200">
                      <img
                        src="professor.jpg"
                        alt="Professor"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* FIM */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
