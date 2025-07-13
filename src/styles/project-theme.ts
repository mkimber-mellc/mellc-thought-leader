export const customTheme = {
  navbar: {
    button: 'px-3 py-2 textprimary font-medium bgcta rounded',
    menu: 'absolute left-0 right-0 z-50 flex flex-col items-center gap-5 p-4 bglight border borderprimary shadow-primary',
    links:
      'text-sm textprimary rounded-lg bgwarm px-4 py-3 w-full text-center font-semibold hover:bgprimary hover:textcta',
    cardBg: 'bglight',
    cardPadding: 'p-2',
  },

  primary: {
    bg: 'bgprimary',
    text: 'textprimary',
    border: 'borderprimary',
    padding: 'px-5 py-2 sm:px-7 sm:py-5',
    hover: {
      bg: 'bgcta',
      text: 'textprimary',
    },
    card: {
      bg: 'bgprimary',
      padding: 'px-5 py-2 sm:px-7 sm:py-5',
      shadowColor: 'shadow-primary',
    },
    textBlock: {
      color: 'textprimary',
    },
    button: {
      bg: 'bgprimary',
      color: 'textprimary',
      padding: 'px-5 py-2 sm:px-7 sm:py-5',
      hover: 'bgcta',
      shadowColor: 'shadow-primary',
    },
  },

  secondary: {
    bg: 'bglight',
    text: 'textlight',
    border: 'borderlight',
    padding: 'px-4 py-2 sm:px-6 sm:py-3',
    hover: {
      bg: 'bgbrandmid',
    },
    card: {
      bg: 'bglight',
      padding: 'px-4 py-2 sm:px-6 sm:py-3',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textlight',
    },
    button: {
      bg: 'bglight',
      color: 'textlight',
      padding: 'px-4 py-2 sm:px-6 sm:py-3',
      hover: 'hover:bgbrandmid hover:textprimary',
      shadowColor: 'shadow-white',
    },
  },

  accent: {
    bg: 'bgaccent',
    text: 'textaccent',
    border: 'borderaccent',
    padding: 'px-4 py-2',
    card: {
      bg: 'bgaccent',
      padding: 'px-5 py-5',
      shadowColor: 'shadow-accent',
    },
    textBlock: {
      color: 'textaccent',
    },
    hover: {
      bg: 'bgaccent',
    },
    button: {
      bg: 'bgaccent',
      color: 'textaccent',
      padding: 'px-4 py-2',
      hover: 'bgaccent',
      shadowColor: 'shadow-accent',
    },
  },

  warm: {
    bg: 'bgwarm',
    text: 'textwarm',
    border: 'borderwarm',
    padding: 'px-4 py-2',
    hover: {
      bg: 'bgwarm',
    },
    card: {
      bg: 'bgwarm',
      padding: 'px-4 py-2',
      shadowColor: 'shadow-warm',
    },
    textBlock: {
      color: 'textwarm',
    },
    button: {
      bg: 'bgwarm',
      color: 'textwarm',
      padding: 'px-4 py-2',
      hover: 'bgwarm',
      shadowColor: 'shadow-warm',
    },
  },

  danger: {
    bg: 'bgcta',
    text: 'textcta',
    border: 'bordercta',
    padding: 'px-4 py-2',
    hover: {
      bg: 'bgcta',
    },
    card: {
      bg: 'bgcta',
      padding: 'px-4 py-2',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textcta',
    },
    button: {
      bg: 'bgcta',
      color: 'textcta',
      padding: 'px-4 py-2',
      hover: 'bgcta',
      shadowColor: 'shadow-white',
    },
  },

  outline: {
    bg: 'bg-transparent',
    text: 'textlight',
    border: 'borderprimary',
    padding: 'px-4 py-2',
    hover: {
      bg: 'bglight',
      text: 'textbrandmid',
    },
    card: {
      bg: 'bg-transparent',
      padding: 'px-4 py-2',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textlight',
    },
    button: {
      bg: 'bg-transparent',
      color: 'textlight',
      hover: 'bglight',
      shadowColor: 'shadow-white',
    },
  },

  ghost: {
    bg: 'bg-transparent',
    text: 'textaccent',
    border: 'border-transparent',
    padding: 'px-2 py-1',
    hover: {
      bg: 'bgaccent',
    },
    card: {
      bg: 'bg-transparent',
      padding: 'px-2 py-1',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textaccent',
    },
    button: {
      bg: 'bg-transparent',
      color: 'textaccent',
      padding: 'px-2 py-1',
      hover: 'bgaccent',
      shadowColor: 'shadow-white',
    },
  },
};
