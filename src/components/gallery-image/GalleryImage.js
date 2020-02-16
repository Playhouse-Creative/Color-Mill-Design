import React from 'react';
import { withStyles } from '@material-ui/styles';
import Img from 'gatsby-image';

import styles from './style';

type Props = {
    classes : Object,
    data: Object,
};

const GalleryImage = ({classes, data}: Props) => (
    <div className={classes.container}>
    {data.stillImage ? <Img fluid={data.stillImage.fluid}/> : null}
    
    </div>
);

export default withStyles(styles)(GalleryImage)