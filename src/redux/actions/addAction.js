import {ADD_PRODUCT_CART} from './types';

export const addCart = (productID) => {
    return (dispatch) => {
        // console.log(productID)
        dispatch({
            type: ADD_PRODUCT_CART,
            payload: productID
        })
    }
}