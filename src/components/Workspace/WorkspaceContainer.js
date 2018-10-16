import React from 'react';
import Workspace from './Workspace';

import sourceMarkdown from '../../data/obs/10-en.md.js';
import targetMarkdown from '../../data/obs/10-hi.md.js';
const source = sourceMarkdown.split(/\n/)
  .filter(line => {return line !== ''});
const target = targetMarkdown.split(/\n/)
  .filter(line => {return line !== ''});

const WorkspaceContainer = (props) =>
  <Workspace
    {...props}
    sources={[source]}
    target={target}
  />

export default WorkspaceContainer;
