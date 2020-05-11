import React from 'react';

import burgerLogo from '../../assets/images/burguer-logo.png';
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurguer" />
  </div>
);

export default logo;