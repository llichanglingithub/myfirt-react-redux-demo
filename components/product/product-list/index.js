import React, { Component, PropTypes } from 'react'
import styles from './style.css'

export default class ProductsList extends Component {
  
  render() {
    //console.log("The ProductsList compoent is creaded")
    return (
      <div className={styles.bg}>
        <h3 className={ styles.title }>{this.props.title}</h3>
        <div className={ styles.productList }>{this.props.children}</div>
      </div>
    )
  }
}
ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}
