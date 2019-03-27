import {
    ADD_CART,
    DECRESE_CART_COUNT,
    INCRESE_CART_COUNT,
    TOGGLE_CART_STATUS,
    TOGGLE_ALL_CART_STATUS,
    TOGGLE_CART_EIDT,
    DELETE_CART_ISCHECKED
} from './actionType';

const addCart = (item)=>{
    return{
        type:ADD_CART,
        item
    }
}

const addCount = (id)=>{
    return{
        type:INCRESE_CART_COUNT,
        payload:{
            id
        }
    }
}

const reduceCount = (id)=>{
    return{
        type:DECRESE_CART_COUNT,
        payload:{
            id
        }
    }
}
const toggleCartStatus = (id)=>{
    return{
        type:TOGGLE_CART_STATUS,
        payload:{
            id
        }
    }
}

const toggleAllCartStatus = (isTrue)=>{
    return{
        type:TOGGLE_ALL_CART_STATUS,
        payload:{
            isTrue
        }
    }
}

const toggleCartEdit= ()=>{
    return{
        type:TOGGLE_CART_EIDT
    }
}

const deleteCartIschecked = ()=>{
    return{
        type:DELETE_CART_ISCHECKED
    }
}
export {
    addCart,
    addCount,
    reduceCount,
    toggleCartStatus,
    toggleAllCartStatus,
    toggleCartEdit,
    deleteCartIschecked };