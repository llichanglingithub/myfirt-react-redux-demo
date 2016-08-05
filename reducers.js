import { combineReducers } from 'redux'
import cart, * as fromCart from './containers/cart-page/reducers'
import products, * as fromProducts from './containers/product-page/reducers'

export default combineReducers({
  cart,
  products
})

function getAddedIds(state) {
  //console.log("Enter the getAddedIds(index---------reducer)")
  return fromCart.getAddedIds(state.cart)
}

function getQuantity(state, id) {
  //console.log("Enter the getQuantity(index---------reducer)")
  return fromCart.getQuantity(state.cart, id)
}

function getProduct(state, id) {
  //console.log("Enter the getProduct(index---------reducer)")
  return fromProducts.getProduct(state.products, id)
}

export function getTotal(state) {
  //console.log("Enter the getTotal(index---------reducer)")
  return getAddedIds(state).reduce((total, id) =>
    total + getProduct(state, id).price * getQuantity(state, id),
    0
  ).toFixed(2)
}

export function getCartProducts(state) {
  //console.log("Enter the getCartProducts(index---------reducer)")
  return getAddedIds(state).map(id => Object.assign(
    {},
    getProduct(state, id),
    {
      quantity: getQuantity(state, id)
    }
  ))
}
