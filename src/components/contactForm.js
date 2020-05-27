import React from 'react'
import { makeStyles, Grid, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: '3rem 1rem',
    padding: '2rem',
    outline: 0,
    borderRadius: '20px',
    justify:'center',
    width :'100%'
    },
    textField:{
        margin: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
    }


}))

const ContactForm = (props) => {

    const classes = useStyles()

    return(
    <Grid container justify='center' spacing={2}>

    <Grid item className={classes.paper}  xs={10} sm={6}>
    <form name="Portfolio Contact Form" method="POST" data-netlify="true" > 
        <input type="hidden" name="form-name" value="Portfolio Contact Form" />
        <Grid item className={classes.textField}>
            <TextField 
            required
            fullWidth
            id="outlined-required"
            label="Your Name:"
            placeholder="Who are you?"
            variant="outlined"
            type="name" 
            name="name" 
            autoComplete='name'/>
        </Grid>
        <Grid item className={classes.textField}>
            <TextField 
            required
            fullWidth
            id="outlined-required"
            label="Your Email:"
            placeholder="email address"
            variant="outlined"
            type="email" 
            name="email" 
            autoComplete='email'/>
        </Grid>
        <Grid item className={classes.textField}>
            <TextField
            required
            fullWidth
            id="outlined-multiline-flexible"
            label="Message:"
            multiline
            rows="4"
            placeholder="What would you like to talk about?"
            variant="outlined" 
            name="message" />
        </Grid>
        <Button variant="contained" color="primary" type="submit" className={classes.textField}>Send</Button>
        </form>
        </Grid>
    </Grid>
    )}

export default ContactForm