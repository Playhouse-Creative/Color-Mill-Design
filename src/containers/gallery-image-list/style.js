const styles = ({ typography }) => ({
  container: {
    padding: `${typography.pxToRem(32)} 0`,
    border: '2px',
    borderColor: '#707070',
    
  },
  visible :{
    opacity : 1
  },
  invisible:{
    opacity: 0
  }
});

export default styles;
