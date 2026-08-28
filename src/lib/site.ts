import { GraduationCap, User, MessageCircle, Briefcase, type LucideIcon } from "lucide-react";

/** Telefone único do site — antes estava repetido em 5 arquivos. */
export const WHATSAPP_NUMBER = "5581998649500";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PROFESSOR = {
  name: "Rodrigo Almeida",
  firstName: "Rodrigo",
  lastName: "Almeida",
  role: "Professor de inglês",
  // BASE_URL respeita o `base` do Vite, então a foto resolve certo tanto no
  // dev local quanto publicado numa subpasta do GitHub Pages.
  photo: `${import.meta.env.BASE_URL}professor.jpeg`,
  /**
   * Enquadramento do retrato dentro da moldura 4:5 do hero.
   * A foto original é 1223x719 (paisagem, corpo inteiro num salão): sem recorte
   * o rosto sairia minúsculo. Estes valores isolam a região x[420,819] y[70,570]
   * da imagem original — cabeça, ombros e tronco, com ar em volta.
   *
   * TROCOU A FOTO? Ajuste só aqui.
   *   zoom = largura da imagem em % da largura da moldura
   *   x    = deslocamento horizontal em % da largura da moldura
   *   y    = deslocamento vertical em % da ALTURA da moldura
   */
  photoCrop: { zoom: "306%", x: "-105%", y: "-14%" },
  email: "rodrigoformalidades@gmail.com",
  instagram: "https://www.instagram.com/rodrigoalmeidadc/",
  linkedin: "https://www.linkedin.com/in/rodrigo9188/",
} as const;

/**
 * Acentos de tinta: triplas HSL cruas, injetadas como `--accent-ink`.
 * São tons profundos e dessaturados — cor de tinta de gráfica, em dose mínima.
 * Todos passam 4.5:1 sobre o papel #F7F3EC.
 */
export const ACCENT = {
  brass: "40 51% 33%",
  crimson: "351 57% 35%",
  slate: "200 30% 27%",
  forest: "132 22% 26%",
} as const;

export interface ServiceEntry {
  /** Numeral do índice editorial: 01…04 */
  ordinal: string;
  slug: string;
  title: string;
  /** Antetítulo curto, em caixa alta */
  kicker: string;
  /** Uma linha de apoio no índice da capa */
  blurb: string;
  icon: LucideIcon;
  accent: string;
  whatsappMessage: string;
}

export const SERVICES: ServiceEntry[] = [
  {
    ordinal: "01",
    slug: "/aulas-particulares",
    title: "Aulas Particulares",
    kicker: "Mais procurado",
    blurb: "Um plano montado do zero para o seu ritmo, seus objetivos e sua rotina.",
    icon: User,
    accent: ACCENT.brass,
    whatsappMessage: "Olá! Tenho interesse nas aulas particulares de inglês. Gostaria de saber mais!",
  },
  {
    ordinal: "02",
    slug: "/conversacao",
    title: "Conversação",
    kicker: "Destravar a fala",
    blurb: "Fluência, pronúncia e coragem para falar em situações reais.",
    icon: MessageCircle,
    accent: ACCENT.crimson,
    whatsappMessage: "Olá! Tenho interesse nas aulas de conversação em inglês. Quero destravar minha fala!",
  },
  {
    ordinal: "03",
    slug: "/ingles-carreira",
    title: "Inglês para Carreira",
    kicker: "Profissional",
    blurb: "Reuniões, apresentações e entrevistas com o vocabulário que o mercado cobra.",
    icon: Briefcase,
    accent: ACCENT.slate,
    whatsappMessage: "Olá! Preciso de inglês para minha carreira profissional. Gostaria de saber mais sobre as aulas!",
  },
  {
    ordinal: "04",
    slug: "/apoio-academico",
    title: "Apoio Acadêmico",
    kicker: "Estudantes",
    blurb: "Reforço, provas e uma base gramatical que para de escorregar.",
    icon: GraduationCap,
    accent: ACCENT.forest,
    whatsappMessage: "Olá! Tenho interesse no apoio acadêmico em inglês. Gostaria de saber mais!",
  },
];

export const HOME_WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre as aulas de inglês.";

/** Busca por rota — evita depender da ordem do array nas páginas. */
export const SERVICE_BY_SLUG: Record<string, ServiceEntry> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);
