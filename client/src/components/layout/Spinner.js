import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment
    >
    <img
      src={spinner}
      style={{ width: '40%',  marginLeft: '30%', marginRight: '30%' }}
      alt='Loading...'
    />
  </Fragment>
);
