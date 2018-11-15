import React from 'react';
import Workspace from './Workspace';

import * as WorkspaceHelpers from './WorkspaceHelpers';
import './workspace.css';

const fileManifests = {
  source: {
    type: 'source',
    languageName: 'English',
    languageId: 'EN',
    version: 'v9',
    uri: 'data/ta/en/v9/translate/figs-metaphor/01.md',
  },
  target: {
    type: 'target',
    languageName: 'Marathi',
    languageId: 'MR',
    version: 'v9',
    uri: 'data/ta/mr/v9/translate/figs-metaphor/01.md',
  },
};

class WorkspaceContainer extends React.Component {
  state = {
    source: null,
    target: null,
  };

  setTargetBlock(sectionIndex, blockIndex, markdownBlock) {
    const target = JSON.parse(JSON.stringify(this.state.target));
    const sections = WorkspaceHelpers.setBlockInSections(target.sections, markdownBlock, sectionIndex, blockIndex);
    target.sections = sections;
    this.setState({
      target: target
    });
  };

  componentDidMount() {
    WorkspaceHelpers.fetchFiles(fileManifests.source, fileManifests.target)
    .then(({source, target}) => {
      this.setState({
        source: source,
        target: target
      });
    })
  };

  render() {
    const props = this.props;
    let {
      source,
      target,
    } = this.state;

    let workspace = <div />;
    if (source && target) {
      workspace = <Workspace
        {...props}
        source={source}
        target={target}
        setTargetBlock={this.setTargetBlock.bind(this)}
      />
    }

    return workspace;
  };
};
export default WorkspaceContainer;
