import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'

import { GalleryImage } from 'components';

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
        <Grid item sm={12} md={6} >
        <Link onMouseEnter={invisible}
        onMouseLeave={visible}>
        
        <GalleryImage key={index} data={node} />
        
        </Link>
        </Grid>
      ))}
      
      </Grid>
      </div>
  );
};

export default withStyles(styles)(GalleryImageList);