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

const filenames = [...Array(50).keys()];

const selected = '10';

export const Files = ({classes}) =>

  <div className={classes.files}>
    <List
      className={classes.files}
      component="nav"
      dense
    >
      <div className={classes.fileList}>
        <ListItem style={{paddingLeft: '1em'}}>
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
          <ListItemText inset primary="content/" />
          <ExpandLess />
        </ListItem>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <List dense>
            {
              filenames.map((filename, index) =>
                <File
                  key={index}
                  filename={'' + (filename + 1) + '.md'}
                  selected={(filename + 1 + '' === selected)}
                  percentTranslated={100 - filename}
                  percentVerified={100 - (2 * filename)}
                />
              )
            }
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

Files.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Files);
