import { extendTheme } from 'native-base';

import fonts from './fonts';
import borders from './borders';
import radius from './radius';
import sizes from './sizes';
import opacity from './opacity';
import colors from './colors';
import components from './components';

export default extendTheme({
  ...fonts,
  borderWidths: borders,
  radii: radius,
  space: sizes,
  sizes,
  opacity,
  colors,
  components,
});
