import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';


import content from './content';

const { title, subtitle } = content;

const Welcome = () => (
  <><Grid container spacing={3} >
    <Fade in timeout={1000}>
    <Grid item xs={12} sm={2} justify='left'>
      <Typography variant='h1' color='textPrimary' display='inline'>
        {title}
      </Typography>
      </Grid>
    </Fade>
    <Grid item xs={12} sm={5} justify='center'>
      </Grid>
    <Grid item xs={12} sm={5} justify='right'>
    <Typography variant='h3' color='textPrimary' display='inline' >
      {subtitle}
    </Typography>
    </Grid>
    </Grid>
  </>
);

export default Welcome;
