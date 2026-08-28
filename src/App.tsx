import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import AulasParticulares from "./pages/AulasParticulares";
import Conversacao from "./pages/Conversacao";
import InglesCarreira from "./pages/InglesCarreira";
import ApoioAcademico from "./pages/ApoioAcademico";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Ao abrir uma página nova (PUSH) o leitor começa do topo.
 * No voltar (POP) a posição anterior é preservada pelo navegador.
 */
function ScrollManager() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, navigationType]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aulas-particulares" element={<AulasParticulares />} />
          <Route path="/conversacao" element={<Conversacao />} />
          <Route path="/ingles-carreira" element={<InglesCarreira />} />
          <Route path="/apoio-academico" element={<ApoioAcademico />} />
          {/* Rotas novas sempre acima do catch-all "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
