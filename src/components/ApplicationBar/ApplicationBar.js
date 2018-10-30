import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton
} from '@material-ui/core';
import {
  Menu,
  ChevronLeft
} from '@material-ui/icons';

import FileManager from '../FileManager';

class ApplicationBar extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, projectName, filepath } = this.props;
    const { open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant='subheading'>
            Files
          </Typography>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <FileManager />
      </Drawer>
    );

    return (
      <div>
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
            [classes[`appBarShift-left`]]: open,
          })}
        >
          <Toolbar className={classes.toolbar} disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {projectName}
            </Typography>
            <Typography variant="subheading" color="inherit" className={classes.filepath} noWrap>
              /{filepath}
            </Typography>
          </Toolbar>
        </AppBar>
        {drawer}
      </div>
    );
  }
}

ApplicationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  projectName: PropTypes.string.isRequired,
  filepath: PropTypes.string.isRequired,
};

const drawerWidth = 280;
const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaper: {
    width: drawerWidth,
    overflowY: 'unset',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px 0 1em',
    ...theme.mixins.toolbar,
  },
  toolbar: {
    width: '100%',
  },
  filepath: {
    // marginLeft: '0.1em',
  },
});

export default withStyles(styles, { withTheme: true })(ApplicationBar);
