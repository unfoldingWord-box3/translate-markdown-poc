import React from 'react';
import Workspace from './Workspace';

import sourcePath from '../../data/ta/en/v9/translate/figs-metaphor/01.md';
import targetPath from '../../data/ta/mr/v9/translate/figs-metaphor/01.md';

const files = {
  source:
    {
      type: 'source',
      languageName: 'English',
      languageId: 'EN',
      version: 'v9',
      path: sourcePath,
    },
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
      source: null,
      target: null,
    }
  };

  componentWillMount() {
    this.fetchFile(files.source)
      .then(()=>{
        this.fetchFile(files.target);
      });
    ;
  };

  fetchFile(config) {
    const _this = this;
    const promise = new Promise((resolve) => {
      fetch(config.path)
        .then((res) => res.text())
        .then((text) => {
          const blocks = text.split(/\n\n/)
            .filter(line => {return line !== ''});
          const data = config;
          data.blocks = blocks
          if (config.type === 'source') {
            _this.setState({
              source: data
            });
          }
          if (config.type === 'target') {
            _this.setState({
              target: data
            });
          }
          resolve();
        });
    });
    return promise;
  }

  render() {
    const props = this.props;
    let {
      source,
      target,
    } = this.state;

    return (
      <Workspace
        {...props}
        source={source}
        target={target}
      />
    );
  };
};
export default WorkspaceContainer;
