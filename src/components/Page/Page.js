import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  IconButton,
  Chip,
} from '@material-ui/core';
import {
  CheckCircle,
  LabelImportant,
  GTranslate,
  Translate,
  Settings,
  AddCircle,
} from '@material-ui/icons';

import Block from '../Block';

import sourceMarkdown from './10-en.md.js';
import targetMarkdown from './10-hi.md.js';

export const Page = () => {
  const sourceArray = sourceMarkdown.split(/\n/)
    .filter(line => {return line !== ''});
  const targetArray = targetMarkdown.split(/\n/)
    .filter(line => {return line !== ''});
  const blocks = sourceArray.map((sourceLine, index) =>
    <Grid container wrap="nowrap" key={index} alignItems="center" xs={13} spacing={16}>
      <Grid component="div" item xs={4}>
        <Block markdown={sourceLine} reverse />
      </Grid>
      <Grid item xs={4}>
        <Block markdown={sourceLine} />
      </Grid>
      <Grid item xs={1} style={{ textAlign: "center", minWidth: '3em', padding: 0, }}>
        <IconButton aria-label="Complete">
          <CheckCircle fontSize="small" />
        </IconButton>
        <br/>
        <IconButton aria-label="Copy">
          <LabelImportant fontSize="small" />
        </IconButton>
        <br/>
        <IconButton aria-label="Copy">
          <GTranslate fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <Block markdown={targetArray[index]} editable={true} />
      </Grid>
    </Grid>
  );

  return (
    <div>
      <Grid container wrap="nowrap" alignItems="center" xs={13} spacing={16}>
        <Grid component="div" item xs={4}>
          <Chip
            icon={<Translate />}
            label={"(NE) Hsilgne"}
            onDelete={{}}
            variant="outlined"
            style={{justifyContent: 'space-between', width: '100%', background: '#eee'}}
          />
        </Grid>
        <Grid item xs={4}>
          <Chip
            icon={<Translate />}
            label={"(EN) English"}
            onDelete={{}}
            variant="outlined"
            style={{justifyContent: 'space-between', width: '100%', background: '#eee'}}
          />
        </Grid>
        <Grid item xs={1} style={{ textAlign: "center", minWidth: '3em', padding: 0, }}>
          <IconButton aria-label="Add Source">
            <AddCircle fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <Chip
            icon={<Translate />}
            label={"(HI) Hindi"}
            onDelete={{}}
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

Page.propTypes = {
}

export default Page;
