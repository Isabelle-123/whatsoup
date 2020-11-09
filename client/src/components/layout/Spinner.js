import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment
    >
    <img
      src={spinner}
      style={{ width: '50vw', maxWidth: '300px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      alt='Loading...'
    />
  </Fragment>
);
