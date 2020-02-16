import React from 'react';
import { withStyles } from '@material-ui/styles';

import { GalleryImage } from 'components';

import useGalleryImages from './useGalleryImages';
import styles from './style';

type Props = {
  classes: Object,
};

const GalleryImageList = ({ classes }: Props) => {
  const { allContentfulGalleryImage } = useGalleryImages();

  return (
    <div className={classes.container}>
      {allContentfulGalleryImage.edges.map(({ node }, index) => (
        <GalleryImage key={index} data={node} />
      ))}
    </div>
  );
};

export default withStyles(styles)(GalleryImageList);