import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from './actions'
import { getTotal, getCartProducts } from '../../reducers.js'
import Cart from '../../components/cart'

class CartContainer extends Component {
  
  render() {
    //console.log("The CartContainer compoent is creaded")
    const { products, total } = this.props
    return (
      <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => this.props.checkout()} />
    )
  }
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    passPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
    total: getTotal(state)
  }
}

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
