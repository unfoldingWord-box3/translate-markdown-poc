import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
} from '@material-ui/core';
import {
} from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';

export const Block = ({classes, markdown, editable, reverse}) =>
  <div
    className={classes.root}
  >
    <div
      contentEditable={editable}
      className={classes.markdownWrapper}
    >
      <ReactMarkdown
        className={classes.markdown}
        source={markdown}
        escapeHtml={false}
      />
    </div>
  </div>

Block.propTypes = {
  markdown: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  reverse: PropTypes.bool,
}

const styles = theme => ({
  root: {
    // borderWidth: '0.5px',
    // border: 'dashed #ccc',
    height: '100%',
    width: '100%',
  },
  markdownWrapper: {
    height: '100%',
  },
  markdown: {
    padding: '0 1em',
  },
})

export default withStyles(styles)(Block);
