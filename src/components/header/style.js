const styles = ({ app, typography }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: `${typography.pxToRem(0)}`,
    padding: '1.5rem 1.5rem 1.5rem 1.5rem',
    maxWidth: 'app.maxWidth',
    width: '100%',
    background: '#432F51',
    fontWeight: 400,
    fontSize: typography.pxToRem(20),
  },
  logo: {
    border: 'none',
    float: 'left',
    transition: 'all .3s',
    textDecoration: 'none',
  },
  navigation: {
    float: 'right',
    position: 'relative',
    color: 'white',
  },
});

export default styles;