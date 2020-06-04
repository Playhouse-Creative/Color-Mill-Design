import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles, Grid} from '@material-ui/core'
import Aspen from '../images/AspenHeadshot-Web.jpg'
import Jeremy from '../images/JeremyHeadshot-Web.jpg'


const IndexPage = (props) => {


    return(
        <Layout>
        <div style={{ padding: '0 10%', backgroundColor: '#E9F1F7', minHeight:'1000'}}>        
        <SEO title="Home" />
        <div style={{ paddingTop: 180}}>
        <Grid container spacing={6} justify='center' >
        <Grid item xs={12} >
        <h1 style={{textAlign:'center'}}>Partners</h1>
        </Grid>
        <Grid item sm={12} md={3}>
        <img src={Aspen} alt='Aspen Logan'/>
        <h2>Aspen Logan</h2>
        <p>Aspen is a project manager and a runner. 
        Her career path lead her to video games as an artist and producer for companies like 
        Disney and LeapFrog before taking a turn to printing and design. 
        While she’s not managing everything to its utmost efficiency, she’s out running long distances in the woods. 
        In her spare time, Aspen reads books on project management and ways to build better business through doing good.</p>
        </Grid>
        <Grid item sm={12} md={3}>
        <img src={Jeremy} alt='Jeremy Logan'/>
        <h2>Jeremy Logan</h2>
        <p>Jeremy is a designer, painter and animator. 
        His previous career was in animation for AAA video games. 
        Give Jeremy a broken piece of machinery and he can fix it; an idea and he’ll make a logo out of it. 
        He’s also very passionate about elevating the world through exceptional design: 
        Jeremy believes everyone deserves to have a brand that reflects their purpose and shows the world what they can do in a beautiful way.</p>
        </Grid>
        </Grid>
        </div>        
        </div>
        </Layout>
    )
}

export default IndexPage