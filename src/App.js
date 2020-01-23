import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchProductsFromAPI } from './actions';
import './App.css';

const App = props => {
  useEffect(() => {
    props.fetchProducts.then(() => {
      console.log('Products retrieved:', props.products);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Store</h1>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: dispatch(fetchProductsFromAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
