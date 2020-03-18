const styles = ({ app, breakpoints, typography }) => ({
  '@global': {
    html: {
      [breakpoints.up('xl')]: {
        fontSize: '0.833333vw !important',
      },
    },
  },
  container: {
    minHeight: '100vh',
  },
  scrollFix: {
    marginRight: '-8px !important',
    marginBottom: '-17px !important',
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 'auto',
    minHeight: '100%',
    padding: 'none',
    transition: 'filter .5s, opacity .5s',
    boxSizing: 'border-box',
    background: '#E8E8E8',
  },
  content: {
    margin: ' 3rem auto',
    maxWidth: 'app.maxWidth',
    width: '90%',
  },
  background: {
    backgroundImage: ``,
    backgroundSize: 'cover',
  },
});

export default styles;
