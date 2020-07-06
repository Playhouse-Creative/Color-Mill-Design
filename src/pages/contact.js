import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'





const ContactPage = (props) => {

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