import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Ornament } from "@/components/Ornament";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="safe-top flex min-h-dvh items-center">
      <div className="column py-16 text-center">
        <hr className="rule-kicker mx-auto" />
        <p className="kicker mt-4 text-brass-ink">Erro 404</p>

        <h1 className="mt-5 font-display text-display-sm font-semibold">
          Página não encontrada
        </h1>

        <p className="mt-4 text-lede text-ink-muted">
          O endereço que você abriu não existe — talvez o link esteja desatualizado.
        </p>

        <Ornament className="mt-10" />

        <Link
          to="/"
          className="press tap-44 mt-8 inline-flex items-center gap-2 rounded-sm border border-rule-strong px-5 py-3"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          <span className="kicker text-ink">Voltar ao início</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
