import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'
import { makeStyles, useTheme, useMediaQuery, Grid, Box } from '@material-ui/core'
import Img from 'gatsby-image'


const useStyles = makeStyles(theme => ({
  contactRoot: {
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 60,
    margin: '-3rem 0 0 -3rem',
    objectFit:'contain',
  nested: {
    paddingLeft: theme.spacing(4),
  },
},
  contactPaper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '600px',
    outline: 0
  },
  contactPortrait: {
    minHeight: 288
  },
}))


const ContactPage = (props) => {

  const classes = useStyles()

  const sources = [
    props.data.leftPortrait.childImageSharp.fluid,
    {
      ...props.data.topPortrait.childImageSharp.fluid,
      media: `(max-width: 959px)`,
    },
  ]

  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return(
    <div style={{ minHeight: '100vh', backgroundColor: '#5BD9D9' }}>
  <Layout>
  <div style={{paddingTop: 100}}>
    <SEO title="Contact" />
    <h1 style={{color: 'white', padding: '0 2rem 0 '}}>Contact</h1>
    <div style={isSmall ? { padding: '0.5rem 0 2rem 3rem' } : { padding: '2rem ' }}>
    <Box display='flex'>
      <Grid container spacing={7} justify="center" alignItems="flex-start">
      <Grid item xs={7} sm={4} md={6}>
      <Img fluid={sources} maxHeight= '400px' imgStyle={{objectFit:'contain', maxHeight: '400px'}}/>
      </Grid>
        <Grid className={classes.contactRoot} item xs={11} md={6} style={isSmall ? { } : {marginTop: '13rem' }}>
        <div style={{margin: '0 1rem -1rem'}}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Carter One'}}> Drop me a line</h2>
          <h3 style={{ textAlign: 'center', fontFamily: 'Carter One'}}>Let’s create something together!</h3>
        </div>
        </Grid>    
      </Grid>
        </Box>
      </div>
    <ContactForm/>
    </div>
  </Layout>
  </div>
)}

export default ContactPage

export const fluidImage = graphql`
      fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`


export const portrait = graphql`
  query {
    topPortrait: file(relativePath: { eq: "portraitTop.png" }) {
      ...fluidImage
    }
    leftPortrait: file(relativePath: { eq: "portraitLeft.png" }) {
      ...fluidImage
    }
    bourbonStill: file(relativePath: { eq: "Animated-Whiskey-Poster.jpg" }) {
      ...fluidImage
    }
    lizardRider: file(relativePath: { eq: "LizardRider.jpg" }) {
      ...fluidImage
    }
  }
`;