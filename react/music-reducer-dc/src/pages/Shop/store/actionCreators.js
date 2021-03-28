import {SHOP_LIST} from './actionType'
import {getShopListRequest} from '../../../api/request';
export const shopList = data => ({
  type:SHOP_LIST,
  data
})
//api 两个action axios 只在action
export const getShopList = () => {
  return dispatch => {
    getShopListRequest()
    .then(res => {
      console.log(res)
      dispatch(shopList(res));
    })
  }
}
