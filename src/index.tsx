import React, {
  FunctionComponent, useState, useEffect,
} from 'react';
import * as PropTypes from 'prop-types';

import './animate.min.css';

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
    if (repeat !== null && repeat > 0) {
      classes.push(`animate__repeat-${repeat}`);
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
      style={{
        animationDelay: `${visible ? inDelay : outDelay}ms`,
        animationDuration: `${visible ? inDuration : outDuration}ms`,
        pointerEvents: visible ? 'all' : 'none',
        ...style,
      }}
    >
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
  repeat: 0,
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
  repeat: PropTypes.oneOf([1, 2, 3]),
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
