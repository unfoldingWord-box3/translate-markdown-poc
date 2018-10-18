import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  IconButton,
} from '@material-ui/core';
import {
  CheckCircle,
} from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';

export const Block = ({classes, markdown, editable, reverse}) =>
  <Paper
    className={classes.root}
    style={{
      background: !editable ? '#eee' : 'transparent',
    }}
  >
    <div
      contentEditable={editable}
      style={{
        padding: '0 1em',
        transform: reverse ? 'rotateY(180deg)' : '',
      }}
    >
      <ReactMarkdown className='markdown' source={markdown} />
    </div>

    { editable ?
      (<div className={classes.buttons}>
        <IconButton aria-label="Complete">
          <CheckCircle fontSize="small" />
        </IconButton>
      </div>)
    :
      (<div />)
    }
  </Paper>

Block.propTypes = {
  markdown: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  reverse: PropTypes.bool,
}

const styles = theme => ({
  root: {
    border: '1px solid #ccc',
    height: '100%',
  },
  buttons: {
    width: 'auto',
    marginTop: '-1.7em',
    textAlign: 'right',
  },
})

export default withStyles(styles)(Block);
