import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
} from '@material-ui/core';
import {
  Note,
} from '@material-ui/icons';

export const File = ({filename, selected}) =>
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
    <LinearProgress
    variant="buffer"
    value={10}
    valueBuffer={20}
    />
  </ListItem>

File.propTypes = {
  filename: PropTypes.string.isRequired
}

export default File;
