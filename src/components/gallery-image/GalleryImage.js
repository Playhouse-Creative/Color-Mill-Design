import React from 'react';
import { withStyles } from '@material-ui/styles';
import Img from 'gatsby-image';
// import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade'

import styles from './style';

type Props = {
    classes : Object,
    data: Object,
};

const GalleryImage = ({classes, data}: Props) => (
    <Fade in timeout={500}>
    <div className={classes.container}>
    {data.stillImage ? <Img fluid={data.stillImage.fluid}/> : null}    
    </div>
    </Fade>
);

export default withStyles(styles)(GalleryImage)