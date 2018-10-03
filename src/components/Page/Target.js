import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';

import markdown from './10-hi.md.js';

export const Target = () => {
  const target = (
    <Paper style={{padding: '1em'}} elevation={1}>
      <ReactMarkdown className='markdown' source={markdown} />
    </Paper>
  );
  return target;
}

Target.propTypes = {
}

export default Target;
