import React from 'react'
import { connect } from 'react-redux'

const Filters = ({ products }) => {

  const createFilters = () => {

    let filtersObj = products.reduce((accumulator, product) => {
      Object.keys(product.attributes).forEach((attr) => {

        // Add keys
        if (!accumulator[attr]) {
          accumulator[attr] = [];
        }

        // Add unique values
        if (!accumulator[attr].includes(product.attributes[attr])) {
          accumulator[attr].push(product.attributes[attr]);
        }
      });

      return accumulator;
    }, {});

    let filterContent = [];

    Object.keys(filtersObj).forEach((title) => {
      let options = filtersObj[title].map((value, i) => (
        <button key={i}>{value}</button>
      ));

      filterContent.push(
        <div>
          <h4>{title}</h4>
          {options}
        </div>
      );
    });

    return filterContent;
  }

  return (
    <div className="filters">
      <div className="filter-options">
        { createFilters() }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.productsReducer
});

export default connect(mapStateToProps)(Filters);
