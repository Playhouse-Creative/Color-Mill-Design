import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/styles';
import { FaBars } from 'react-icons/fa';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './style';

type Props = {
  classes: Object,
  options: [],
  open: Boolean,
  onClick: () => void,
};


const MobileNavigation = ({ classes, options, onClick, open }: Props) => (
  <>
  
    <FaBars className={classes.menuIcon} onClick={toggleDrawer('right', true)} />


    {/* {open && (
      <div className={classes.menuContainer}>
        {options.map((link, i) => (
          <div key={i}>
            <Link
              to={link.to}
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact={'true'}>
              <span>{link.text}</span>
            </Link>
          </div>
        ))}
      </div>
    )} */}
  </>
);

export default withStyles(styles)(MobileNavigation);
