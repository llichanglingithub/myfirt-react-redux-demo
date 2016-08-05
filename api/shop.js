
import _products from './products.json'

const TIMEOUT = 100

export default {
  getProducts(cb, timeout) {
  	console.log("Enter the shop's gerProducts(fucntion)")
  	console.log(JSON.stringify(_products))
    setTimeout(() => cb(_products), timeout || TIMEOUT)
  },

  buyProducts(timeout) {
  	console.log("Enter the shop's buyProducts(fucntion)")
    setTimeout("alert('购物车已经结算完成!')", timeout || TIMEOUT)
  }
}
