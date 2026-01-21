export function Footer() {
  return (
    <footer className="bg-foreground text-background py-6">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <h3 className="font-display text-lg font-medium">
            Rodrigo Almeida
          </h3>

          <p className="text-background/70 text-sm leading-relaxed">
            Instrutor de inglês focado em conversação e destravar seu potencial no idioma
            <span className="hidden sm:inline"> </span>
            <span className="block sm:inline">
              — Aulas online para todo o Brasil
            </span>
          </p>

          <div className="pt-3 border-t border-background/10 text-xs text-background/50">
            © {new Date().getFullYear()} Rodrigo Almeida. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
