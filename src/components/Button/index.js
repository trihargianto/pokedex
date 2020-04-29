import React from 'react';

import * as SC from './Button.sc';

const Button = ({ fluid = false, outlined = false, children, ...rest }) => (
  <SC.Button type="button" fluid={fluid} outlined={outlined} {...rest}>
    {children}
  </SC.Button>
);

export default Button;
