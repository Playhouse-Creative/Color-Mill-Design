import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid } from '@material-ui/core'
import BourbonCard from '../components/bourbonCard.js'
import NoyoCard from '../components/noyoCard.js'
import UMSPCard from '../components/uMSPCard.js'
import LogosCard from '../components/logosCard.js'



const IndexPage = props => {
  return (
    <Layout>
      <div
        style={{
          padding: '0 10%',
          backgroundColor: '#E9F1F7',
          minHeight: '1000',
        }}
      >
        <SEO title="Home" />
        <div style={{ paddingTop: 180 }}>
          <Grid container spacing={0} justify="space-between">
            <Grid item xs={12} md={2} alignItems="center">
              <h1 style={{ width: 200 }}>Color Mill Design</h1>
            </Grid>
            <Grid item xs={12} md={4} justify="right" alignItems='right'>
              <h2>
                We are a design studio specializing in delightful branding and
                web experiences
              </h2>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            name="gallery"
            style={{ padding: '4rem 0 8rem 0' }}
          >
            <BourbonCard />
            <NoyoCard />
            <UMSPCard />
            <LogosCard />
          </Grid>
        </div>
      </div>
      {/* <Grid container style={{ padding: '8% 10%', backgroundColor: '#49BEAA' }}>
        <Grid item xs={12} style={{ color: '#E9F1F7', paddingBottom: '2rem' }}>
          <h2>Our Capabilities</h2>
          <h4>Our approach to design is(write something good here)...</h4>
        </Grid>
        <Grid
          item
          xs={6}
          sm={5}
          style={{ color: '#E9F1F7', paddingRight: '1rem' }}
        >
          <h3>Brand Identity</h3>
          <h3>Brand Strategy</h3>
          <h3>Print Design</h3>
          <h3>Logo Design</h3>
          <h3>Illustration</h3>
          <h3>Identity Collateral</h3>
        </Grid>
        <Grid item xs={6} sm={5} style={{ color: '#E9F1F7' }}>
          <h3>Web Design</h3>
          <h3>Web Development</h3>
          <h3>Signage</h3>
          <h3>Trade Show Collateral</h3>
          <h3>Package Design</h3>
          <h3>Copywriting</h3>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ height: 500, backgroundColor: '#E9F1F7' }}
      ></Grid> */}
    </Layout>
  )
}

export default IndexPage