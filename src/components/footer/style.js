const styles = ({ app, typography }) => ({
  container: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    margin: `${typography.pxToRem(0)}`,
    padding: '1.5rem 3rem 1.5rem 3rem',
    maxWidth: 'app.maxWidth',
    width: '100%',
    background: '#432F51',
    fontWeight: 300,
    fontSize: typography.pxToRem(15),
    color: 'white',
    linkColor: 'white'
  },
});

export default styles;
