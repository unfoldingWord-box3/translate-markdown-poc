import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Note,
} from '@material-ui/icons';
import {
  ProgressBar,
} from 'react-bootstrap';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  fileList: {
    paddingLeft: '2em',
  },
  progressBar: {
    width: '3em',
    height: '1em',
    backgroundColor: '#eee',
  },
  progressVerified: {
    height: '100%',
    backgroundColor: '#aaa',
    float: 'left',
  },
  progressTranslated: {
    height: '100%',
    backgroundColor: '#ccc',
    float: 'left',
  },
});

export const File = ({classes, filename, selected, percentTranslated ,percentVerified}) =>
  <ListItem
    button
    selected={selected}
    className={classes.fileList}
  >
    <ListItemIcon>
      <Note />
    </ListItemIcon>
    <ListItemText
      primary={filename}
    />
    <ProgressBar className={classes.progressBar}>
      <ProgressBar
        className={classes.progressVerified}
        now={percentVerified}
      />
      <ProgressBar
        className={classes.progressTranslated}
        now={percentTranslated - percentVerified}
      />
    </ProgressBar>
  </ListItem>

File.propTypes = {
  classes: PropTypes.object.isRequired,
  filename: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  percentTranslated: PropTypes.number,
  percentVerified: PropTypes.number,
}

export default withStyles(styles)(File);
