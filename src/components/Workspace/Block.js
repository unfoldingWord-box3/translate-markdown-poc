import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
} from '@material-ui/core';
import {
} from '@material-ui/icons';
import * as helpers from './helpers';

export const Block = ({
  classes,
  markdown,
  editable,
  raw,
  sectionIndex,
  blockIndex,
  setMarkdown,
  setMarkdownFromHtml
}) =>
  <div className={classes.root}>
    <div
      contentEditable={editable}
      className={classes.markdownWrapper}
      onBlur={(e)=>{
        if (raw) {
          setMarkdown(e.target.textContent);
        } else {
          const html = e.target.innerHTML;
          setMarkdownFromHtml(html);
        }
      }}
    >
      {
        raw ? (
          <pre className={classes.raw}>
            {markdown}
          </pre>
        ) : (
          <div
            className={classes.markdown}
            dangerouslySetInnerHTML={
              { __html: helpers.markdownToHtml(markdown) }
            }
          />
        )
      }
    </div>
  </div>

Block.propTypes = {
  markdown: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  raw: PropTypes.bool,
  sectionIndex: PropTypes.number.isRequired,
  blockIndex: PropTypes.number.isRequired,
  setMarkdown: PropTypes.func.isRequired,
  setMarkdownFromHtml: PropTypes.func.isRequired,
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
    margin: '0 0.5em',
    padding: '0 0.5em',
  },
  markdown: {
  },
  raw: {
    whiteSpace: 'pre-wrap',
    fontSize: '1.2em',
  }
})

export default withStyles(styles)(Block);
