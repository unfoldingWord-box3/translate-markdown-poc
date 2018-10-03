import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export const Page = (classes) =>
  <Paper style={{padding: '1em'}} elevation={1}>
    <Typography variant="headline" component="h3">
      This is a sheet of paper.
    </Typography>
    <Typography component="p">
      Paper can be used to build surface or other elements for your application.
    </Typography>
  </Paper>

Page.propTypes = {
}

export default Page;
