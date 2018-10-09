import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import Translate from '@material-ui/icons/Translate';

const styles = theme => ({
  root: {
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class TranslateMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClose}>Source</MenuItem>
        <MenuItem onClick={this.handleClose}>Target</MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <div className={classes.sectionMobile}>
          <IconButton aria-haspopup="true" onClick={this.handleMenuOpen} color="inherit">
            <Translate />
          </IconButton>
        </div>
        {renderMenu}
      </div>
    );
  }
}

TranslateMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TranslateMenu);
