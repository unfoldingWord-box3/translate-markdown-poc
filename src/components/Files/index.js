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

const styles = theme => ({
  files: {
    height: '100%',
  },
  fileList: {
    height: '100%',
    overflowY: 'auto',
  }
});

export const Files = ({filenames, classes}) =>

  <div className={classes.files}>
    <List
      className={classes.files}
      component="nav"
    >
      <div className={classes.fileList}>
        <ListItem>
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
          <ListItemText inset primary="content/" />
          <ExpandLess />
        </ListItem>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <List component="div" style={{paddingLeft: '1em'}}>
            {
              filenames.map((filename, index) =>
                <File key={index} filename={filename} />
              )
            }
          </List>
        </Collapse>
      </div>
    </List>
  </div>

Files.propTypes = {
  classes: PropTypes.object.isRequired,
  filenames: PropTypes.array.isRequired
};

export default withStyles(styles)(Files);
