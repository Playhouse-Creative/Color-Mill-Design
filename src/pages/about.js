import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles, Grid } from '@material-ui/core'
import Aspen from '../images/AspenHeadshot-Web.jpg'
import Jeremy from '../images/JeremyHeadshot-Web.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex-box',
    },
    portrait: {
        display: 'inline-block',
        animation: 'fadeIn ease .5s',
        webkitAnimation: 'fadeIn ease .5s',
        mozAnimation: 'fadeIn ease .5s',
        oAnimation: 'fadeIn ease .5s',
        msAnimation: 'fadeIn ease .5s',
    },
    '@keyframes fadeIn': {
        from: { opacity: 0, transform: 'translateY(200px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
    },

    '@-moz-keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'translateY(200px)' },
        '100%': { opacity: 1, transform: 'translateY(0px)' },
    },

    '@-webkit-keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'translateY(200px)' },
        '100%': { opacity: 1, transform: 'translateY(0px)' },
    },

    '@-o-keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'translateY(200px)' },
        '100%': { opacity: 1, transform: 'translateY(0px)' },
    },

    '@-ms-keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'translateY(200px)' },
        '100%': { opacity: 1, transform: 'translateY(0px)' },
    },
    }))

    const IndexPage = props => {
    const classes = useStyles()

    return (
        <Layout>
        <div
            style={{
            padding: '0 10%',
            backgroundColor: '#E9F1F7',
            minHeight: '1000',
            }}
        >
            <SEO title="About" />
            <div style={{ paddingTop: 180 }}>
            <Grid container spacing={6} justify="center">
                <Grid item xs={12}>
                <h2 style={{ textAlign: 'center' }}>Color Mill Design</h2>
                </Grid>
                <Grid item>
                <p>Say something about our work and specialties...</p>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={6}
                justify="center"
                style={{ minHeight: '1000px' }}
            >
                <Grid item xs={12}>
                <h2 style={{ textAlign: 'center' }}>Partners</h2>
                </Grid>
                <Grid
                item
                xs={10}
                sm={8}
                md={4}
                lg={3}
                className={classes.portrait}
                >
                <img src={Aspen} alt="Aspen Logan" />
                <h2>Aspen Logan</h2>
                <p>
                    Aspen is a project manager and a runner. Her career path lead
                    her to video games as an artist and producer for companies like
                    Disney and LeapFrog before taking a turn to printing and design.
                    While she’s not managing everything to its utmost efficiency,
                    she’s out running long distances in the woods. In her spare
                    time, Aspen reads books on project management and ways to build
                    better business through doing good.
                </p>
                </Grid>
                <Grid
                item
                xs={10}
                sm={8}
                md={4}
                lg={3}
                className={classes.portrait}
                >
                <img src={Jeremy} alt="Jeremy Logan" />
                <h2>Jeremy Logan</h2>
                <p>
                    Jeremy is a designer, painter and animator. His previous career
                    was in animation for AAA video games. Give Jeremy a broken piece
                    of machinery and he can fix it; an idea and he’ll make a logo
                    out of it. He’s also very passionate about elevating the world
                    through exceptional design: Jeremy believes everyone deserves to
                    have a brand that reflects their purpose and shows the world
                    what they can do in a beautiful way.
                </p>
                </Grid>
            </Grid>
            </div>
        </div>
        </Layout>
    )
}

export default IndexPage
