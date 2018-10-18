import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
} from '@material-ui/core';
import {
} from '@material-ui/icons';

import File from './File';

export const Directory = ({classes, fileTree, selected, depth}) => {
  const files = fileTree ?
    fileTree.map((fileObject, index) =>
      <File
        key={index}
        fileObject={fileObject}
        selected={selected}
        depth={depth}
        percentTranslated={100 - 2 * index}
        percentVerified={100 - (4 * index)}
      />
    ) : [];

  return (
    <div>
      {files}
    </div>
  );
}

Directory.propTypes = {
  classes: PropTypes.object.isRequired,
  fileTree: PropTypes.array.isRequired,
  selected: PropTypes.bool,
  depth: PropTypes.number.isRequired,
}
const styles = theme => ({
});

export default withStyles(styles)(Directory);
