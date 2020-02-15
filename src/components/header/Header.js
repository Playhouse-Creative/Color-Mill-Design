import { Link } from 'gatsby';
import React from 'react';
import { withStyles } from '@material-ui/styles';

// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
// import Hidden from "@material-ui/core/Hidden";
// import Drawer from "@material-ui/core/Drawer";
// // @material-ui/icons
// import { FaBars } from 'react-icons/fa';

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
