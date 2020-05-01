import React from 'react';

import BurgerIngredient from './BurguerIngredient/BurguerIngredient';

import classes from './Burguer.css';

const burguer = props => {
  let transformedIngredients = Object
    .keys(props.ingredients)  // transforma os nomes dos atributos do obj ingredientes em um array de strings
    .map(igKey => {           // itera sobre o array retornado 
      // inicializa um array com posições vazias, mas com tamanho igual ao inteiro vinculado ao ingrediente no array original
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // para cada posição vazia gerada no array, é renderizado um ingrediente 
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []); // cria uma copia do array de componentes gerados e armazena em transformedIngredients 

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