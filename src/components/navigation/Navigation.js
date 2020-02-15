import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import withWidth from '@material-ui/core/withWidth';

import { compose, isMobileView } from 'utils';

import MainNavigation from './main';
import MenuDrawer from './mobile';
import options from './content';
import styles from './style';

type Props = {
  classes: Object,
  width: string,
};

const Navigation = ({ classes, width }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      {isMobileView(width) ? (
        <MenuDrawer
           options={options}
          open={open}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <MainNavigation options={options} />
      )}
    </div>
  );
};

export default compose(
  withWidth(),
  withStyles(styles)
)(Navigation);
