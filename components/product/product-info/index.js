import React, { Component, PropTypes } from 'react';
import styles from './style.css'

export default class Product extends Component {
  
  render() {
    //console.log("The Product compoent is creaded")
    const { image, passPrice, price, quantity, title } = this.props
    console.log("------the product count:"+quantity)
    return (
    	<div className={styles.productInfo}> 
        <div className={ styles.productItem }>
          <span ><img src={ image } className={styles.itemImage}/></span>
        </div>
        <div className={ styles.productItem }>
          <span className={styles.itemTitle}>{ title }</span> 
        </div>
        <div className={ styles.productItem }>
          <span className={styles.itemPassPrice}>原价：&#36;{ passPrice }</span>
          <span className={styles.itemPrice}>现价：&#36;{ price }</span>
          <span className={styles.itemCount}>库存：{ quantity ? `x ${quantity}` : null }</span>
        </div>
    	</div>
    )
  }
}

Product.propTypes = {
  image:PropTypes.string,
  passPrice: PropTypes.number,
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}
