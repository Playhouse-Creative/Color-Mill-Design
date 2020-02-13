import { Link } from 'gatsby';
import React from 'react';
import { withStyles } from '@material-ui/styles';

import { Avatar, Navigation } from 'components';

import styles from './style';

type Props = {
  classes: Object,
};

const Header = ({ classes }: Props) => (
  <header className={classes.container}>
    <Link to='/' className={classes.logo}>
        <Avatar />
    </Link>
    <div className={classes.navigation}>
      <Navigation />
    </div>
  </header>
);

export default withStyles(styles)(Header);
