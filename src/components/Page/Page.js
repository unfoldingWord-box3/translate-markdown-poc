import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { CheckCircle, LabelImportant, GTranslate } from '@material-ui/icons';

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
      <Grid item xs={6}>
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
      <Grid item xs={6}>
        <Block markdown={targetArray[index]} editable='true' />
      </Grid>
    </Grid>
  )

  return blocks;
}

Page.propTypes = {
}

export default Page;
