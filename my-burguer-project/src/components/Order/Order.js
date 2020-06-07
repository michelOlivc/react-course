import React from 'react';

import classes from './Order.css';

const order = props => {
  const ingredients = [];
  for(let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(i => {
    return (
      <span key={i.name} className={classes.Ingredients}>
        {i.name} ({i.amount})
      </span>
    );
  })
  
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    </div>
  );
};

export default order;