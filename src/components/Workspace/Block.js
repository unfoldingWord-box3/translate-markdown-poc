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

const styles = theme => ({
  root: {
    border: '1px solid #ccc',
  },
})

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
      (<div style={{display: 'flex', justifyContent: 'space-between'}}>
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

export default withStyles(styles)(Block);
