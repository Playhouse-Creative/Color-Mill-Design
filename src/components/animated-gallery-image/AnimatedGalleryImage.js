import React from 'react';
import { withStyles } from '@material-ui/styles';
//import Img from 'gatsby-image';
// import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade'

import styles from './style';

type Props = {
    classes : Object,
    data: Object,
};

const AnimatedGalleryImage = ({classes, data}: Props) => (
    <Fade in timeout={500}>
    <div className={classes.container}>
    {data.animatedImage ? <video loop autoload={true} src='../images/Animated-Bourbon-Bottle.webm' alt={data.animatedImage.name}/> : null}    
    </div>
    </Fade>
);

export default withStyles(styles)(AnimatedGalleryImage)