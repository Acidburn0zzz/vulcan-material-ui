import React from 'react';
import MuiSuggest from '../base-controls/MuiSuggest';
import { registerComponent } from 'meteor/vulcan:core';
import { countries } from './countries';


const CountrySelect = ({ inputProperties, refFunction }) =>
  <MuiSuggest {...inputProperties} ref={refFunction} options={countries} limitToList={true}/>;


registerComponent('CountrySelect', CountrySelect);
