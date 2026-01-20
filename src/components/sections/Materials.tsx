import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Calendar, Mic, Book, Briefcase, ListChecks, Headphones, X } from 'lucide-react';

const materials = [
  {
    icon: Calendar,
    title: 'Plano de estudos semanal',
    description: 'Um cronograma personalizado para organizar sua rotina de estudos de forma realista.',
    objective: 'Criar consistência nos estudos sem sobrecarga',
    audience: 'Todos os níveis',
    usage: '15-30 minutos diários',
  },
  {
    icon: Mic,
    title: 'Material de pronúncia',
    description: 'Exercícios focados nos sons mais desafiadores do inglês para brasileiros.',
    objective: 'Melhorar clareza e naturalidade na fala',
    audience: 'Iniciante a intermediário',
    usage: '20 minutos por sessão',
  },
  {
    icon: Book,
    title: 'Aula sobre phrasal verbs',
    description: 'Os phrasal verbs mais usados no dia a dia, com exemplos práticos e exercícios.',
    objective: 'Dominar expressões essenciais do inglês falado',
    audience: 'Intermediário',
    usage: 'Aula de 50 minutos + exercícios',
  },
  {
    icon: Briefcase,
    title: 'Simulação de entrevista',
    description: 'Roteiro completo com perguntas típicas e dicas de como responder com confiança.',
    objective: 'Preparar para entrevistas em inglês',
    audience: 'Intermediário a avançado',
    usage: 'Prática de 1-2 horas',
  },
  {
    icon: ListChecks,
    title: 'Lista de vocabulário por tema',
    description: 'Vocabulário organizado por contextos: viagem, trabalho, alimentação, etc.',
    objective: 'Expandir vocabulário de forma organizada',
    audience: 'Todos os níveis',
    usage: 'Consulta e revisão contínuas',
  },
  {
    icon: Headphones,
    title: 'Exercícios de listening',
    description: 'Áudios selecionados com exercícios de compreensão para treinar o ouvido.',
    objective: 'Melhorar compreensão auditiva',
    audience: 'Iniciante a avançado',
    usage: '15-20 minutos por exercício',
  },
];

export function Materials() {
  const [ref, isInView] = useInView<HTMLElement>();
  const [selectedMaterial, setSelectedMaterial] = useState<typeof materials[0] | null>(null);

  return (
    <section
      id="materiais"
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
            Materials
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Conheça alguns dos materiais utilizados nas aulas
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {materials.map((material, index) => (
            <button
              key={material.title}
              onClick={() => setSelectedMaterial(material)}
              className="card-elevated p-6 text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <material.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                {material.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {material.description}
              </p>
            </button>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedMaterial} onOpenChange={() => setSelectedMaterial(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl flex items-center gap-3">
                {selectedMaterial && (
                  <>
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <selectedMaterial.icon size={20} className="text-primary" />
                    </div>
                    {selectedMaterial.title}
                  </>
                )}
              </DialogTitle>
              <DialogDescription className="text-base pt-4">
                {selectedMaterial?.description}
              </DialogDescription>
            </DialogHeader>

            {selectedMaterial && (
              <div className="space-y-4 pt-2">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Objetivo:</span>{' '}
                      <span className="text-muted-foreground">{selectedMaterial.objective}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Para quem:</span>{' '}
                      <span className="text-muted-foreground">{selectedMaterial.audience}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Duração/Uso:</span>{' '}
                      <span className="text-muted-foreground">{selectedMaterial.usage}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full" onClick={() => setSelectedMaterial(null)}>
                    Fechar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
