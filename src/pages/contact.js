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
    <>
  <Layout>
  <div style={{paddingTop: 150}}>
    <SEO title="Contact" />
    </div>
  </Layout>
  </>
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