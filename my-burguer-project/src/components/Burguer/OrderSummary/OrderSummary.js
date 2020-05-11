import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // esse componente poderia ser funcional. É um componente classe apenas para mostrar no console quando ele era renderizado
  componentDidUpdate() {
    console.log('[OrderSummary] DidUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        );
      });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burguer with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel} >CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>
      </Aux>
    );    
  }
};

export default OrderSummary;