import React from 'react';
import Workspace from './Workspace';

// import source0Path from '../../data/ta/en/v10/translate/figs-metaphor/01.md';
import source1Path from '../../data/ta/en/v9/translate/figs-metaphor/01.md';
import targetPath from '../../data/ta/mr/v9/translate/figs-metaphor/01.md';

import * as helpers from './helpers';
import './workspace.css';

const files = {
  sources: [
    // {
    //   type: 'source',
    //   languageName: 'English',
    //   languageId: 'EN',
    //   version: 'v10',
    //   path: source0Path,
    // },
    {
      type: 'source',
      languageName: 'English',
      languageId: 'EN',
      version: 'v9',
      path: source1Path,
    },
  ],
  target:
    {
      type: 'target',
      languageName: 'Marathi',
      languageId: 'MR',
      version: 'v9',
      path: targetPath,
    },
}

class WorkspaceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      target: null,
    }
  };

  setTargetBlock(sectionIndex, blockIndex, markdownBlock) {
    const target = JSON.parse(JSON.stringify(this.state.target));
    const _sections = helpers.setBlockInSections(target.sections, markdownBlock, sectionIndex, blockIndex);
    target.sections = _sections;
    this.setState({
      target: target
    });
  };

  componentDidMount() {
    helpers.fetchFile(files.sources[0])
    .then(data => {
      let sources = this.state.sources;
      sources.push(data);
      this.setState({
        sources: sources
      });
    })
    .then(()=>{
      // helpers.fetchFile(files.sources[1])
      // .then(data => {
      //   let sources = this.state.sources;
      //   sources.push(data);
      //   this.setState({
      //     sources: sources
      //   });
      // })
      // .then(()=>{
        helpers.fetchFile(files.target)
        .then(data => {
          this.setState({
            target: data
          });
        });
      // });
    });
  };

  render() {
    const props = this.props;
    let {
      sources,
      target,
    } = this.state;

    let workspace = <div />;
    if (sources[0] && target) {
      workspace = <Workspace
        {...props}
        sources={sources}
        target={target}
        setTargetBlock={this.setTargetBlock.bind(this)}
      />
    }

    return workspace;
  };
};
export default WorkspaceContainer;
