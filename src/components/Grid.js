import React from 'react'
import { connect } from 'react-redux'

const Grid = ({ products }) => {

  return (
    <div className="products-grid">
      {
        products.map((product, i) => {
          return (
            <div className="product-card" key={i}>
              <p className="product-title">{product.name}</p>
              <span className="product-price">${product.price}</span>
            </div>
          );
        })
      }
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.productsReducer
});

export default connect(mapStateToProps)(Grid);
