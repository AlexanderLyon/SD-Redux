import React from 'react'
import { connect } from 'react-redux'

const Filters = ({ products }) => {

  const createFilters = () => {
    let filters = {};

    products.forEach((product) => {
      Object.keys(product.attributes).forEach((attr) => {

        // Add keys
        if (!filters[attr]) {
          filters[attr] = [];
        }

        // Add unique values
        if (filters[attr] && !filters[attr].includes(product.attributes[attr])) {
          filters[attr].push(product.attributes[attr]);
        }
      });
    });

    let filterContent = [];

    Object.keys(filters).forEach((title) => {
      let options = filters[title].map((value, i) => (
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
  products: state
});

export default connect(mapStateToProps)(Filters);
