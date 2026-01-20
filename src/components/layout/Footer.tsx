import { Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#aulas', label: 'Aulas' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-10">
          {/* Bio */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-medium mb-4">
              Rodrigo Almeida
            </h3>
            <p className="text-background/70 mb-4">
              Instrutor de língua inglesa focado em gramática, sintaxe e contexto cultural.
              Venturosa, PE — Aulas online para todo o Brasil.
            </p>
            <p className="text-background/70 text-sm">
              Pronto para aprofundar seu conhecimento no inglês?
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Links rápidos</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-medium mb-4">Redes sociais</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm"
            >
              Agendar aula
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>
            © {new Date().getFullYear()} Rodrigo Almeida. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}