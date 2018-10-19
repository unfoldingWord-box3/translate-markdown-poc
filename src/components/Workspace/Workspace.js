import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Chip,
} from '@material-ui/core';
import {
  Translate,
  Settings,
} from '@material-ui/icons';

import Block from './Block';

export const Workspace = ({classes, sources, target}) => {
  let blocks;
  let headers;
  if (sources[1] && target) {
    blocks = sources[0].blocks.map((sourceLine, index) =>
      <Grid
        key={index}
        container
        wrap="nowrap"
        spacing={16}
        className={classes.blockRow}
      >
        <Grid item xs={6}>
          <Block markdown={sourceLine} />
        </Grid>
        <Grid item xs={6}>
          <Block markdown={sources[1].blocks[index]} />
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
            label={'(' + sources[0].languageId + ') ' + sources[0].languageName + ' - ' + sources[0].version}
            onDelete={()=>{}}
            variant="outlined"
            style={{justifyContent: 'space-between', width: '100%', background: '#eee'}}
          />
        </Grid>
        <Grid item xs={6}>
          <Chip
            icon={<Translate />}
            label={'(' + sources[1].languageId + ') ' + sources[1].languageName + ' - ' + sources[1].version}
            onDelete={()=>{}}
            variant="outlined"
            style={{justifyContent: 'space-between', width: '100%', background: '#eee'}}
          />
        </Grid>
        <Grid item xs={6}>
          <Chip
            icon={<Translate />}
            label={'(' + target.languageId + ') ' + target.languageName + ' - ' + target.version}
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
  sources: PropTypes.array.isRequired,
  target: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  blockRow: {
    marginBottom: '0.3em',
  },
});

export default withStyles(styles)(Workspace);
