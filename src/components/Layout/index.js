import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
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

import Files from '../Files';
import TranslateMenu from '../TranslateMenu'
import Main from './Main'
import styles from './styles';

class Layout extends React.Component {
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
    const { classes, theme } = this.props;
    const { open } = this.state;

    const filenames = [...Array(49).keys()]
      .map(number => '' + (number + 1) + '.md');

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
        </div>
        <Divider />
        <Files filenames={filenames} />
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
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
                translateMarkdown
              </Typography>
              <div style={{position: 'absolute', right: 0}}>
                <TranslateMenu  />
              </div>
            </Toolbar>
          </AppBar>
          {drawer}
          <main
            className={classNames(classes.content, classes[`content-left`], {
              [classes.contentShift]: open,
              [classes[`contentShift-left`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Main />
          </main>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);
