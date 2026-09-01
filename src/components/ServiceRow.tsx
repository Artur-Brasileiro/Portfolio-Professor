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

        {/*
          A seta era `text-rule-strong`: #C9BFAD sobre papel #F7F3EC dá 1.6:1
          — decoração, não sinal, justo no único elemento que diz "isto abre".
          Agora é um alvo de 36px com filete e seta na tinta do acento. Em
          repouso — o único estado que existe no celular — a seta fica entre
          4.7:1 e 7.3:1 e o filete entre 5.2:1 e 8.3:1. Hover e toque enchem
          o disco de acento sólido e a seta vira papel.
        */}
        <span
          className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[hsl(var(--accent-ink))] bg-[hsl(var(--accent-ink)/0.08)] text-[hsl(var(--accent-ink))] transition-colors duration-200 group-hover:bg-[hsl(var(--accent-ink))] group-hover:text-paper group-active:bg-[hsl(var(--accent-ink))] group-active:text-paper"
          aria-hidden="true"
        >
          <ArrowRight
            className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-x-[1px]"
            strokeWidth={2}
          />
        </span>
      </Link>

      {!last && <hr className="rule-line" />}
    </motion.li>
  );
}
