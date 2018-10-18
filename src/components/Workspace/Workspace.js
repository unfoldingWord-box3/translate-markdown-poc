import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Chip,
} from '@material-ui/core';
import {
  Translate,
  Settings,
} from '@material-ui/icons';

import Block from './Block';

export const Workspace = ({source, target}) => {
  let blocks;
  let headers;
  if (source && target) {
    blocks = source.blocks.map((sourceLine, index) =>
      <Grid container wrap="nowrap" key={index} spacing={16}>
        <Grid item xs={6}>
          <Block markdown={sourceLine} />
        </Grid>
        <Grid item xs={6}>
          <Block markdown={target.blocks[index]} editable={true} />
        </Grid>
      </Grid>
    );

    headers = (
      <Grid container wrap="nowrap" spacing={16}>
        <Grid item xs={6}>
          <Chip
            icon={<Translate />}
            label={'(' + source.languageId + ') ' + source.languageName + ' - ' + source.version}
            onDelete={()=>{}}
            variant="outlined"
            style={{justifyContent: 'space-between', width: '100%', background: '#eee'}}
          />
        </Grid>
        <Grid item xs={6}>
          <Chip
            icon={<Translate />}
            label={'(' + target.languageId + ') ' + target.languageName + ' - ' + source.version}
            onDelete={()=>{}}
            deleteIcon={<Settings />}
            variant="outlined"
            style={{justifyContent: 'space-between', width: '100%'}}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <div>
      {headers}
      {blocks}
    </div>
  );
}

Workspace.propTypes = {
  source: PropTypes.object.isRequired,
  target: PropTypes.object.isRequired,
}

export default Workspace;
