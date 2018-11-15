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
import * as WorkspaceHelpers from './WorkspaceHelpers';

export const Workspace = ({classes, source, target, setTargetBlock}) => {
  let sections;
  let headers;
  let xsWidth = 12;

  let pivotedSections = WorkspaceHelpers.pivotSections(source.sections, target.sections);

  sections = pivotedSections.map((section, index) =>
    <Section
      key={index}
      section={section}
      sectionIndex={index}
      setTargetBlock={setTargetBlock}
      xsWidth={xsWidth}
    />
  );

  headers = (
    <Grid className={classes.headers} container wrap="nowrap" spacing={16}>
      <Grid item xs={xsWidth}>
        <Chip
          icon={<Translate />}
          label={'(' + source.languageId + ') ' + source.languageName + ' - ' + source.version}
          onDelete={()=>{}}
          variant="outlined"
          className={classes.header}
          style={{background: '#fff9'}}
        />
      </Grid>
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
  source: PropTypes.object.isRequired,
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
