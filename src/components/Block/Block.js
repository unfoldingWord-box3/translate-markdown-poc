import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';

export const Block = ({markdown, editable}) =>
  <Paper
    contentEditable={editable}
    style={{
      border: '1px solid #ccc',
      background: !editable ? '#eee' : 'transparent',
      padding: '0 1em',
    }}
  >
    <ReactMarkdown className='markdown' source={markdown} />
  </Paper>

Block.propTypes = {
  markdown: PropTypes.string.isRequired,
  editable: PropTypes.bool,
}

export default Block;
