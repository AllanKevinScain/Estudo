export default interface input {
  type?: string;
  variant?: string;
  size?: string;
  icon?: any;
  color?: string;
  background?: string;
  placeholder?: string
  value: string | number;
  onFunctionClick?: (e: any) => void;
  onFunctionChange: (e: any) => void;
  onFunctionFocus?: (e: any) => void;
  onFunctionBlur?: (e: any) => void;
}