import React from 'react';
import FileManager from './FileManager';

import fileTree from './fileTree';

const selected = '01.md';

const FileManagerContainer = (props) =>
  <FileManager
    {...props}
    fileTree={fileTree}
    selected={selected}
  />

export default FileManagerContainer;
