import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'
import BourbonVideo from 'images/Color Mill Design 3 Frames.mp4'
import { GalleryImage, AnimatedGalleryImage } from 'components';

import useGalleryImages from './useGalleryImages';
import styles from './style';


type Props = {
  classes: Object,
};

const GalleryImageList = ({ classes }: Props) => {
  const { allContentfulGalleryImage } = useGalleryImages();

  const invisible=(e) => {
    e.target.style.opacity = '0'
  }

  const visible=(e) => {
    e.target.style.opacity = '1'
  }

  return (
    <div className={classes.container}>
    <Grid container spacing={2}  >
    
      {allContentfulGalleryImage.edges.map(({ node }, index) => (
        <Grid item xs={12} md={6} >
          <div className={classes.animatedBackground} >
        <Link background={<video><source src={BourbonVideo} type='video/mp4'/></video>}>
        <div role="navigation" onMouseEnter={invisible}
        onMouseLeave={visible} >
        <GalleryImage key={index} data={node}/>
        </div>
        </Link>
        </div>
        </Grid>
      ))}
      
      </Grid>
      </div>
  );
};

export default withStyles(styles)(GalleryImageList);