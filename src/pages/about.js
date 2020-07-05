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
              <h2 style={{ textAlign: 'center' }}>About Color Mill Design</h2>
            </Grid>
            <Grid item style={{ maxWidth: 1000 }}>
              <p>
                The Color Mill is a design studio that specializes in helping
                small businesses and non-profits tell their stories. We strive
                to create work that is unique and organized, with room for a
                little magic. Our studio is set up so we can be personally
                involved with every project and get to be choosy about what work
                we take on.
              </p>
              <p>
                The Color Mill is Aspen, Jeremy and Heidi. Aspen and Heidi met
                in art school at the Art Institute of Seattle. One day while in
                a marketing class, Heidi started to chat about what she thought
                about the subject and Aspen thought she was making a lot of
                sense. They chatted all the way down the hall to the cafeteria,
                then back to class and never left each others' side.
              </p>
              <p>
                Jeremy and Aspen met while working at the Seattle Art Museum as
                security guards and bonded over their love of art and beauty. A
                famous story in their family is how a fellow guard said that
                they would have a long and fulfilling life together. Whoa
                buddy-- we hadn't even gone on a date yet! But of course, he was
                right.
              </p>
              <p>
                In 2018, we finally made our dreams come true by working
                together. We challenge each other daily and trust each other
                fully. We design, create and produce work we are proud of for
                folks that we believe in. We strive to bring the same joy and
                trust we feel for each other to each person we work with.
              </p>
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
                Born in Canada to a couple of young hippy transplants from
                California, living the '70s dream on 150 acres of mountains,
                meadows and streams, Aspen was raised with a deep love of
                nature. It was a great surprise to everyone when she declared
                she was moving to the big city to go to art school and become a
                video game producer. Aspen lead teams at companies such as
                Disney and Leap Frog.
              </p>
              <p>
                She finally figured out how to balance her love of nature with
                her abilities as a project manager by moving to the Northern
                California Coast to run The Color Mill.{' '}
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
                Jeremy spent the greater part of his youth traipsing around the
                USA, sometimes alone, sometimes not, always looking ahead for
                the next big adventure and soaking up knowledge. Jeremy has
                transitioned seamlessly from art school to silk screening
                t-shirts to animating for AAA video games. He has an innate
                sense of curiosity which allows him to simultaneously master
                coding, create beautifully intricate illustrations and hold a
                reverence for the Stoic masters.
              </p>
              <p>
                Even though these abilities may seem disconnected, Jeremy's
                found a perfect balance of all of them which leads to the art
                department being able to not only make incredible art, but to
                bring it to the web as well.
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
