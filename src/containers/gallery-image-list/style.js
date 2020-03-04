const styles = ({ typography }) => ({
  container: {
    padding: `${typography.pxToRem(48)} ${typography.pxToRem(4)} `,
    border: '2px',
    borderColor: '#707070',
    
    
  },
  animatedBackground:{
    opacity: 1
  },
  visible :{
    opacity : 1
  },
  invisible:{
    opacity: 0,
  }
});

export default styles;
