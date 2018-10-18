import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
} from '@material-ui/core';

import Directory from './Directory';

export const FileManager = ({classes, fileTree, selected}) =>
  <div className={classes.files}>
    <List
      className={classes.files}
      component="nav"
      dense
    >
      <Directory fileTree={fileTree} depth={1} selected />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </List>
  </div>

FileManager.propTypes = {
  fileTree: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  files: {
    height: '100%',
  },
});

export default withStyles(styles)(FileManager);
