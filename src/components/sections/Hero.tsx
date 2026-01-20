import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Image, MessageCircle, Mic, Briefcase } from 'lucide-react';

const highlights = [
  { icon: MessageCircle, label: 'Conversação' },
  { icon: Mic, label: 'Pronúncia' },
  { icon: Briefcase, label: 'Inglês para trabalho' },
];

export function Hero() {
  const [mediaType, setMediaType] = useState<'video' | 'photo'>('video');

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 pb-12 md:pt-24"
      style={{ background: 'var(--hero-gradient)' }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-6 animate-fade-up">
              Aprenda inglês de um jeito{' '}
              <span className="text-gradient">leve e direto ao ponto.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-100">
              Aulas focadas em conversação, confiança e resultados reais — do básico ao avançado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-up animation-delay-200">
              <Button
                variant="hero"
                onClick={() => scrollToSection('#contato')}
              >
                Agendar aula experimental
              </Button>
              <Button
                variant="heroOutline"
                onClick={() => scrollToSection('#metodologia')}
              >
                Ver metodologia
              </Button>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up animation-delay-300">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="chip flex items-center gap-2"
                >
                  <item.icon size={16} className="text-primary" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Media Container */}
          <div className="order-1 lg:order-2 animate-fade-up animation-delay-200">
            {/* Toggle */}
            <div className="flex justify-center lg:justify-end mb-4">
              <div className="inline-flex rounded-full bg-muted p-1">
                <button
                  onClick={() => setMediaType('video')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    mediaType === 'video'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Play size={16} />
                  Vídeo
                </button>
                <button
                  onClick={() => setMediaType('photo')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    mediaType === 'photo'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Image size={16} />
                  Foto
                </button>
              </div>
            </div>

            {/* Media Display */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-2xl">
              {mediaType === 'video' ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-muted to-accent p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Play size={32} className="text-primary ml-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Embed de vídeo (YouTube/Vimeo)
                  </p>
                  <code className="text-xs bg-background/50 px-3 py-1.5 rounded-full text-muted-foreground">
                    [link do vídeo]
                  </code>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-muted to-accent p-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Image size={48} className="text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Foto do professor
                  </p>
                  <code className="text-xs bg-background/50 px-3 py-1.5 rounded-full text-muted-foreground">
                    [foto]
                  </code>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
