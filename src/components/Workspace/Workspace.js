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

import Section from './Section';

export const Workspace = ({classes, sources, target, setTargetBlock}) => {
  let sections;
  let headers;
  let xsWidth = 12 / (sources.length + 1);

  sections = sources[0].sections.map((section, index) =>
    <Section
      key={index}
      sources={
        sources.map((e,_index) =>
          sources[_index].sections[index]
        )
      }
      target={target.sections[index]}
      sectionIndex={index}
      setTargetBlock={setTargetBlock}
      xsWidth={xsWidth}
    />
  );

  headers = (
    <Grid className={classes.headers} container wrap="nowrap" spacing={16}>
      {
        sources.map((e, _index) =>
          <Grid key={_index} item xs={xsWidth}>
            <Chip
              icon={<Translate />}
              label={'(' + sources[_index].languageId + ') ' + sources[_index].languageName + ' - ' + sources[_index].version}
              onDelete={()=>{}}
              variant="outlined"
              className={classes.header}
              style={{background: '#fff9'}}
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
          className={classes.header}
          style={{background: 'white'}}
        />
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root}>
      {headers}
      {sections}
    </div>
  );
}

Workspace.propTypes = {
  sources: PropTypes.array.isRequired,
  target: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  setTargetBlock: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
  },
  headers: {
    marginBottom: '0.2em',
  },
  header: {
    justifyContent: 'space-between',
    width: '100%',
  }
});

export default withStyles(styles)(Workspace);
