import {GET_NUMBERS_CART} from '../actions/types'


export const getNumbers =()=>{
    return (dispatch) => {
        //getting all cart numbers
        dispatch({
            type: GET_NUMBERS_CART
        })
    }
}