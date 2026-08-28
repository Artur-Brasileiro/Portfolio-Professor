import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceEntry } from "@/lib/site";
import { EASE_OUT } from "@/lib/motion";

interface ServiceRowProps {
  service: ServiceEntry;
  /** Último item não desenha o filete inferior — a seção já fecha. */
  last?: boolean;
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

/**
 * Linha do índice editorial. Substitui o card colorido do desenho antigo:
 * a hierarquia vem do numeral, do peso tipográfico e do filete — não da cor.
 */
export function ServiceRow({ service, last = false }: ServiceRowProps) {
  const { ordinal, slug, title, kicker, blurb, accent } = service;

  return (
    <motion.li variants={item} style={{ ["--accent-ink" as string]: accent }}>
      <Link
        to={slug}
        className="press group -mx-3 grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-3 rounded-sm px-3 py-5"
      >
        <span
          className="numeral pt-[0.1rem] text-[1.375rem] leading-none text-rule-strong transition-colors duration-200 group-hover:text-[hsl(var(--accent-ink))]"
          aria-hidden="true"
        >
          {ordinal}
        </span>

        <span className="min-w-0">
          <span className="kicker block text-[hsl(var(--accent-ink))]">{kicker}</span>
          <span className="mt-1.5 block font-display text-title font-semibold text-ink">
            {title}
          </span>
          <span className="mt-1.5 block text-caption text-ink-muted">{blurb}</span>
        </span>

        <ArrowRight
          className="mt-1 h-[18px] w-[18px] shrink-0 text-rule-strong transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--accent-ink))]"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </Link>

      {!last && <hr className="rule-line" />}
    </motion.li>
  );
}
