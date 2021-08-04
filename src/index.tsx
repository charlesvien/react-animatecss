import React, {
  FunctionComponent, useState, useEffect,
} from 'react';
import * as PropTypes from 'prop-types';

import { prefix } from './prefixer';

import './animate.min.css';

/**
 * Animate component
 * 
 * @param   {React.CSSProperties} style additional styles to apply to the wrapper element
 * @param   {<type>} param2 <description>
 * @param   {<type>} param3 <description>
 * @return  {JSX.Element}               Animate jsx element
 */

const Animate: FunctionComponent<AnimateProps> = ({
  animationIn,
  animationOut,
  inDelay,
  outDelay,
  inDuration,
  outDuration,
  onMount,
  visible,
  repeat,
  loop,
  style,
  children,
}): JSX.Element => {
  const [mounted, setMounted] = useState(false);

  const buildClasses = () => {
    const classes = ['animate__animated'];
    if (loop === true) {
      classes.push('animate__infinite');
    }
    if (mounted || onMount) {
      if (visible) {
        classes.push(`animate__${animationIn}`);
      } else {
        classes.push(`animate__${animationOut}`);
      }
    }
    return classes.join(' ');
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={buildClasses()}
      style={prefix({
        animationRepeat: `${repeat ? repeat : 1}`,
        animationDelay: `${visible ? inDelay : outDelay}ms`,
        animationDuration: `${visible ? inDuration : outDuration}ms`,
        pointerEvents: visible ? 'all' : 'none',
        ...style,
      })}
    >
      {
        JSON.stringify(prefix({
          animationRepeat: `${repeat ? repeat : 1}`,
          animationDelay: `${visible ? inDelay : outDelay}ms`,
          animationDuration: `${visible ? inDuration : outDuration}ms`,
          pointerEvents: visible ? 'all' : 'none',
        }))
      }
      {children}
    </div>
  );
};

Animate.displayName = 'Animate';

Animate.defaultProps = {
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  inDelay: 0,
  outDelay: 0,
  inDuration: 1000,
  outDuration: 1000,
  repeat: 1000,
  onMount: true,
  visible: true,
  loop: false,
  style: null,
  children: null,
};

Animate.propTypes = {
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  inDelay: PropTypes.number,
  outDelay: PropTypes.number,
  inDuration: PropTypes.number,
  outDuration: PropTypes.number,
  repeat: PropTypes.number,
  onMount: PropTypes.bool,
  visible: PropTypes.bool,
  loop: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Animate;
