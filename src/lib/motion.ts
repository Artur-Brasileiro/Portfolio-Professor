/**
 * Tokens de movimento compartilhados — um ritmo só para o site inteiro.
 * A curva é declarada como tupla porque o framer-motion v12 rejeita number[].
 */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Micro-interações: 150-300ms. Entradas 450-500ms. */
export const DURATION = {
  press: 0.18,
  panel: 0.26,
  enter: 0.45,
  block: 0.5,
} as const;

/** Atraso entre itens de uma lista que entra em sequência. */
export const STAGGER = 0.055;
