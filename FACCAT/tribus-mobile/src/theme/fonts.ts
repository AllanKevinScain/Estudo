import { rem } from './layout';

export default {
  fontSizes: {
    '2xs': rem(10),
    xs: rem(11),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(18),
    '2xl': rem(22),
    '3xl': rem(24),
    '4xl': rem(28),
    '5xl': rem(32),
    '6xl': rem(38),
  },
  fontConfig: {
    Georgia: {
      400: {
        normal: 'Georgia',
      },
    },
    Oracle: {
      400: {
        normal: 'OracleSans-Regular',
        italic: 'OracleSans-Italic',
      },
      600: {
        normal: 'OracleSans-SemiBold',
      },
      700: {
        normal: 'OracleSans-Bold',
      },
    },
  },
  fonts: {
    heading: 'Georgia',
    body: 'Oracle',
  },
};
