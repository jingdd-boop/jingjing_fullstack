import {fromJS} from 'immutable';
import * as actionType from './actionType';

const defaultStatus=fromJS({
    shoplist:[]
})

export default (state=defaultStatus,action)=>{
    switch(action){
        case actionType.SHOP_LIST:
            return state.set('shoplist',action.data);
        default:
            return state
    }
}