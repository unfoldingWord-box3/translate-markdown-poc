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

export const Workspace = ({sources, target}) => {
  const blocks = sources[0].map((sourceLine, index) =>
    <Grid container wrap="nowrap" key={index} spacing={16}>
      <Grid component="div" item xs={4}>
        <Block markdown={sourceLine} reverse />
      </Grid>
      <Grid item xs={4}>
        <Block markdown={sourceLine} />
      </Grid>
      <Grid item xs={4}>
        <Block markdown={target[index]} editable={true} />
      </Grid>
    </Grid>
  );

  return (
    <div>
      <Grid container wrap="nowrap" spacing={16}>
        <Grid component="div" item xs={4}>
          <Chip
            icon={<Translate />}
            label={"(NE) Hsilgne"}
            onDelete={()=>{}}
            variant="outlined"
            style={{justifyContent: 'space-between', width: '100%', background: '#eee'}}
          />
        </Grid>
        <Grid item xs={4}>
          <Chip
            icon={<Translate />}
            label={"(EN) English"}
            onDelete={()=>{}}
            variant="outlined"
            style={{justifyContent: 'space-between', width: '100%', background: '#eee'}}
          />
        </Grid>
        <Grid item xs={4}>
          <Chip
            icon={<Translate />}
            label={"(HI) Hindi"}
            onDelete={()=>{}}
            deleteIcon={<Settings />}
            variant="outlined"
            style={{justifyContent: 'space-between', width: '100%'}}
          />
        </Grid>
      </Grid>
      {blocks}
    </div>
  );
}

Workspace.propTypes = {
  sources: PropTypes.array.isRequired,
  target: PropTypes.array.isRequired,
}

export default Workspace;
