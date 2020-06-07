import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active="" exact>Burguer Builder</NavigationItem>
    <NavigationItem link="/orders" active="">Orders</NavigationItem>
  </ul>
);

export default navigationItems;