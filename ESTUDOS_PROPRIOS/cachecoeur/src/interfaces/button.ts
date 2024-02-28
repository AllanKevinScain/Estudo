export default interface ButtonProps {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'normal' | 'ghost' | 'cute';
  case?: 'upper' | 'lower' | string;
  animation?: 'normal' | 'none';
  content?: string;
  color?: string;
  background?: string;
  onFunction: () => void;
  children?: any;
};