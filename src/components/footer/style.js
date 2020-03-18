const styles = ({ app, typography }) => ({
  bottomContainer: {
    display: 'inline',
    justifyContent: 'left',
    alignItems: 'center',
    margin: `${typography.pxToRem(0)}`,
    padding: '.5rem 3rem 1.5rem 3rem',
    maxWidth: 'app.maxWidth',
    width: '100%',
    background: '#432F51',
    fontWeight: 300,
    fontSize: typography.pxToRem(15),
    color: 'white',
    linkColor: 'white', 
      },
  topContainer:{
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
    margin: 'auto',
    padding : '1rem 2.5rem 1rem .5rem',
    maxWidth: 'app.maxWidth',
    //width: '33.3%',
    background: '#E8E8E8',
    fontWeight: 500,
    fontSize: typography.pxToRem(15),
    color: 'primary',
    boxSizing: 'border-box',
    transition: 'filter .5s, opacity .5s',
  },
  inputField:{
    background: 'white',
    width: '100%',
    margin: '.25rem 5rem .25rem 1rem',
    color: 'primary',
    maxWidth: 'app.maxWidth',
  },
  formTitle:{
    width: '100%',
    margin: '.25rem 5rem .25rem 1rem',
    color: 'primary',
  },
  button:{
    width: '30%',
    margin: '.25rem 5rem .25rem 1rem',
    color: 'primary',
    background: '#d1d1d1'
  },
  linkOut: {
    color: 'white',
    linkColor: 'white',
  },
  paper: {
    padding: 1,
    textAlign: 'center',
    color: 'secondary',
    whiteSpace: 'nowrap',
    marginBottom: '1rem',
  },
});

export default styles;
