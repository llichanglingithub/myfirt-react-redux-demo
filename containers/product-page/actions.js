import * as types from '../../constants/ActionTypes'

const addToCartUnsafe = (productId) => {
   //console.log("Enter the addToCartUnsafe(action)")
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export const addToCart = (productId) => {
   //console.log("Enter the addToCart(action)")
  return (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId))
    }
  }
}
