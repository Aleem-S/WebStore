import React from 'react';
import { connect } from 'react-redux';

import { ToggleCartHidden } from '../../redux/Cart/CartActions';

import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={ToggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
<span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = ({ cart: {cartItems}}) => ({
  itemCount: cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);