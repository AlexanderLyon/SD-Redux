import React from 'react'
import { connect } from 'react-redux'

const Grid = ({ products }) => {

  const createListing = () => {
    return products.map((product, i) => {
      return (
        <div className="product-card" key={i}>
          <p className="product-title">{product.name}</p>
          <span className="product-price">${product.price}</span>
        </div>
      );
    });
  }

  return (
    <div className="products-grid">
      { createListing() }
    </div>
  )
}

const mapStateToProps = state => ({
  products: state
});

export default connect(mapStateToProps)(Grid);
