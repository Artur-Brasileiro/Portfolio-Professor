import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Home' },
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#metodologia', label: 'Metodologia' }, // Corrigido para português
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
              'bg-white',
              'px-5 md:px-6',
              'transition-all duration-300',
              isScrolled ? 'shadow-sm border-zinc-200' : 'shadow-none border-zinc-200',
            ].join(' ')}
          >
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="text-lg md:text-xl font-semibold tracking-tight text-amber-900 hover:opacity-90"
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
                    className="text-[15px] font-extrabold font-montserrat text-amber-900/90 hover:text-amber-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <Button
                onClick={() => scrollToSection('#contato')}
                className="rounded-xl bg-rose-400 hover:bg-rose-500 text-white font-extrabold font-montserrat px-5"
              >
                Agendar aula
              </Button>
            </div>

            {/* Mobile: CTA + botão do menu (hamburguer) */}
            <div className="flex md:hidden items-center">
              <button
                className="p-2 rounded-xl hover:bg-zinc-100 transition-colors text-amber-900"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
              <div className="py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-5 py-3 text-sm font-extrabold font-montserrat text-amber-900/90 hover:bg-zinc-50"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="px-5 pb-4 pt-2">
                  <Button
                    onClick={() => scrollToSection('#contato')}
                    className="rounded-xl bg-rose-400 hover:bg-rose-500 text-white font-extrabold font-montserrat px-5"
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