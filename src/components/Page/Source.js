import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';

import markdown from './10-en.md.js';

export const Source = () => {
  const source = (
    <Paper style={{padding: '1em'}} elevation={1}>
      <ReactMarkdown className='markdown' source={markdown} />
    </Paper>
  );
  return source;
}

Source.propTypes = {
}

export default Source;
