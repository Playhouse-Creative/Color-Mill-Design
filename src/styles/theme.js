import muiTheme from './muiTheme';

const theme = {
  ...muiTheme,
  app: {
    maxWidth: muiTheme.typography.pxToRem(1280),
  },
};

export default theme;
