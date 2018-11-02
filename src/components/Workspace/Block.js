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
  setMarkdown,
  setMarkdownFromHtml
}) =>
  <div className={classes.root}>
    <div
      className={classes.markdownWrapper}
    >
      {
        raw ? (
          <pre
            className={classes.markdown}
            contentEditable={editable}
            onBlur={(e)=>{
              setMarkdown(e.target.innerText);
            }}
            dangerouslySetInnerHTML={
              { __html: markdown }
            }
          />
        ) : (
          <div
            className={classes.html}
            contentEditable={editable}
            dangerouslySetInnerHTML={
              { __html: helpers.markdownToHtml(markdown) }
            }
            onBlur={(e)=>{
              const html = e.target.innerHTML;
              setMarkdownFromHtml(html);
            }}
          />
        )
      }
    </div>
  </div>

Block.propTypes = {
  markdown: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  raw: PropTypes.bool,
  setMarkdown: PropTypes.func,
  setMarkdownFromHtml: PropTypes.func,
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
  html: {
    height: '100%',
  },
  markdown: {
    height: '100%',
    whiteSpace: 'pre-wrap',
    fontSize: '1.2em',
  }
})

export default withStyles(styles)(Block);
