import React from 'react';

import BurgerIngredient from './BurguerIngredient/BurguerIngredient';

import classes from './Burguer.css';

const burguer = props => {
  let transformedIngredients = Object
    .keys(props.ingredients)  
    .map(igKey => {            
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []); 
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredient</p>
  }

  return (
    <div className={classes.Burguer}>
      <BurgerIngredient type="bread-top" />
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burguer;