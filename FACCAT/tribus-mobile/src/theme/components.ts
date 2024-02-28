export default {
  ScrollView: {
    defaultProps: {
      overflow: 'visible',
      showsVerticalScrollIndicator: false,
      showsHorizontalScrollIndicator: false,
    },
  },
  FlatList: {
    defaultProps: {
      showsVerticalScrollIndicator: false,
      showsHorizontalScrollIndicator: false,
    },
  },
  SectionList: {
    defaultProps: {
      stickySectionHeadersEnabled: false,
      showsVerticalScrollIndicator: false,
    },
  },
  Heading: {
    defaultProps: {
      fontSize: '4xl',
      fontWeight: 'normal',
      color: 'dark.800',
    },
  },
  Text: {
    defaultProps: {
      color: 'dark.800',
    },
  },
  Image: {
    defaultProps: {
      alt: 'Image',
    },
  },
  Progress: {
    defaultProps: {
      bg: 'gray.100',
      size: 'md',
      _filledTrack: {
        bg: 'green.600',
      },
    },
  },
  Input: {
    defaultProps: {
      h: 12,
    },
  },

  Button: {
    defaultProps: {
      shadow: 0,
      rounded: '6xl',
      size: 'lg',
      bg: 'primary.300',
      color: 'primary.50',
      _pressed: {
        bg: 'primary.300',
      },
      variant: 'outlined',
    },
    sizes: {
      sm: {
        h: 8,
        _text: {
          fontSize: 'sm',
          fontWeight: 'bold',
          color: 'white'
        },
      },
      md: {
        h: 11,
        _text: {
          fontSize: 'md',
          fontWeight: 'bold',
          color: 'white',
        },
      },
      lg: {
        h: 11,
        _text: {
          fontSize: 'lg',
          fontWeight: 'bold',
          color: 'white',
        },
      },
    },
  },
};