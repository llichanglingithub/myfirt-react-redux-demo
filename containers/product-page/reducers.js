import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../../constants/ActionTypes'

const products = (state, action) => {
   //console.log("Enter the products(products---------reducer)")
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        inventory: state.inventory - 1
      })
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  //console.log("Enter the byId(products---------reducer)")
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({},
        state,
        action.products.reduce((obj, product) => {
          obj[product.id] = product
          //console.log("receive product obj info ===****"+JSON.stringify(obj))
          return obj
        }, {})
      )
    default:
      const { productId } = action
      if (productId) {
        return Object.assign({}, state, {
          [productId]: products(state[productId], action)
        })
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  //console.log("Enter the visibleIds(products---------reducer)")
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) => {
  //console.log("Enter the getProduct(products---------reducer)")
  //console.log("Enter the getProduct(products---------reducer-----return----)"+new Date())
  //console.log(state.byId[id])
  return state.byId[id]
}

export const getVisibleProducts = (state) => {
  //console.log("this is a test ******** Enter the getVisibleProducts(products---------reducer)")
  return state.visibleIds.map(id => getProduct(state, id))
}
