import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles, Grid} from '@material-ui/core'



const IndexPage = (props) => {


    return(
        <div style={{ padding: '0 2rem', backgroundColor: '#d0d2d3'}}>
        <Layout>
        <SEO title="Home" />
        <div style={{ paddingTop: 200}}>
        <Grid container spacing={0} justify='space-between' >
        </Grid>
        </div>
        </Layout>
        </div>
    )
}

export default IndexPage