import { Instagram, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ServiceRow } from "@/components/ServiceRow";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Ornament } from "@/components/Ornament";
import { PROFESSOR, SERVICES, HOME_WHATSAPP_MESSAGE } from "@/lib/site";
import { EASE_OUT } from "@/lib/motion";

const SOCIALS = [
  { href: PROFESSOR.instagram, icon: Instagram, label: "Instagram", external: true },
  { href: PROFESSOR.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
  { href: `mailto:${PROFESSOR.email}`, icon: Mail, label: "E-mail", external: false },
];

const Index = () => {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.055, delayChildren: 0.05 } },
  };

  const block = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
      };

  /*
   * A capa entra só com opacidade, num tempo mais longo que os demais blocos.
   * Sem `scale`: a foto sangra na largura toda, então qualquer zoom a faria
   * transbordar a viewport e criar rolagem horizontal no celular.
   */
  const photo = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.85, ease: EASE_OUT } },
      };

  return (
    <main className="min-h-dvh safe-top">
      <motion.div
        className="column pb-14 pt-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* ── Capa ────────────────────────────────────────────── */}
        <motion.header variants={block}>
          <div className="flex items-center gap-3">
            <span className="h-px w-7 shrink-0 bg-brass" aria-hidden="true" />
            <p className="kicker text-brass-ink">{PROFESSOR.role}</p>
          </div>
        </motion.header>

        <motion.div variants={block} className="mt-6">
          {/*
            A foto sangra até as bordas da coluna (-mx-6 anula o padding) e
            dissolve no papel. `isolate` prende a mesclagem do banho de latão
            dentro da moldura, sem vazar para a página.
          */}
          <motion.div
            variants={photo}
            className="photo-bleed relative -mx-6 aspect-[4/5] isolate overflow-hidden"
          >
            <img
              src={PROFESSOR.photo}
              alt={`${PROFESSOR.name}, professor de inglês`}
              fetchPriority="high"
              className="photo-tone absolute h-auto max-w-none"
              style={{
                width: PROFESSOR.photoCrop.zoom,
                left: PROFESSOR.photoCrop.x,
                top: PROFESSOR.photoCrop.y,
              }}
            />
            <span
              className="absolute inset-0 bg-brass/10 mix-blend-multiply"
              aria-hidden="true"
            />
          </motion.div>

          {/* O nome sobe por cima da dissolvida — o gesto de capa de revista. */}
          <h1 className="relative -mt-24 font-display text-[clamp(3rem,15vw,3.75rem)] leading-[0.92] tracking-[-0.035em]">
            <span className="block font-normal text-ink">{PROFESSOR.firstName}</span>
            <span className="block font-semibold italic text-brass-ink">
              {PROFESSOR.lastName}
            </span>
          </h1>
        </motion.div>

        <motion.div variants={block} className="mt-6">
          <p className="text-lede text-ink-muted">
            Você fala <span className="ink-underline text-ink">desde a primeira aula</span>.
            Sem decoreba, sem vergonha, no seu ritmo.
          </p>

          <ul className="kicker mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-ink-muted">
            {["100% online", "Do zero ao avançado", "Pix ou cartão"].map((fact, i) => (
              <li key={fact} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-1 w-1 rotate-45 bg-brass" aria-hidden="true" />
                )}
                {fact}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Índice de serviços ──────────────────────────────── */}
        <motion.section variants={block} className="mt-12" aria-labelledby="indice">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="indice" className="kicker font-body text-ink-muted">
              Escolha por onde começar
            </h2>
            <span className="numeral text-caption text-rule-strong" aria-hidden="true">
              04
            </span>
          </div>
          <hr className="rule-line-strong mt-3" />

          <motion.ol variants={container} initial="hidden" animate="show">
            {SERVICES.map((service, i) => (
              <ServiceRow
                key={service.slug}
                service={service}
                last={i === SERVICES.length - 1}
              />
            ))}
          </motion.ol>
          <hr className="rule-line-strong" />
        </motion.section>

        {/* ── Chamada principal ───────────────────────────────── */}
        <motion.section variants={block} className="mt-10">
          <WhatsAppButton message={HOME_WHATSAPP_MESSAGE} />
          <p className="mt-3 text-center text-caption text-ink-muted">
            Sem compromisso · Pix ou cartão · Remarque com 24h de antecedência
          </p>
        </motion.section>

        {/* ── Contatos ────────────────────────────────────────── */}
        <motion.nav variants={block} className="mt-12" aria-label="Redes e contato">
          <hr className="rule-line" />
          <ul className="grid grid-cols-3">
            {SOCIALS.map(({ href, icon: Icon, label, external }) => (
              <li key={label} className="border-r border-rule last:border-r-0">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="press tap-44 flex flex-col items-center justify-center gap-1.5 py-4"
                >
                  <Icon className="h-[18px] w-[18px] text-ink" strokeWidth={1.75} aria-hidden="true" />
                  <span className="kicker text-ink-muted">{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <hr className="rule-line" />
        </motion.nav>

        {/* ── Colofão ─────────────────────────────────────────── */}
        <motion.footer variants={block} className="mt-12 text-center">
          <Ornament />
          <p className="mt-5 text-caption text-ink-muted">
            © {new Date().getFullYear()} {PROFESSOR.name}
          </p>
        </motion.footer>
      </motion.div>
    </main>
  );
};

export default Index;
