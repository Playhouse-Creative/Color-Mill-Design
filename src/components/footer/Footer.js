import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './style';

type Props = {
  classes: Object,
};

const Footer = ({ classes }: Props) => (
  <footer className={classes.container}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href='https://www.gatsbyjs.org'  >Gatsby</a>
  </footer>
);

export default withStyles(styles)(Footer);
