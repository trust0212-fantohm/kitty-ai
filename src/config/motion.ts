export const fadeInMotion = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { amount: 0.3, once: true },
  variants: {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 100,
    },
  },
  transition: { duration: 0.3 },
}

export const fadeLeftMotion = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { amount: 0.3, once: true },
  variants: {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 100,
    },
  },
  transition: { duration: 0.3 },
}
