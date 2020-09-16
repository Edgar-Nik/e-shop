import React from 'react'
import s from './cart-item.module.css'

function CartItem(props) {
    return (
        <div  className={s.cartItem}>
          <div className={s.image}>
            <img src={props.imageUrl} alt="item-pic" />
          </div>
          <div className={s.aboutItem}>
            <p>{props.name}</p>
          </div>
          <div className={s.price}>
            <p>Total Price: {props.price*props.count}$</p>
            <p className={s.smallerText}>Price: {props.price}$</p>

            <p>Count: {props.count}</p>

          </div>
        </div>
    )
}

export default CartItem
