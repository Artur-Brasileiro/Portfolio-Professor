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
          {/* Card direto: Mudado de Bege (#FBF6D8) para Cinza Suave (zinc-50) com borda */}
          <div className="rounded-[22px] bg-zinc-50 border border-zinc-200/60 p-6 sm:p-8 lg:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* ESQUERDA */}
              <div className="text-center lg:text-left">
                {/* Título: Mudado de Marrom (#6B4E2E) para Preto (zinc-900) */}
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight text-zinc-900">
                  Aprenda inglês de um jeito{' '}
                  {/* Destaque: Mudado de Rosa (#FF6B6B) para Primary (Vermelho) */}
                  <span className="text-primary">leve e direto ao ponto.</span>
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Aulas focadas em conversação, confiança e resultados reais — do básico ao avançado.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  {/* Botão Principal: Vermelho (Primary) */}
                  <Button 
                    className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-bold font-montserrat text-base shadow-sm"
                    onClick={() => scrollToSection('#contato')}
                  >
                    Agendar aula agora
                  </Button>
                  
                  {/* Botão Secundário: Branco com borda (Outline) */}
                  <Button 
                    variant="outline"
                    className="rounded-xl border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 h-12 px-8 font-bold font-montserrat text-base"
                    onClick={() => scrollToSection('#metodologia')}
                  >
                    Ver metodologia
                  </Button>
                </div>

                {/* Highlights */}
                <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
                  {highlights.map((item) => (
                    <div 
                      key={item.label} 
                      // Chips agora são brancos para contrastar com o fundo cinza do card
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white border border-zinc-200 text-zinc-700 shadow-sm"
                    >
                      <item.icon size={16} className="text-primary" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DIREITA */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[520px]">
                  {/* Moldura da foto: Branca com sombra suave */}
                  <div className="rounded-[24px] bg-white p-2 sm:p-3 shadow-sm border border-zinc-100">
                    <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] sm:aspect-[5/6] bg-zinc-100">
                      <img
                        src="professor.jpeg"
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