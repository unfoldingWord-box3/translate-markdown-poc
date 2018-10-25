import React from 'react';
import ApplicationBar from './ApplicationBar';

const filepath = 'translate/figs-metaphor/01.md'

const ApplicationBarContainer = (props) =>
  <ApplicationBar {...props} filepath={filepath} />

export default ApplicationBarContainer;
