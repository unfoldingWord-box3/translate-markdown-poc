import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@material-ui/core';
import {
  ExpandLess,
  Folder
} from '@material-ui/icons';

import File from './File';

export const FileManager = ({classes, filenames, selected}) => {
  const files = filenames ?
  filenames.map((filename, index) =>
    <File
      key={index}
      filename={'' + filename + '.md'}
      selected={(filename + '' === selected)}
      percentTranslated={100 - filename}
      percentVerified={100 - (2 * filename)}
    />
  ) : [];

  return (
    <div className={classes.files}>
      <List
        className={classes.files}
        component="nav"
        dense
      >
        <div className={classes.fileList}>
          <ListItem className={classes.fileListItem}>
            <ListItemIcon>
              <Folder />
            </ListItemIcon>
            <ListItemText inset primary="content/" />
            <ExpandLess />
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List dense>
              {files}
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </List>
          </Collapse>
        </div>
      </List>
    </div>
  );
}

FileManager.propTypes = {
  filenames: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  files: {
    height: '100%',
  },
  fileList: {
    height: '100%',
    overflowY: 'auto',
  },
  fileListItem: {
    paddingLeft: '1em',
  },
});

export default withStyles(styles)(FileManager);
