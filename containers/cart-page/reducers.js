import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  //console.log("Enter the addedIds(cart---------reducer)")
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      console.log("Enter the addedIds(cart----return state -----reducer)")
      console.log(JSON.stringify(state))
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  //console.log("Enter the quantityById(cart---------reducer)")
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return Object.assign({}, state, {
        [productId]: (state[productId] || 0) + 1
      })
    default:
      return state
  }
}

const cart = (state = initialState, action) => {
  //console.log("Enter the cart(cart---------reducer)")
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export const getQuantity = (state, productId) => {
  //console.log("Enter the getQuantity(cart---------reducer)")
  return state.quantityById[productId] || 0
}

export const getAddedIds = (state) => {
   //console.log("Enter the getAddedIds(cart---------reducer)")
   //console.log("Enter the getAddedIds(cart-----reducer----return)"+state.addedIds)
  return state.addedIds
}

export default cart
