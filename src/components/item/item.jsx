import React from 'react';
import s from './item.module.css';

const Item = (props) => {
  return (
    <div className={s.container}>
      <div className={s.pic}>
        <img src={props.imgUrl} alt="item-pic" />
      </div>
      <div className={s.heading}>
        <p>{props.name}</p>
      </div>
      <div className={s.price}>
        <p>{props.price}$</p>
      </div>
      <div className={s.addToCartBtn} onClick={props.buttonClick}><p>Add to cart</p></div>
    </div>
  );
};

export default Item;
