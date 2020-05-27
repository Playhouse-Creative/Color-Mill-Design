import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles, Grid} from '@material-ui/core'
import BourbonCard from '../components/bourbonCard.js'
import NoyoCard from '../components/noyoCard.js'
import UMSPCard from '../components/uMSPCard.js'
import LogosCard from '../components/logosCard.js'



const useStyles = makeStyles(theme => ({
  indexRoot: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 60,
    margin: '-.5rem -1rem 0 -.5rem',
    outline: 0,
    maxHeight: '500px',
    
  nested: {
    paddingLeft: theme.spacing(4),
  },
},
indexPortrait:{
  margin: '0 0 0 3rem',
  width: '100%',
  outline: 0,
},
  indexCaption: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0% 0% 60px 60px',
    margin: 0 ,
  },
  indexModal: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0
  },
  indexPaper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 0
  },
  }))

const IndexPage = (props) => {

  
  return(
    <div style={{ padding: '0 2rem', backgroundColor: '#d0d2d3'}}>
    <Layout>
      <SEO title="Home" />
      <div style={{ paddingTop: 100}}>
      <div >
      <Grid container spacing={2} name='gallery' >
        <BourbonCard/>
        <NoyoCard/>
        <UMSPCard/>
        <LogosCard/>
      </Grid>
    </div>
    </div>
    </Layout>
    </div>
  )
}

export default IndexPage

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
  }
`;