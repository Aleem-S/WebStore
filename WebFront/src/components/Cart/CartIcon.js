import React from 'react';
import { connect } from 'react-redux';

import { ToggleCartHidden } from '../../redux/Cart/CartActions';
import {selectCartItemsCount} from '../../redux/Cart/CartSelectors'

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

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);