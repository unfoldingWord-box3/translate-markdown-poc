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
  dashedColorPrimary: {
    backgroundImage: '',
    background: '#eee',
  }
});

export const File = ({classes, filename, selected, percentTranslated ,percentVerified}) =>
  <ListItem
    button
    selected={selected}
    style={{paddingLeft: '2em'}}
  >
    <ListItemIcon>
      <Note />
    </ListItemIcon>
    <ListItemText
      primary={filename}
    />
    <ProgressBar style={{ width: '3em', height: '1em', backgroundColor: '#eee'}}>
      <ProgressBar
        style={{height: '100%', backgroundColor: '#aaa', float: 'left', }}
        now={percentVerified}
      />
      <ProgressBar
        style={{height: '100%', backgroundColor: '#ccc', float: 'left', }}
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
