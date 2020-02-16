const styles = ({ palette, typography }) => ({
  menuContainer: {
    borderRadius: typography.pxToRem(4),
    display: 'inline-block',
    margin: 0
  
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} ${typography.pxToRem(20)}`,
    textDecoration: 'none',
    color: palette.text.secondary,
    margin: 0
  },
  navLinkActive: {
    borderBottom: 0,
  },
});

export default styles;
