declare module 'csstype' {
  interface Properties {
    [index: string]: any;
  }
}

const vendorSpecificProperties = [
  'animation',
  'animationDelay',
  'animationDirection',
  'animationDuration',
  'animationFillMode',
  'animationIterationCount',
  'animationName',
  'animationPlayState',
  'animationTimingFunction',
  'appearance',
  'backfaceVisibility',
  'backgroundClip',
  'borderImage',
  'borderImageSlice',
  'boxSizing',
  'boxShadow',
  'contentColumns',
  'transform',
  'transformOrigin',
  'transformStyle',
  'transition',
  'transitionDelay',
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction',
  'perspective',
  'perspectiveOrigin',
  'userSelect',
];

const prefixData = (() => {
  if (typeof window === 'undefined') {
    return {};
  }
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('')
      // @ts-ignore
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1];
  return {
    dom: pre === 'ms' ? 'MS' : pre,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre === 'ms' ? pre : pre[0].toUpperCase() + pre.substr(1)
  };
})();

function prefixName(name: string) {
  return prefixData.js + name[0].toUpperCase() + name.substr(1);
}

function prefixStyle(properties: React.CSSProperties) {
  return Object.keys(properties)
    .reduce((previous: React.CSSProperties, property) => {
      if (vendorSpecificProperties.indexOf(property) !== -1) {
        previous[prefixName(property)] = properties[property];
      } else {
        previous[property] = properties[property];
      }

      return previous;
    }, {});
}

export const prefix = (styles: React.CSSProperties) => {
  if (typeof window === 'undefined') {
    return styles;
  }
  return Object.keys(styles)
    .reduce((previous: React.CSSProperties, current) => {
      previous[current] = prefixStyle(styles[current]);
      return previous;
    }, {});
};
