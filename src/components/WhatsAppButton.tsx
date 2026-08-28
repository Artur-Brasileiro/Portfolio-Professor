import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  className?: string;
  /** Variante compacta para a barra fixa de rodapé. */
  compact?: boolean;
}

/**
 * CTA principal. Verde profundo de tinta (#0E7A3F) em vez do verde-marca
 * saturado: mantém 5.4:1 com o texto branco e não briga com o papel.
 */
export function WhatsAppButton({
  message,
  label = "Agendar no WhatsApp",
  className,
  compact = false,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex w-full items-center justify-center gap-2.5",
        "bg-whatsapp text-paper-raised",
        "font-body font-semibold tracking-tight",
        "transition-[background-color,transform] duration-200 ease-out",
        "hover:bg-[hsl(147_79%_23%)] active:scale-[0.985]",
        compact ? "h-12 rounded-sm text-[0.9375rem]" : "h-14 rounded-sm text-[1.0625rem]",
        className,
      )}
    >
      <MessageCircle
        className={compact ? "h-[18px] w-[18px]" : "h-5 w-5"}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      {label}
    </a>
  );
}
