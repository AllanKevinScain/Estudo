import { Dimensions, Platform, StatusBar } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

const REFERENCE_WIDTH = 414;
const WINDOW = Dimensions.get('window');
const SCALE = WINDOW.width / REFERENCE_WIDTH;
const HAS_ANDROID_NOTCH = Platform.OS === 'android' && (StatusBar.currentHeight || 0) > 24;

export function rem(unit: number): number {
  return Math.round(unit * SCALE * 2) / 2;
}

export function getAbsoluteHeight(marginTopUnit = 0, safeAreaInsets?: EdgeInsets): string {
  const marginTop = rem(marginTopUnit);
  const safeTop = (!HAS_ANDROID_NOTCH && safeAreaInsets?.top) || 0;

  return `${WINDOW.height - marginTop - safeTop}px`;
}
