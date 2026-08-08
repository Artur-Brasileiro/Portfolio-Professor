import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AulasParticulares from "./pages/AulasParticulares";
import Conversacao from "./pages/Conversacao";
import InglesCarreira from "./pages/InglesCarreira";
import ApoioAcademico from "./pages/ApoioAcademico";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      {/* ADICIONADO AQUI: A prop 'future' para remover os avisos amarelos */}
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aulas-particulares" element={<AulasParticulares />} />
          <Route path="/conversacao" element={<Conversacao />} />
          <Route path="/ingles-carreira" element={<InglesCarreira />} />
          <Route path="/apoio-academico" element={<ApoioAcademico />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;