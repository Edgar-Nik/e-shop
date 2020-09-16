import React from 'react';
import { connect } from 'react-redux';
import  './cart.css';
import CartItem from '../cart-item/cart-item'

function Cart({ cartProps }) {
  console.log(cartProps);
  let cartProducts = [];
  cartProducts = cartProps.products.filter((item) => item.inCart);
  console.log(cartProducts);
  return (
    <div className='cart-container'>
   {cartProducts.length>0 ? cartProducts.map(item=>{
     return  <CartItem imageUrl={item.imageUrls} name={item.name} price={item.price} count ={item.count}/>
   }) : 0}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps)(Cart);
