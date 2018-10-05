import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import Collapse from '@material-ui/core/Collapse';

import File from './File';

export const Files = ({filenames}) =>

  <div className='files'>
    <List
      component="nav"
      subheader={
        <ListSubheader>Files</ListSubheader>
      }
    >
      <Divider />
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
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
    </List>
  </div>

Files.propTypes = {
  filenames: PropTypes.array.isRequired
};

export default Files;
