import { cn } from "@/lib/utils";

/**
 * Divisor ornamental de latão: filete — losango — filete.
 * Substitui as bordas grossas do desenho antigo como marca de fim de seção.
 */
export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-rule-strong" />
      <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-rule-strong" />
    </div>
  );
}
