import React from 'react';
import s from './home.module.css';
import Item from '../item/item';
import { sampleProducts } from '../../Data';
import {connect} from 'react-redux';
import {addCart} from '../../redux/actions/addAction'

function Home(props) {
  
  return (
    <div className={s.home}>
      <div className={s.mainContainer}>
        {sampleProducts.map((item) => {
          return <Item key={item.id} imgUrl={item.imageUrls} name={item.name} price={item.price} buttonClick={()=>{props.addCart(item.id)}}/>;
        })}
      </div>
    </div>
  );
}

export default connect(null,{addCart})(Home) ;
