import React , {useEffect} from 'react';
import {Link} from 'react-router-dom'
import logo from './site-logo.png'
import s from './header.module.css'
import {connect } from 'react-redux'
import {getNumbers } from '../../redux/actions/getAction'



const Header = (props) =>{
    console.log(props)
useEffect(()=>{
    getNumbers()
},[])
    return (
        <header>
            <div className={s.logo}><Link to='/'><img className={s.logoPic} src={logo} alt="logo"/></Link></div>
            <div className={s.headerItems}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                </ul>
    <div className={s.headerCart}><Link to='/cart'><i className="fa fa-shopping-cart" aria-hidden="true"></i><p>Cart</p><p>{props.cartProps.cartNumbers}</p></Link></div>
            </div>

        </header>
    )
}
const mapStateToProps = state =>({
    cartProps: state.cartState
})
export default connect (mapStateToProps,{getNumbers})(Header);