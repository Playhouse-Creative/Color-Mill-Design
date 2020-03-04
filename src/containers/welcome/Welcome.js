import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';


import content from './content';

const { title, subtitle } = content;

const Welcome = () => (
  <><Grid container spacing={3}>
    <Fade in timeout={1000}>
    <Grid item xs={6} sm={6} md={3}>
      <Typography variant='h1' color='textPrimary' display='inline'>
        {title}
      </Typography>
      </Grid>
    </Fade>
    <Grid item xs={6} sm={5} md={5}>
      </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Typography variant='h4' color='textPrimary' display='inline' align="right" >
      {subtitle}
    </Typography>
    </Grid>
    </Grid>
  </>
);

export default Welcome;
