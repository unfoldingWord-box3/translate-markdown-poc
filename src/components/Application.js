import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ApplicationBarContainer from './ApplicationBarContainer';
import WorkspaceContainer from './WorkspaceContainer';

export const Application = ({classes}) =>
  <div className={classes.root}>
    <div className={classes.appFrame}>
      <ApplicationBarContainer />
      <main className={classes.main}>
        <WorkspaceContainer />
      </main>
    </div>
  </div>

Application.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  main: {
    padding: '5em 1em 1em 1em',
  }
});

export default withStyles(styles)(Application);
