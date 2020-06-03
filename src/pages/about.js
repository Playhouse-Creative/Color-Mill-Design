import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles, Grid} from '@material-ui/core'
import BourbonCard from '../components/bourbonCard.js'




const IndexPage = (props) => {


    return(
        <div style={{ padding: '0 2rem', backgroundColor: '#d0d2d3'}}>
        <Layout>
        <SEO title="Home" />
        <div style={{ paddingTop: 200}}>
        <Grid container spacing={0} justify='space-between' >
        <Grid item xs={12} md={2} alignItems='center' >
        <h1 style={{width: 150}}>Color Mill Design</h1>
        </Grid>
        <Grid item xs={12} md={4} justify='right'>
        <h2>We are a design studio specializing in delightful branding and web experiences</h2>
        </Grid>
        </Grid>

        </div>
        </Layout>
        </div>
    )
}

export default IndexPage