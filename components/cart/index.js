import React, { Component, PropTypes } from 'react'
import Product from '../product/product-info'
import styles from './style.css'

export default class Cart extends Component {
  
  render() {
    //console.log("The Cart compoent is creaded")
    const { products, total, onCheckoutClicked } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <p>Please add some products to cart.</p> :
      products.map(product =>
        <Product
          image={product.image}
          title={product.title}
          passPrice={product.passPrice}
          price={product.price}
          quantity={product.quantity}
          key={product.id}/>
      )

    return (
      <div className={styles.cartBG}>
        <h3 className={styles.title}>Your Cart</h3>
        <div className={styles.cartItem}>{nodes}</div>
        <p className={styles.total}>Total: &#36;{total}</p>
        <button onClick={onCheckoutClicked}
          className={styles.checkoutButton}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}
