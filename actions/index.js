import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

function receiveProducts(products) {
  //console.log("Enter the receiveProducts(action)")
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}

export function getAllProducts() {
   console.log("Enter the getAllProducts(action)")
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}
