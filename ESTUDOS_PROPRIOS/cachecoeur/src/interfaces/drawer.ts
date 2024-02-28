export interface InterfaceBodyDrawer {
  className?: string;
  appearDrawer: () => void;
  linkNavigateFirst?: () => void;
  linkNavigateSecond?: () => void;
}

export interface InterfaceLinkDrawer {
  onFunction: any;
  content: string;
}