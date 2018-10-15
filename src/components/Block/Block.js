import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  IconButton,
} from '@material-ui/core';
import {
  CheckCircle,
  LabelImportant,
  GTranslate,
} from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';

export const Block = ({markdown, editable, reverse}) =>
  <Paper
    contentEditable={editable}
    style={{
      border: '1px solid #ccc',
      background: !editable ? '#eee' : 'transparent',
      padding: '0 1em',
    }}
  >
    <ReactMarkdown
      className='markdown'
      source={markdown}
      style={{
        transform: reverse ? 'rotateY(180deg)' : '',
      }}
    />

    { editable ?
      (<div style={{display: 'flex', justifyContent: 'space-between'}}>
        <IconButton aria-label="Complete">
          <CheckCircle fontSize="small" />
        </IconButton>
      </div>)
    :
      (<div style={{display: 'flex'}}>
        <IconButton aria-label="Copy">
          <LabelImportant fontSize="small" />
        </IconButton>
        <IconButton aria-label="Copy">
          <GTranslate fontSize="small" />
        </IconButton>
      </div>)
    }
  </Paper>

Block.propTypes = {
  markdown: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  reverse: PropTypes.bool,
}

export default Block;
