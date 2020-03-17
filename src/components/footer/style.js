const styles = ({ app, typography }) => ({
  bottomContainer: {
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
    linkColor: 'white', 
      },
  topContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: `${typography.pxToRem(2)}`,
    maxWidth: 'app.maxWidth',
    width: '33.3%',
    background: '#E8E8E8',
    fontWeight: 500,
    fontSize: typography.pxToRem(15),
    color: 'primary',
  },
  inputField:{
    background: 'white',
    width: '100%',
    margin: `${typography.pxToRem(5)}`,
    color: 'primary',
  },
  linkOut: {
    color: 'white',
    linkColor: 'white',
    padding: '.3rem'
}
});

export default styles;
