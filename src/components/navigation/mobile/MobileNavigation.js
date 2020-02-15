import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Link from 'gatsby-link';


type Props = {
  classes: Object,
  options: [],
}; 

const MobileNavigation = ({ classes, options, }: Props) => {
  return (<ul>
    {options.map((link, i) => (<li className={classes.menuContainer} key={i}>
      <Link to={link.to} className={classes.navLink} activeClassName={classes.navLinkActive} exact={'true'}>
        <span>{link.text}</span>
      </Link>
    </li>))}
  </ul>);
};

export default withStyles(styles)(MobileNavigation);
