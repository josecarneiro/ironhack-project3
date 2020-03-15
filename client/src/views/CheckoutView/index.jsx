import React, { Component } from 'react';

import { create as createPurchase } from './../../services/purchase';
import { Link } from 'react-router-dom';

import './style.scss';

class CheckoutView extends Component {
  constructor() {
    super();
   

    this.handlePurchase = this.handlePurchase.bind(this);
    
  };

  async handlePurchase() {
    const ids = 3;
    try {
      await createPurchase(ids);
    } catch (error) {
      console.log(error);
    }
  }

 
  render() {
    return (
      <div>
        <h1>PLAN 01</h1>
        <button onClick={this.handlePurchase}>Purchase</button>
        <h2>PLAN 02</h2>
        
        <button onClick={this.handlePurchase}>
          <Link to="/payment-method/list">Purchase</Link>
        </button>

      </div>
    );
  }
}

export default CheckoutView;