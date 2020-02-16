import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Link from 'gatsby-link';
import { FaBars } from 'react-icons/fa';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import options from '../content';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
  list: {
    width: 200,
  },
  navLink: {
    border: 'none',
    margin: '3rem',
    textDecoration: 'none',
    color: 'primary',
    fontSize: '1.1rem',
    fontWeight : '500'
  },
  navLinkActive :{
    border: 'none',
    margin: '3rem',
    textDecoration: 'none',
    color: 'secondary',
    fontSize: '1.1rem',
    fontWeight : '500'
  }
});

const MobileNavigation = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

const toggleDrawer = (side, open, classes, options ) => event => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
              {options.map((link, i) => (
          <ListItem className={classes.menuContainer} key={i}>
            <ListItemText>
              <Link 
              to={link.to}
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact={'true'}>{link.text}</Link>
            </ListItemText>
          </ListItem>
        ))}
        </List>
        </div>
  );

  return (
    <div>
    <FaBars className={classes.menuIcon} onClick={toggleDrawer('right', true)} />
    <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(MobileNavigation);
