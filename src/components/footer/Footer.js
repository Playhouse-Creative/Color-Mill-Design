import React from 'react';
import { withStyles } from '@material-ui/styles';
import { useForm, Controller} from "react-hook-form";
import { Box, Input, Button, TextField } from '@material-ui/core'
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
  <div>
  <footer className={classes.topContainer}>
  <form onSubmit={handleSubmit(onSubmit)}>
    <Box>
      <Controller as={TextField} className={classes.inputField} placeholder="First name" name="firstName" ref={register({required: true, maxLength: 80})} control={control} defaultValue=""/>
      {errors.firstName && 'First name is required'}
      <Controller as={Input} className={classes.inputField} type ='text'placeholder="Last name" name="lastName" ref={register({required: true, maxLength: 100})} control={control} defaultValue=""/>
      {errors.lastName && 'Last name is required'}
      <Controller as={Input} className={classes.inputField}  type='text' placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} control={control} defaultValue=""/>
      {errors.email && 'Please submit a valid email address'}
      <Controller as={Input} className={classes.inputField}  type="text" placeholder="Message" name="message" ref={register({required: true, maxLength: 2000})} control={control} defaultValue=""/>
      </Box>
      <Button type='submit'>Submit</Button>
    </form>
    </footer>
  <footer className={classes.bottomContainer}>
    © {new Date().getFullYear()}, Built by Color Mill Design with
    {' '}
    <a href='https://www.gatsbyjs.org' className={classes.linkOut} >Gatsby</a>
  </footer>
  </div>
);
}

export default withStyles(styles)(Footer);
