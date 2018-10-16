import React from 'react';
import FileManager from './FileManager';

const filenames = [...Array(50).keys()].map(i => i + 1);
const selected = '10';

const FileManagerContainer = (props) =>
  <FileManager
    {...props}
    filenames={filenames}
    selected={selected}
  />

export default FileManagerContainer;
