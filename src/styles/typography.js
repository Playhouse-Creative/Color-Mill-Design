const typography = typography => ({
  fontFamily: 'montserrat',
  fontSize: 16,
  h1: {
    fontSize: typography.pxToRem(70),
    lineHeight: 1.1,
    fontWeight: 700,
  },
  h2: {
    fontSize: typography.pxToRem(56),
    lineHeight: 1.1,
    fontWeight: 500,
  },
  h3: {
    fontSize: typography.pxToRem(32),
    lineHeight: 1.8,
    fontWeight: 400,
  },
  body1: {
    fontSize: typography.pxToRem(16),
    lineHeight: 1.1,
    fontWeight: 300,
  },
  body2: {
    fontSize: typography.pxToRem(16),
    lineHeight: 1.1,
    fontWeight: 300,
  },
});

export default typography;
