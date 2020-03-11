import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';
import BourbonVideo from 'images/Animated-Whiskey.mp4';
import BourbonStill from 'images/Animated-Whiskey-Poster.jpg';
import UMSPVideo from 'images/Animated-UMSP.mp4';
import UMSPStill from 'images/Animated-UMSP-Poster.jpg';
import LogosVideo from 'images/Animated-Logos.mp4';
import LogosStill from 'images/Animated-Logos-Poster.jpg';
import NoyoVideo from 'images/Animated-Noyo.mp4';
import NoyoStill from 'images/Animated-Noyo-Poster.jpg';
// import useGalleryImages from'./useGalleryImages';

import styles from './style';

type Props = {
  classes: Object,
};

const GalleryImageList = ({ classes }: Props) => {
  // const { allContentfulGalleryImage } = useGalleryImages();

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.animatedBackground}>
            <Link to='./mendocino-spirits'>
              <video
                width='100%'
                loop
                muted
                track ='none'
                poster= {BourbonStill}
                onMouseOver={e => e.target.play()}
                onTouchStart={e => e.target.play()}
                onFocus={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
                onTouchEnd={e => e.target.pause()}
                onBlur={e => e.target.pause()}>
                <source src={BourbonVideo} />
              </video>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.animatedBackground}>
            <Link to='./noyo-harbor-inn'>
              <video
                width='100%'
                loop
                muted
                poster={NoyoStill}
                onMouseOver={e => e.target.play()}
                onTouchStart={e => e.target.play()}
                onFocus={e => e.target.play()}
                onMouseOut={e => e.target.load()}
                onTouchEnd={e => e.target.load()}
                onBlur={e => e.target.load()}>
                <source src={NoyoVideo} />
              </video>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.animatedBackground}>
            <Link to='./ukiah-main-street-program'>
              <video
                width='100%'
                loop
                muted
                poster={UMSPStill}
                onMouseOver={e => e.target.play()}
                onTouchStart={e => e.target.play()}
                onFocus={e => e.target.play()}
                onMouseOut={e => e.target.load()}
                onTouchEnd={e => e.target.load()}
                onBlur={e => e.target.load()}>
                <source src={UMSPVideo} />
              </video>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.animatedBackground}>
            <Link to='./logos/'>
              <video
                width='100%'
                loop
                muted
                poster={LogosStill}
                onMouseOver={e => e.target.play()}
                onTouchStart={e => e.target.play()}
                onFocus={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
                onTouchEnd={e => e.target.pause()}
                onBlur={e => e.target.load()}>
                <source src={LogosVideo} />
              </video>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(GalleryImageList);
