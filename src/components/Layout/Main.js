import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Target from '../Page/Target';
import Source from '../Page/Source';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Source />
        </Grid>
        <Grid item xs={6}>
          <Target />
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
