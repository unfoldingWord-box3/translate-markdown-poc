import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Button,
} from '@material-ui/core';
import {
  ExpandMore,
} from '@material-ui/icons';

import BlockContainer from './BlockContainer';
import Block from './Block';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raw: false,
    }
  };

  setRaw(value) {
    this.setState({
      raw: value,
    });
  }

  render() {
    const {classes, sources, target, xsWidth, setTargetBlock, sectionIndex} = this.props;
    const {raw} = this.state;

    return (
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
        <ExpansionPanelDetails
          className={classes.details}
        >
          {
            sources[0].map((block,index) =>
              <Grid
                container
                key={index}
                wrap="nowrap"
                spacing={0}
                className={classes.blockRow}
              >
                {
                  sources.map((e,_index) =>
                    <Grid
                      key={_index}
                      item xs={xsWidth}
                      className={classes.source}
                    >
                      <Block raw={raw} markdown={sources[_index][index] + '\n\n'} />
                    </Grid>
                  )
                }
                <Grid item xs={xsWidth}>
                  <BlockContainer
                    editable
                    raw={raw}
                    markdown={target[index] + '\n\n'}
                    sectionIndex={sectionIndex}
                    blockIndex={index}
                    setTargetBlock={setTargetBlock}
                  />
                </Grid>
              </Grid>
            )
          }
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Button
            size="small"
            onClick={() => this.setRaw(!raw)}
          >
            Raw
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
};

Section.propTypes = {
  sources: PropTypes.array.isRequired,
  target: PropTypes.array.isRequired,
  xsWidth: PropTypes.number.isRequired,
  sectionIndex: PropTypes.number.isRequired,
  setTargetBlock: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
  },
  blockRow: {
  },
  details: {
    display: 'block',
    padding: 0,
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  },
  source: {
    background: '#eee4',
  }
});

export default withStyles(styles)(Section);
