import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Home' },
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função unificada de scroll com compensação do menu
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 25; // Altura do header para não cobrir o título
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-4 pt-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={[
              'flex items-center justify-between',
              'h-14 md:h-16',
              'rounded-2xl border',
              'bg-white/95 backdrop-blur-sm', // Adicionei um leve blur e transparência para modernizar
              'px-5 md:px-6',
              'transition-all duration-300',
              isScrolled ? 'shadow-sm border-zinc-200' : 'shadow-none border-zinc-100', // Bordas cinza
            ].join(' ')}
          >
            {/* Logo - Mudado para Preto (zinc-900) */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="text-lg md:text-xl font-semibold tracking-tight text-zinc-900 hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Rodrigo Almeida
            </a>

            {/* Desktop: menu + CTA juntos */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    // Mudado para Cinza Escuro (zinc-700) com hover Preto
                    className="text-[15px] font-extrabold font-montserrat text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <Button
                onClick={() => scrollToSection('#contato')}
                // Mudado para Primary (Vermelho definido no CSS)
                className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold font-montserrat px-5 shadow-sm hover:shadow-md transition-all"
              >
                Agendar aula
              </Button>
            </div>

            {/* Mobile: CTA + botão do menu (hamburguer) */}
            <div className="flex md:hidden items-center">
              <button
                // Mudado para Cinza (zinc-900) e hover cinza claro (zinc-100)
                className="p-2 rounded-xl hover:bg-zinc-100 transition-colors text-zinc-900"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 rounded-2xl border border-zinc-200 bg-white shadow-lg overflow-hidden animate-fade-in">
              <div className="py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    // Mudado para Cinza Escuro e Hover Cinza Claro
                    className="block px-5 py-3 text-sm font-extrabold font-montserrat text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="px-5 pb-4 pt-2">
                  <Button
                    onClick={() => scrollToSection('#contato')}
                    // Mudado para Primary (Vermelho)
                    className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold font-montserrat px-5"
                  >
                    Garantir minha vaga
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}