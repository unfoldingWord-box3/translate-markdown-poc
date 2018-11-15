import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
} from '@material-ui/core';
import {
} from '@material-ui/icons';

import Block from './Block';

export const BlockRow = ({
  classes,
  sourceBlock,
  targetBlock,
  sectionIndex,
  blockIndex,
  setTargetBlock,
  xsWidth,
  raw
}) =>
  <Grid
    container
    wrap="nowrap"
    spacing={0}
    className={classes.blockRow}
  >
    <Grid
      item xs={xsWidth}
      className={classes.source}
    >
      <Block raw={raw} markdown={sourceBlock} />
    </Grid>
    <Grid item xs={xsWidth}>
      <Block
        editable
        raw={raw}
        markdown={targetBlock}
        sectionIndex={sectionIndex}
        blockIndex={blockIndex}
        setTargetBlock={setTargetBlock}
      />
    </Grid>
  </Grid>

BlockRow.propTypes = {
  sourceBlock: PropTypes.string.isRequired,
  targetBlock: PropTypes.string.isRequired,
  xsWidth: PropTypes.number.isRequired,
  setTargetBlock: PropTypes.func.isRequired,
  sectionIndex: PropTypes.number.isRequired,
  blockIndex: PropTypes.number.isRequired,
};

const styles = theme => ({
  blockRow: {
  },
  source: {
    background: '#eee4',
  }
});

export default withStyles(styles)(BlockRow);
