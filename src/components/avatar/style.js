const styles = ({ typography }) => ({
  container: {
    borderRadius: '0%',
    overflow: 'hidden',
    border: `none`,
    //border: `${typography.pxToRem(2)} solid white`,
    boxShadow: `0 0 0 ${typography.pxToRem(2)} rgba(0,0,0,0)`,
    height: typography.pxToRem(100),
    width: typography.pxToRem(100),
  },
  avatar: {
    width: '100%',
  },
});

export default styles;
