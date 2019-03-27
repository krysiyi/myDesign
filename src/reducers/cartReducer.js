import {
    ADD_CART,
    DECRESE_CART_COUNT,
    INCRESE_CART_COUNT,
    TOGGLE_CART_STATUS,
    TOGGLE_ALL_CART_STATUS,
    TOGGLE_CART_EIDT,
    DELETE_CART_ISCHECKED} from '../actions/actionType';

const initicalState = {
    cartlist:window.localStorage.getItem('cartlist')===null?[]:JSON.parse(window.localStorage.getItem('cartlist')),
    isEdit:false
};


const cartReducer = (state=initicalState,action)=>{
    let newState = Object.assign({},state);
    switch(action.type){
        case ADD_CART:
        //console.log(action.item);
        //console.log(newState);
        const isCart = newState.cartlist.some(item=>{
            return item.id===action.item.id
        })
        if(isCart){
            newState.cartlist = newState.cartlist.map(item=>{
                if(item.id===action.item.id)
                item.count+=1;
                return item;
            })
        }else{
            action.item = Object.assign(action.item,{count:1,isChecked:false});
            //action.item.count=1;
            newState.cartlist = newState.cartlist.concat(action.item);
        }
        //console.log(newState);
        //console.log(isCart);
        window.localStorage.setItem('cartlist',JSON.stringify(newState.cartlist));
        return newState;

        case DECRESE_CART_COUNT:
        newState.cartlist = newState.cartlist.map(item=>{
            if(item.id===action.payload.id)
            item.count=item.count>1?item.count-1:1;
            return item;
        })
        window.localStorage.setItem('cartlist',JSON.stringify(newState.cartlist));
        return newState;

        case INCRESE_CART_COUNT:
        newState.cartlist = newState.cartlist.map(item=>{
            if(item.id===action.payload.id)
            item.count+=1;
            return item;
        })
        window.localStorage.setItem('cartlist',JSON.stringify(newState.cartlist));
        return newState;

        case TOGGLE_CART_STATUS:
        newState.cartlist = newState.cartlist.map(item=>{
            if(item.id===action.payload.id)
            item.isChecked=!item.isChecked;
            return item;
        })
        window.localStorage.setItem('cartlist',JSON.stringify(newState.cartlist));
        return newState;

        case TOGGLE_ALL_CART_STATUS:
        newState.cartlist = newState.cartlist.map(item=>{
            item.isChecked=action.payload.isTrue;
            return item;
        })
        window.localStorage.setItem('cartlist',JSON.stringify(newState.cartlist));
        return newState;

        case TOGGLE_CART_EIDT:
        newState.isEdit = !newState.isEdit;
        return newState;
        case DELETE_CART_ISCHECKED:
        newState.cartlist = newState.cartlist.reduce((result,item)=>{
            if(!item.isChecked)
            result.push(item)
            return result
        },[])
        window.localStorage.setItem('cartlist',JSON.stringify(newState.cartlist));
        return newState;
        
        default:return state;
    }
}

export default cartReducer;