import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Instagram, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView<HTMLElement>();
  const [formData, setFormData] = useState({ name: '', objective: '' });
  const [errors, setErrors] = useState<{ name?: string; objective?: string }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Por favor, digite seu nome';
    if (!formData.objective.trim()) newErrors.objective = 'Conte um pouco sobre seu objetivo';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppDirect = () => {
    window.open('https://wa.me/5581998649500', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const text = `Olá! Meu nome é *${formData.name}*.\n\nMeu objetivo com o inglês é: _${formData.objective}_\n\nGostaria de saber mais sobre as aulas!`;
      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/5581998649500?text=${encodedText}`, '_blank');
      setFormData({ name: '', objective: '' });
    }
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Entre em Contato
            </h2>
            <p
              className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Pronto para destravar seu inglês? Vamos agendar sua aula experimental!
            </p>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Opção 1: Formulário */}
            <div className="card-elevated p-6 lg:p-8">
              <h3 className="font-display text-xl font-medium mb-2">
                Já quer adiantar o assunto?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Preencha abaixo e já inicie a conversa no WhatsApp com seus objetivos definidos.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="objective" className="mb-2 block">Qual seu objetivo principal?</Label>
                  <Textarea
                    id="objective"
                    placeholder="Ex: Preciso de inglês para trabalho, viagem, ou apenas conversação..."
                    rows={4}
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    className={errors.objective ? 'border-destructive' : ''}
                  />
                  {errors.objective && (
                    <p className="text-sm text-destructive mt-1">{errors.objective}</p>
                  )}
                </div>

                <Button type="submit" className="w-full gap-2" size="lg">
                  <MessageCircle size={20} />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>

            {/* Opção 2: Links Diretos */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="font-display text-xl font-medium mb-4">
                  Prefere falar diretamente?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Se preferir, pode me chamar direto sem preencher formulário, ou enviar um e-mail.
                </p>
                
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    size="lg"
                    // MUDANÇA AQUI: Cores fixas do WhatsApp no hover para garantir contraste
                    className="w-full justify-start gap-4 h-auto py-5 px-6 border-input hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all group"
                    onClick={handleWhatsAppDirect}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageCircle size={20} className="text-[#25D366]" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-base text-foreground">WhatsApp</div>
                      <div className="text-sm text-muted-foreground group-hover:text-[#25D366] transition-colors">
                        (81) 99864-9500
                      </div>
                    </div>
                  </Button>

                  <a 
                    href="mailto:rodrigoformalidades@gmail.com"
                    className="flex items-center gap-4 w-full p-5 rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition-all group"
                  >
                     <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail size={20} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-base">E-mail</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">
                        rodrigoformalidades@gmail.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-display text-lg font-medium mb-4">
                  Me acompanhe também
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}