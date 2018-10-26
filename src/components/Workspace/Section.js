import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Typography,
  Button,
} from '@material-ui/core';
import {
  ExpandMore,
} from '@material-ui/icons';

import ReactMarkdown from 'react-markdown';

import Block from './Block';

export const Section = ({classes, sources, target, xsWidth}) =>
  <ExpansionPanel className={classes.root}>
    <ExpansionPanelSummary
      expandIcon={<ExpandMore />}
      classes={{content: 'summaryContent'}}
      content={classes.content}
    >
      <ReactMarkdown
        className={classes.summaryContent}
        source={sources[0][0]}
        escapeHtml={false}
      />
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className={classes.details}>
      {
        sources[0].map((block,index) =>
          <Grid
            key={index}
            container
            wrap="nowrap"
            spacing={0}
            className={classes.blockRow}
          >
            {
              sources.map((e,_index) =>
                <Grid
                  item xs={xsWidth}
                  className={classes.source}
                >
                  <Block markdown={sources[_index][index]} />
                </Grid>
              )
            }
            <Grid item xs={xsWidth}>
              <Block markdown={target[index]} editable={true} />
            </Grid>
          </Grid>
        )
      }
    </ExpansionPanelDetails>
    <ExpansionPanelActions>
      <Button size="small">
        Raw
      </Button>
      <Button size="small" color="primary">
        Save
      </Button>
    </ExpansionPanelActions>
  </ExpansionPanel>

Section.propTypes = {
  sources: PropTypes.array.isRequired,
  target: PropTypes.array.isRequired,
  xsWidth: PropTypes.number.isRequired,
}

const styles = theme => ({
  root: {
  },
  blockRow: {
  },
  details: {
    display: 'block',
    padding: 0,
  },
  source: {
    background: '#eee4',
  }
})

export default withStyles(styles)(Section);
