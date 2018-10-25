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
  let xsWidth = 12 / (sources.length + 1);
  if (sources[0] && target) {
    blocks = sources[0].blocks.map((sourceLine, index) =>
      <Grid
        key={index}
        container
        wrap="nowrap"
        spacing={16}
        className={classes.blockRow}
      >
        {
          sources.map((e,_index) =>
            <Grid item xs={xsWidth}>
              <Block markdown={sources[_index].blocks[index]} />
            </Grid>
          )
        }
        <Grid item xs={xsWidth}>
          <Block markdown={target.blocks[index]} editable={true} />
        </Grid>
      </Grid>
    );

    headers = (
      <Grid container wrap="nowrap" spacing={16}>
        {
          sources.map((e,_index) =>
            <Grid item xs={xsWidth}>
              <Chip
                icon={<Translate />}
                label={'(' + sources[_index].languageId + ') ' + sources[_index].languageName + ' - ' + sources[_index].version}
                onDelete={()=>{}}
                variant="outlined"
                style={{justifyContent: 'space-between', width: '100%', background: '#eee'}}
              />
            </Grid>
          )
        }
        <Grid item xs={xsWidth}>
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
