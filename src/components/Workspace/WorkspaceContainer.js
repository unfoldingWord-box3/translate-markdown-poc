import React from 'react';
import Workspace from './Workspace';

// import source0Path from '../../data/ta/en/v10/translate/figs-metaphor/01.md';
import source1Path from '../../data/ta/en/v9/translate/figs-metaphor/01.md';
import targetPath from '../../data/ta/mr/v9/translate/figs-metaphor/01.md';

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

  componentWillMount() {
    this.fetchFile(files.sources[0])
    // .then(()=>{ this.fetchFile(files.sources[1]) })
    .then(()=>{ this.fetchFile(files.target) });
    ;
  };

  fetchFile(config) {
    const _this = this;
    const promise = new Promise((resolve) => {
      fetch(config.path)
        .then((res) => res.text())
        .then((text) => {
          const blocks = text
            .split(/\n\n/)
            .filter(line => {return line !== ''});
          const data = config;
          data.blocks = blocks
          if (config.type === 'source') {
            let sources = _this.state.sources;
            sources.push(data);
            _this.setState({
              sources: sources
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
      sources,
      target,
    } = this.state;

    return (
      <Workspace
        {...props}
        sources={sources}
        target={target}
      />
    );
  };
};
export default WorkspaceContainer;
