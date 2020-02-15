import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { FaBars } from 'react-icons/fa';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import MobileNavigation from './';
import options from '../content';


type Props = {
    
    classes: Object,
    options: [],
  };

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});



const MenuDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
          <ListItem button key={options}>
        <MobileNavigation/>
        </ListItem>
          </List>
    </div>
  );

  return (
    <div>
      <FaBars onClick={toggleDrawer('right', true)}/>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
        }
export default withStyles(styles)(MenuDrawer);