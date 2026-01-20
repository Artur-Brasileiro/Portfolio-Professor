import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { MessageCircle, Calendar, Instagram, Linkedin, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView<HTMLElement>();
  const [formData, setFormData] = useState({ name: '', contact: '', objective: '' });
  const [errors, setErrors] = useState<{ name?: string; contact?: string; objective?: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Por favor, digite seu nome';
    if (!formData.contact.trim()) newErrors.contact = 'Por favor, digite seu WhatsApp ou e-mail';
    if (!formData.objective.trim()) newErrors.objective = 'Conte um pouco sobre seu objetivo';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would normally send the form data
      setShowSuccess(true);
      setFormData({ name: '', contact: '', objective: '' });
    }
  };

  const handleWhatsApp = () => {
    // Link direto para o WhatsApp do Rodrigo
    window.open('https://wa.me/5581998649500', '_blank');
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
              Contato
            </h2>
            <p
              className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Pronto para evoluir seu inglês? Vamos conversar!
            </p>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Contact Form */}
            <div className="card-elevated p-6 lg:p-8">
              <h3 className="font-display text-xl font-medium mb-6">
                Envie uma mensagem
              </h3>

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
                  <Label htmlFor="contact" className="mb-2 block">WhatsApp ou E-mail</Label>
                  <Input
                    id="contact"
                    placeholder="(81) 99864-9500 ou email@exemplo.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className={errors.contact ? 'border-destructive' : ''}
                  />
                  {errors.contact && (
                    <p className="text-sm text-destructive mt-1">{errors.contact}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="objective" className="mb-2 block">Qual seu objetivo com o inglês?</Label>
                  <Textarea
                    id="objective"
                    placeholder="Ex: Quero melhorar minha gramática e pronúncia..."
                    rows={4}
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    className={errors.objective ? 'border-destructive' : ''}
                  />
                  {errors.objective && (
                    <p className="text-sm text-destructive mt-1">{errors.objective}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar mensagem
                </Button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-medium mb-4">
                  Prefere um contato direto?
                </h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start gap-3 h-auto py-4"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle size={24} className="text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Chamar no WhatsApp</div>
                      <div className="text-sm text-muted-foreground">+55 81 99864-9500</div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start gap-3 h-auto py-4"
                    onClick={() => setShowSchedule(true)}
                  >
                    <Calendar size={24} className="text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Agendar horário</div>
                      <div className="text-sm text-muted-foreground">Escolha o melhor dia e hora</div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-display text-lg font-medium mb-4">
                  Redes sociais
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent className="sm:max-w-md text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Mensagem enviada!</DialogTitle>
              <DialogDescription className="text-base">
                Obrigado pelo contato! Responderei o mais rápido possível através do email rodrigoformalidades@gmail.com ou WhatsApp.
              </DialogDescription>
            </DialogHeader>
            <Button className="w-full mt-4" onClick={() => setShowSuccess(false)}>
              Fechar
            </Button>
          </DialogContent>
        </Dialog>

        {/* Schedule Modal */}
        <Dialog open={showSchedule} onOpenChange={setShowSchedule}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Agendar horário</DialogTitle>
              <DialogDescription className="text-base">
                Escolha o melhor horário para sua aula.
              </DialogDescription>
            </DialogHeader>
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-4">
                Integração com agenda online
              </p>
              <code className="text-sm bg-muted px-4 py-2 rounded-lg text-muted-foreground">
                [link do Calendly ou Google Calendar]
              </code>
            </div>
            <Button className="w-full" onClick={() => setShowSchedule(false)}>
              Fechar
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}