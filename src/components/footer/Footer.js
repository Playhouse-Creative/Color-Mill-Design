import React from 'react';
import { withStyles } from '@material-ui/styles';
import { useForm, Controller} from "react-hook-form";
import { Input, Button, Grid, TextField } from '@material-ui/core'
import * as yup from 'yup'
import styles from './style';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required(),

})

type Props = {
  classes: Object,
};


function Footer({ classes }: Props) {  
  const { control, register, handleSubmit, errors } = useForm({ validationSchema: schema })
  const onSubmit = data => console.log(data);
  console.log(errors)
  return(
  <>
  <Grid className={classes.topContainer}>
  <Grid item xs={0} md={6} />
  <Grid item xs={12} md={4}>
  <h2 className={classes.formTitle}>Contact us</h2>
  
  <form onSubmit={handleSubmit(onSubmit)}>
      <Controller 
        as={TextField} 
        className={classes.inputField} 
        disableUnderline= {true} 
        type='text' variant="outlined" 
        margin="dense" 
        placeholder="First name" 
        name="firstName" 
        ref={register({required: true, maxLength: 80})} 
        control={control} 
        defaultValue=""/>
      {errors.firstName && 'First name is required'}
      <Controller 
        as={TextField} 
        className={classes.inputField} 
        disableUnderline= {true} 
        type='text'
        variant="outlined"
        margin="dense"
        placeholder="Last name" 
        name="lastName" 
        ref={register({required: true, maxLength: 100})} 
        control={control} 
        defaultValue=""/>
      {errors.lastName && 'Last name is required'}
      <Controller 
        as={TextField} 
        className={classes.inputField}  
        disableUnderline= {true} 
        type='text' 
        variant="outlined" 
        margin="dense" 
        placeholder="Email" 
        name="email" 
        ref={register({required: true, pattern: /^\S+@\S+$/i})} 
        control={control} 
        defaultValue=""/>
      {errors.email && 'Please submit a valid email address'}
      <Controller 
        as={TextField} 
        className={classes.inputField}  
        multiline= {true} 
        rows={4} 
        disableUnderline= {true} 
        type="text" 
        variant="outlined" 
        margin="dense" 
        placeholder="Message" 
        name="message" 
        ref={register({required: true, maxLength: 2000})} 
        control={control} 
        defaultValue=""/>
      <Button className={classes.button} type='submit'>Submit</Button>
    </form>
    </Grid>
    </Grid>
  <footer className={classes.bottomContainer}>
    © {new Date().getFullYear()}, Built by Color Mill Design with {' '}
    <a href='https://www.gatsbyjs.org' className={classes.linkOut}>Gatsby</a>
  </footer>
  </>
);
}

export default withStyles(styles)(Footer);
