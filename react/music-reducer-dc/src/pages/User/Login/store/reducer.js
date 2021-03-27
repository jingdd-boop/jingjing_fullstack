import {fromJS} from 'immutable';
import * as actionType from './constants';

const defaultStatus=fromJS({
    userInfo:{},
    loginStatus:false
})

export default (state=defaultStatus,action)=>{
    switch(action){
        case actionType.CHANGE_LOGIN_STATUS:
            return state.set('loginState',action.data);
        case actionType.CHANGE_USER_INFO:
            return state.set("userInfo",action.data);
        default:
            return state
    }
}