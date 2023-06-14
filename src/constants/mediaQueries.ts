const desktop = 1200;

export const mediaQueries = {
  desktop: `@media screen and (min-width: ${desktop}px)`,
  mobile: `@media screen and (max-width: ${desktop - 1}px)`,
};

export const breakpoints = {
  desktop,
};
