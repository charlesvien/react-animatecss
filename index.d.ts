interface AnimateProps {
  animationIn?: string,
  animationOut?: string,
  inDelay?: number,
  outDelay?: number,
  inDuration?: number,
  outDuration?: number,
  repeat?: number,
  onMount?: boolean,
  visible?: boolean,
  loop?: boolean,
  style?: React.CSSProperties,
  children?: React.ReactNode,
}
