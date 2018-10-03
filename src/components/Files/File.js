import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Note } from '@material-ui/icons';

export const File = ({filename}) =>
  <div>
    <ListItem button selected={filename === '10.md'}>
      <ListItemIcon>
        <Note />
      </ListItemIcon>
      <ListItemText primary={filename} />
    </ListItem>
  </div>

File.propTypes = {
  filename: PropTypes.string.isRequired
}

export default File;
