import React from 'react'
import { makeStyles, Grid, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: '0',
    padding: '1rem',
    outline: 0,
    borderRadius: '5px',
    justify: 'center',
    width: '100%',
  },
  textField: {
    margin: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    margin: '3rem 0 0 1rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
}))

const ContactForm = props => {
  const classes = useStyles()

  return (
    <Grid container justify="center" spacing={0}>
      <Grid item xs={12} sm={6}>
        <Grid item className={classes.title}>
          <h2>Get in touch with us</h2>
        </Grid>
        <Grid className={classes.textField}>
          <h4>
            We'd love to chat about how The Color Mill can help you with your
            design needs.
          </h4>
        </Grid>
        <Grid item className={classes.paper}>
          <form
            name="Design Contact Form"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="Design Contact Form" />
            <p hidden>
              <label>
                Don't fill this out:
                <input name="bot-field" value="Design Contact Form"></input>
              </label>
            </p>
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
                autoComplete="name"
              />
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
                autoComplete="email"
              />
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
                name="message"
              />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.textField}
            >
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactForm
