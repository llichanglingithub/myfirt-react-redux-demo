import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from './actions'
import { getVisibleProducts } from './reducers.js'
import ProductItem from '../../components/product/product-item'
import ProductsList from '../../components/product/product-list'

class ProductsContainer extends Component {
  render() {
    //console.log("The ProductsContainer compoent is creaded")
    const { products } = this.props
    console.log("ProductsContainer----------there are products infomation from return:")
    console.log(JSON.stringify(products))
    return (
      <ProductsList title="Products">
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => this.props.addToCart(product.id)} />
        )}
      </ProductsList>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    passPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products)
  }
}

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
