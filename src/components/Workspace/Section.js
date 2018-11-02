import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Button,
} from '@material-ui/core';
import {
  ExpandMore,
} from '@material-ui/icons';

import BlockRow from './BlockRow';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raw: false,
    }
  };

  setRaw(value) {
    this.setState({
      raw: value
    });
  };

  blockRows() {
    const {section, xsWidth, setTargetBlock, sectionIndex} = this.props;
    const {raw} = this.state;
    const blockRows = section.map((blockRow, index) =>
      <BlockRow
        key={Math.random()}
        xsWidth={xsWidth}
        sourceBlock={blockRow.sourceBlock || ''}
        targetBlock={blockRow.targetBlock || ''}
        setTargetBlock={setTargetBlock}
        sectionIndex={sectionIndex}
        blockIndex={index}
        raw={raw}
      />
    );
    return blockRows;
  };

  render() {
    const {classes, section} = this.props;
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
            source={section[0].sourceBlock}
            escapeHtml={false}
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          className={classes.details}
        >
          {this.blockRows()}
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
  };
};

Section.propTypes = {
  section: PropTypes.array.isRequired,
  xsWidth: PropTypes.number.isRequired,
  sectionIndex: PropTypes.number.isRequired,
  setTargetBlock: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
  },
  details: {
    display: 'block',
    padding: 0,
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  },
});

export default withStyles(styles)(Section);
