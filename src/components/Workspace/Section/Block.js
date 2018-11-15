import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
} from '@material-ui/core';
import {
} from '@material-ui/icons';
import * as WorkspaceHelpers from '../WorkspaceHelpers';

export const Block = ({
  classes,
  markdown,
  editable,
  raw,
  setTargetBlock,
  sectionIndex,
  blockIndex,
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
              const markdown = e.target.innerText;
              setTargetBlock(
                sectionIndex,
                blockIndex,
                markdown,
              );
            }}
            dangerouslySetInnerHTML={
              { __html: WorkspaceHelpers.prepareMarkdownForDisplay(markdown) }
            }
          />
        ) : (
          <div
            className={classes.html}
            contentEditable={editable}
            dangerouslySetInnerHTML={
              { __html: WorkspaceHelpers.markdownToHtml(
                markdown
              ) }
            }
            onBlur={(e)=>{
              const html = e.target.innerHTML;
              const markdown = WorkspaceHelpers.htmlToMarkdown(html);
              setTargetBlock(
                sectionIndex,
                blockIndex,
                markdown,
              );
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
  sectionIndex: PropTypes.number,
  blockIndex: PropTypes.number,
  setTargetBlock: PropTypes.func,
}

const styles = theme => ({
  root: {
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
