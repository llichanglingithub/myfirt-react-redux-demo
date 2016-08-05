import shop from '../../api/shop'
import * as types from '../../constants/ActionTypes'

export const checkout= (products) => {
  //console.log("Enter the checkout(action)")
  return (dispatch, getState) => {
    const cart = getState().cart
    //console.log("Enter the checkout(action)-------"+JSON.stringify(cart))
    dispatch({
      type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
      dispatch({
        type: types.CHECKOUT_SUCCESS,
        cart
      })
      // Replace the line above with line below to rollback on failure:
      // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}