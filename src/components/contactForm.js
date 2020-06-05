import React from 'react'
import { makeStyles, Grid, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: '1rem 1rem 3rem',
    padding: '1rem',
    outline: 0,
    borderRadius: '5px',
    justify:'center',
    width :'100%'
    },
    textField:{
        margin: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
    },
    title:{
        margin: '3rem 0 0 1rem',
        display: 'flex',
        flexWrap: 'wrap',
    }


}))

const ContactForm = (props) => {

    const classes = useStyles()

    return(
    <Grid container justify='center' spacing={2}>
    <Grid item xs={10} sm={6}>
    <Grid item className={classes.title}>
    <h3>Get in touch with us</h3>
    </Grid>
    <Grid item className={classes.paper}>
    <form name="Design Contact Form" method="POST" data-netlify="true" > 
        <input type="hidden" name="contactForm" value="Design Contact Form" />
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
            placeholder="How can we help you?"
            variant="outlined" 
            name="message" />
        </Grid>
        <Button variant="contained" color="primary" type="submit" className={classes.textField}>Send</Button>
        </form>
        </Grid>
        </Grid>
    </Grid>
    )}

export default ContactForm