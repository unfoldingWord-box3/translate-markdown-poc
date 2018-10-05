import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { LabelImportant } from '@material-ui/icons';
import Switch from '@material-ui/core/Switch';

import Block from '../Block';

import sourceMarkdown from './10-en.md.js';
import targetMarkdown from './10-hi.md.js';

export const Page = () => {
  const sourceArray = sourceMarkdown.split(/\n/)
    .filter(line => {return line !== ''});
  const targetArray = targetMarkdown.split(/\n/)
    .filter(line => {return line !== ''});
  const blocks = sourceArray.map((sourceLine, index) =>
    <Grid key={index} xs={13} container spacing={16}>
      <Grid item xs={5}>
        <Block markdown={sourceLine} />
      </Grid>
      <Grid item xs={1} alignContent="center">
        <Switch defaultChecked value="checked" color="primary" />
        <IconButton aria-label="Complete">
          <LabelImportant fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={5}>
        <Block markdown={targetArray[index]} editable='true' />
      </Grid>
    </Grid>
  )

  return blocks;
}

Page.propTypes = {
}

export default Page;
