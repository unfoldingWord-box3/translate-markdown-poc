import React from 'react';
import ApplicationBar from './ApplicationBar';

const projectName = 'translationAcademy';
const filepath = 'translate/figs-metaphor/01.md';

const ApplicationBarContainer = (props) =>
  <ApplicationBar
    {...props}
    projectName={projectName}
    filepath={filepath}
  />

export default ApplicationBarContainer;
