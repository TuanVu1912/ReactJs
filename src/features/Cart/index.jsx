import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartTotal = useSelector(cartTotalSelector);
  console.log(cartTotal);
  return <div>{cartTotal}</div>;
}

export default CartFeature;
