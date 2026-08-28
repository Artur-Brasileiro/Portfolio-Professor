import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, type LucideIcon } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Ornament } from "@/components/Ornament";
import { PROFESSOR, type ServiceEntry } from "@/lib/site";
import { EASE_OUT } from "@/lib/motion";

interface ServicePageProps {
  service: ServiceEntry;
  heroDescription: string;
  benefits: { icon: LucideIcon; title: string; description: string }[];
  howItWorks: { title: string; description: string }[];
  testimonial: { name: string; context: string; text: string };
  faqs: { question: string; answer: string }[];
}

/** Antetítulo de seção: rótulo em caixa alta sobre filete forte. */
function SectionHead({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <>
      <h2 id={id} className="kicker font-body text-ink-muted">
        {children}
      </h2>
      <hr className="rule-line-strong mt-3" />
    </>
  );
}

export default function ServicePage({
  service,
  heroDescription,
  benefits,
  howItWorks,
  testimonial,
  faqs,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBar, setShowBar] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  // A barra fixa só entra depois que o leitor passa da abertura do artigo.
  useMotionValueEvent(scrollY, "change", (y) => setShowBar(y > 420));

  const { ordinal, title, kicker, accent, whatsappMessage, icon: ServiceIcon } = service;

  return (
    <main className="safe-top min-h-dvh pb-28" style={{ ["--accent-ink" as string]: accent }}>
      <div className="column pt-8">
        {/* Navegação */}
        <nav>
          <Link
            to="/"
            className="press tap-44 -ml-2 inline-flex items-center gap-2 rounded-sm px-2 py-2 text-ink-muted"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            <span className="kicker">Voltar</span>
          </Link>
        </nav>

        {/* Abertura do artigo */}
        <header className="mt-6">
          <div className="flex items-center gap-3">
            <span className="numeral text-caption text-[hsl(var(--accent-ink))]" aria-hidden="true">
              {ordinal}
            </span>
            <span
              className="h-px w-6 bg-[hsl(var(--accent-ink))] opacity-40"
              aria-hidden="true"
            />
            <span className="kicker text-[hsl(var(--accent-ink))]">{kicker}</span>
            <ServiceIcon
              className="ml-auto h-6 w-6 text-[hsl(var(--accent-ink))] opacity-70"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>

          <h1 className="mt-5 font-display text-display-sm font-semibold">{title}</h1>

          <p className="drop-cap mt-5 text-lede text-ink-muted">{heroDescription}</p>
        </header>

        {/* Benefícios */}
        <section className="mt-12" aria-labelledby="beneficios">
          <SectionHead id="beneficios">Por que escolher</SectionHead>
          <ul className="divide-y divide-rule">
            {benefits.map(({ icon: Icon, title: benefitTitle, description }) => (
              <li key={benefitTitle} className="grid grid-cols-[2.25rem_1fr] gap-x-4 py-5">
                <Icon
                  className="mt-1 h-5 w-5 text-[hsl(var(--accent-ink))]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-title-sm font-semibold">{benefitTitle}</h3>
                  <p className="mt-1.5 text-caption text-ink-muted">{description}</p>
                </div>
              </li>
            ))}
          </ul>
          <hr className="rule-line-strong" />
        </section>

        {/* Como funciona */}
        <section className="mt-12" aria-labelledby="como-funciona">
          <SectionHead id="como-funciona">Como funciona</SectionHead>
          <ol className="divide-y divide-rule">
            {howItWorks.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[2.25rem_1fr] gap-x-4 py-5">
                <span
                  className="numeral pt-0.5 text-title-sm leading-none text-[hsl(var(--accent-ink))]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-title-sm font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-caption text-ink-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <hr className="rule-line-strong" />
        </section>

        {/* Citação em destaque */}
        <figure className="mt-12">
          <span className="block font-display text-[3rem] leading-[0.6] text-brass" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="mt-4">
            <p className="font-display text-[1.3125rem] italic leading-[1.45] text-ink">
              {testimonial.text}
            </p>
          </blockquote>
          <figcaption className="kicker mt-5 text-ink-muted">
            {testimonial.name} · {testimonial.context}
          </figcaption>
          <hr className="rule-line mt-7" />
        </figure>

        {/* Perguntas frequentes */}
        <section className="mt-12" aria-labelledby="faq">
          <SectionHead id="faq">Perguntas frequentes</SectionHead>
          <ul className="divide-y divide-rule">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              const panelId = `faq-panel-${i}`;
              return (
                <li key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="press tap-44 flex w-full items-start justify-between gap-4 rounded-sm py-5 text-left"
                    >
                      <span className="font-display text-title-sm font-semibold text-ink">
                        {faq.question}
                      </span>
                      <span className="mt-0.5 shrink-0 text-[hsl(var(--accent-ink))]">
                        {isOpen ? (
                          <Minus className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                        ) : (
                          <Plus className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-8 text-caption text-ink-muted">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
          <hr className="rule-line-strong" />
        </section>

        {/* Chamada principal */}
        <section className="mt-12">
          <WhatsAppButton message={whatsappMessage} />
          <p className="mt-3 text-center text-caption text-ink-muted">
            Sem compromisso · Pix ou cartão · Remarque com 24h de antecedência
          </p>
        </section>

        {/* Colofão */}
        <footer className="mt-12 text-center">
          <Ornament />
          <p className="mt-5 text-caption text-ink-muted">
            © {new Date().getFullYear()} {PROFESSOR.name}
          </p>
        </footer>
      </div>

      {/* Barra fixa de conversão — entra depois da abertura, respeita a safe area */}
      <AnimatePresence>
        {showBar && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { y: "100%" }}
            animate={reduce ? { opacity: 1 } : { y: 0 }}
            exit={reduce ? { opacity: 0 } : { y: "100%" }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-rule-strong bg-paper/95 backdrop-blur-sm"
          >
            <div className="column safe-bottom pt-3">
              <WhatsAppButton message={whatsappMessage} label={`Falar sobre ${title}`} compact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
