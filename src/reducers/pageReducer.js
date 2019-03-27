import {
    CHANGE_PAGE_TITLE,
    TOGGLE_PAGE_STATUS,
    TOGGLE_LOGIN_STATUS
} from '../actions/actionType';
const initicalState = {
    pageTitle:'enjoy',
    isSubpage:false,
    isLogin:false
}


const pageReducer = (state=initicalState,action)=>{
    switch(action.type){
        case CHANGE_PAGE_TITLE :
            return {...state,pageTitle:action.text}
        case TOGGLE_PAGE_STATUS :
            return {
                ...state,
                isSubpage:action.isSubpage
            }
        case TOGGLE_LOGIN_STATUS :
            return {
                ...state,
                isLogin:action.isLogin
            }
        default:return state;
    }
}

export default pageReducer;