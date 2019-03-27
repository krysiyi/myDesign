import {CHANGE_PAGE_TITLE} from './actionType';
import {TOGGLE_PAGE_STATUS} from './actionType';
import {TOGGLE_LOGIN_STATUS} from './actionType';

const changePageTitle = (text)=>{
    return {
        type:CHANGE_PAGE_TITLE,
        text
    }
}
const togglePageStatus = (isSubpage)=>{
    return {
        type:TOGGLE_PAGE_STATUS,
        isSubpage
    }
}
const toggleLoginStatus = (isLogin)=>{
    return {
        type:TOGGLE_LOGIN_STATUS,
        isLogin
    }
}

export {
    changePageTitle,
    togglePageStatus,
    toggleLoginStatus
};
