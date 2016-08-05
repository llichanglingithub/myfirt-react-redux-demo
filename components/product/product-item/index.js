import React, { Component, PropTypes } from 'react'
import Product from '../product-info'
import styles from './style.css'

export default class ProductItem extends Component {
  
  render() {
    //console.log("The ProductItem compoent is creaded")
    const { product } = this.props
    //console.log("ProductItem--------this is product infomation:")
    
    return (
      <div className={styles.itemMargin}>
        <Product
          image={product.image}
          title={product.title}
          passPrice={product.passPrice}
          price={product.price}
          quantity={product.inventory} />
        <button
          onClick={this.props.onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}
          className={ styles.addButton }>
          {product.inventory > 0 ? 'Buy this' : 'Sold Out'}
        </button>
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    passPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}
