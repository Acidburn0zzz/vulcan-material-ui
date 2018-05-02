import React from 'react';
import MuiInput from '../base-controls/MuiInput';
import { replaceComponent } from 'meteor/vulcan:core';


const EmailComponent = ({ inputProperties, refFunction }) =>
  <MuiInput {...inputProperties} ref={refFunction} type="email" />;


replaceComponent('FormComponentEmail', EmailComponent);
